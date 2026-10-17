# WhoHacker

A "political compass for hackers." Two short quizzes produce a two-part tag, **[Archetype] [Style]**:

- **Archetype** is *where* you hack: Web, Network, Cloud, Mobile, Cryptocurrency, Human, IoT, Binary, AI.
- **Style** is *how* you hack: Operator, Toolsmith, Exploit Developer, Researcher, Reverse Engineer, Strategist.

Tags are shorthand for a specialty, not a ranking. An Operator who lives in Burp Suite can be an expert.

Notation: `Network × Cloud` means evenly split, `Web (IoT)` means mostly Web with some IoT.

## The two assessments

1. **Assessment 1** (beginners): 18 interest questions, shuffled each run. Measures interest, not skill.
2. **Assessment 2** (experienced): 45 items, 5 per Archetype, each tied to a class from the OSA. Measures what you have actually done (never / tried / on my own / for real).

## Run it

It is a single static file with no build step. Open `index.html` in a browser.

## Check scoring fairness

```
node tools/simulate.js 30000
```

Answers both assessments at random and prints how often each Archetype and Style becomes the tag. Archetypes should land near 11% each. Styles are close to even but not exact, because some Archetype and Style pairings are invalid.

## Background

Companion to two posts by the author:

- [Offensive Security Archetypes](https://paragraph.com/@derrickjr/osa)
- [Technical Hacking is Social](https://paragraph.com/@derrickjr/technical-hacking-is-social)

## Status

Early version. Next steps: a small pilot with real testers to tune the 15% and 40% cutoffs and check that Operator and Strategist are distinguishable.
