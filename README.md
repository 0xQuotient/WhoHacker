# WhoHacker

"Hacker" is a bloated term. It covers everyone from someone running Burp Suite against a web app to someone writing kernel exploits, and explaining your actual specialization usually takes a long conversation.

WhoHacker is the middle ground: a **tag**, a quick surface-level summary of your specialization that says where you attack and how.

> **Web Operator** · **Network × Cloud Toolsmith** · **Binary Exploit Developer**

## The tag

A tag has two parts, written Archetype first.

- **Archetype** is where you hack: Web, Network, Cloud, Mobile, Cryptocurrency, Human, IoT, Binary, AI.
- **Style** is how you hack: Operator, Toolsmith, Exploit Developer, Researcher, Reverse Engineer, Strategist.

Tags are shorthand, not a ranking and not a limit. An Operator who does everything in Burp Suite can be an expert, and Style says nothing about skill level.

Notation:

- `Network × Cloud` means two lanes are evenly split.
- `Web (IoT)` means mostly Web with some IoT. Out loud: "primarily web with some IoT."
- No symbol means one lane clearly leads.

"Human" is the Social Engineering archetype from the OSA. It is its own specialization, and it also travels into every other lane.

## Two assessments

- **Assessment 1** is for beginners. It is 18 interest questions and measures what pulls you, not what you can do.
- **Assessment 2** is for people with experience. It is 45 items, 5 per Archetype, each tied to a class from the OSA. You say how far you took each one: never, tried it, did it on my own, or done it for real. Nothing is self-rated for confidence, only what you have actually touched.

Both ask their questions in a fresh random order each run. Assessment 2's results can be viewed as a spider chart, histogram, Archetype by Style grid, skill tree, or a list of next steps by class. These are counts of your own answers, not interpretation.

## Run it

It is a single static file with no build step. Open `index.html` in a browser.

## Check the scoring

```
node tools/simulate.js 30000
```

This answers both assessments at random and prints how often each Archetype and Style ends up as the tag. Archetypes land near 11% each. Styles are close to even but not exact, because some Archetype and Style pairings do not exist (for example Cloud Exploit Developer).

## Background

Built on two posts I wrote:

- [Offensive Security Archetypes](https://paragraph.com/@derrickjr/osa), where the Archetypes and their classes come from
- [Technical Hacking is Social](https://paragraph.com/@derrickjr/technical-hacking-is-social), which the coding notes on each Style follow

## Status

Early version. Still to do: test it with real people to tune the cutoffs for hybrid and secondary tags, and check that Operator and Strategist can be told apart.
