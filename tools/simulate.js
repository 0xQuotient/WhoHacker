// Fairness check: answers both assessments at random many times and prints how often each lane/Style becomes the tag.
// Usage: node tools/simulate.js [runs]
const vm = require('vm'), fs = require('fs'), path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const js = html.match(/<script>([\s\S]*)<\/script>/)[1];
const el = { addEventListener() {}, innerHTML: '', querySelector() { return null; } };
const ctx = { document: { getElementById: () => el, body: { classList: { toggle() {} } } }, window: {}, navigator: {}, console, Math };
vm.createContext(ctx);
vm.runInContext(js + ';this.X={Q1,ITEMS,scoreA1,tagA1,scoreA2,tagA2}', ctx);
const X = ctx.X, N = +process.argv[2] || 30000;
const a1 = { a: {}, s: {} }, a2 = { a: {}, s: {}, none: 0 };
const bump = (o, k) => (o[k] = (o[k] || 0) + 1);
for (let n = 0; n < N; n++) {
  const p = X.Q1.map(q => Math.floor(Math.random() * q.o.length));
  const t = X.tagA1(X.scoreA1(p), p); bump(a1.a, t.a); bump(a1.s, t.s);
  const t2 = X.tagA2(X.scoreA2(X.ITEMS.map(() => Math.floor(Math.random() * 4))));
  if (t2.none) a2.none++; else { bump(a2.a, t2.a); bump(a2.s, t2.s); }
}
const pct = o => JSON.stringify(Object.fromEntries(Object.entries(o).sort().map(([k, v]) => [k, +(v / N * 100).toFixed(1)])));
console.log('A1 archetype %', pct(a1.a)); console.log('A1 style %', pct(a1.s));
console.log('A2 archetype %', pct(a2.a)); console.log('A2 style %', pct(a2.s), 'no-evidence', a2.none);
