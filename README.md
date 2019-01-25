# 8th Light Programming Challenge

This repository contains my solution to the programming compoment of the 8th Light prescreen assessment. 

## Ingredients

- [Express](expressjs.com) ✈️ because I'd never tried it before.
- [React](https://reactjs.org/) ⚛️ because I have tried it before.
- [Parcel](https://parceljs.org/) 🎁 because why config your bundler...?
- [Bulma](https://bulma.io/) 📗 because style is hard.
- [Sass](https://sass-lang.com/) 💃🏽 because Bulma.
- [Jest](jestjs.io) 🤡 because it's *supposed* to be fun...

## Usage

Run this project and develop it locally.
Please ensure you have the latest versions of node and npm.

(If you use nvm)

```bash
nvm use
```

First, install dependencies.

```bash
npm install
```

Next, build the frontend.

```bash
npm run start-client
```

Open another terminal and run the server.

```bash
npm run start-server
```

Now run tests, if you'd like. (In a third and final terminal)

```bash
npm run test
```

## Reflections

Writing this application presented challenges that I had never come up against before. I committed to making this app full-stack from the get go, rather than going for a SPA static site. I wanted to be able to keep stuff like my API key hidden on the server, plus I'm generally not a huge fan of the static SPA anyway. 

The biggest challenge was dealing with the mixture of frontend and backend JS. I would have used Python were it not for the caveat that I couldn't use  the same language as I used for the other part of the challenge. I've been writing a good deal of React lately, so I pretty much completely forgot about the mechanics of `require` and its associated acts. I've been spoiling myself with 0 config compilation (the way it should be, imo) by using Parcel as well. 

I probably spent around 2.5 hours trying to import my `helpers` module into my tests before realizing that I had a sort of tenous setup mixing 2 flavors of JS with this application. Many `.babelrc`s were copy-pasted, but I managed to roll it back to 0 in the end. Unfortunately, I ended up having to brute-force my tests for `helpers` by copy-pasting code since the mix of ES*/Node in this codebase + time constaints prevented a clean solution to testing different flavors of JS at once.

This app ended up having a much richer client side than I expected, which is not usually my preference. In retrospect, a lot of my testing issues could have been alleviated if I did stuff like manipulating text or substituting missing images server side. Overall, I'm happy to have gotten it where it's at and happy to have been given the opportunity to complete this challenge. It was great to further hone my [recently acquired](https://medium.com/@whole_grainsley/learning-vim-as-dev-meditation-bcaeb0573adf) vim/tmux skills, and I think I'm a fan of express now. 