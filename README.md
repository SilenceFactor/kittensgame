[![Crowdin](https://badges.crowdin.net/kittensgame/localized.svg)](https://crowdin.com/project/kittensgame)



# README
## Contents
* [General Information](#general-information)
    * [No ES6, please](#no-es6-please)
    * [Roadmap](#roadmap)

* [CONTRIBUTION GUIDELINES](#contribution-guidelines)
    * [General Design Principles](#general-design-principles)
    * [Consistency](#consistency)
    * [Themes](#themes)
    * [Translation and Localization — *COMING SOON!!*](#translation-and-localization--coming-soon)
    * [LINKS](#links)

## General Information
* [Discord](https://discord.gg/Y8bTG3) - * check it first! *
* [Kittens Game subreddit](https://www.reddit.com/r/kittensgame)
* [dojo Reference Guide](https://dojotoolkit.org/reference-guide/1.7/dojo/index.html)
    * (I'm using mostly pre-1.7 dojo functionality.)


## Setup

### Prereq

* [NodeJS](https://nodejs.org/) v10+
* [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable )

### Installation

```
yarn install
```
To run the local developer server:

```
yarn start
```

## Contribution

### Rules

1. No meanies and baddies
2. No bureocracy

### Repo access

As a general rule, all changes should go through the PR.
If you have a write access, you can submit small changes directly without approval. Major changes are still advised to be pushed through PR.

Please run all major UI changes through Blood first.

### No ES6, please
The KG ecosystem must support about 20.000 different Android devices, iOS, and various OS and browser versions dating from 1980, including Chrome/FF/IE/Edge/webkit of all possible releases.

We support IE6. We support browsers that do not know how to work with local storage or web workers. I'm not sure, but it might actually work on Netscape, Links or Mosaic.

Please, no ()=>{}, const, require, webpackers, etc.

### Roadmap
* [Most recent roadmap on Trello](https://trello.com/b/cecIwqp2/kittens-game-roadmap)
    * NB: This has not been updated for years.

## Contribution Guidelines
* Brave souls that try to change formatting will be fed to wolfs.
* THERE IS NO UNUSED CODE in this repo.
* If you found some confusing place and wasted more than few hours here, please document it for your fellow devs.

### General Design Principles
* It's better to reuse existing buildings and resources than to introduce new ones.
* Active gameplay should be encouraged when possible, but it should not be an absolute requirement to play.
* Every problem or bottleneck should be addressed in multiple ways,
e.g. Tradepost to reduce fur consumption AND Hunting upgrade to get better yield.
* Every solution to a problem should create a new problem.
* Design things to be difficult initially, and address them with upgrades later.
    * For god's sake, never, **ever** nerf anything!!
* Consider how things will scale at later stages. You have a rare resource that costs 1 million unobtainium?
Someone will be able to farm trillions of them.
* Try to introduce some variety to the mechanics, but stay within the established rule system.
    * For example, Hunting requires catpower, grants you various resources, and has a chance to give you something rare.
    * Similarly, Trade requires catpower, grants you various resources, and has a chance to give you something rare.
        * Our players are really comfortable with the Trade mechanic because it uses familiar terms they know already.
* Don't use percent reduction effects. For every problem they may solve, a trillion new issues will appear.
* Don't use price reduction effects. (If you do, be *extremely* careful.)

### Consistency
* With code formatting, it's nice to have, but it's not critical.

### Themes
In a grim and dark future of catkind, no one can hear you scream.

* Good: mythical monsters, elder artifacts, arcane technologies, lost civilizations
* Bad: elves, fairies, robots, owls

### Translation and Localization

https://crowdin.com/project/kittensgame

### Links
* [Resource Order](./Resource-Order.md)