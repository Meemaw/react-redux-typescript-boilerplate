<!-- Name -->

<h1 align="center">
  <a href="https://github.com/Meemaw/react-redux-typescript-boilerplate">React Redux Typescript Boilerplate</a>
</h1>

<!-- Badges -->

<p align="center">

  <a href="https://github.com/Meemaw/react-redux-typescript-boilerplate/actions">
    <img alt="Github Action" src="https://github.com/Meemaw/react-redux-typescript-boilerplate/workflows/website/badge.svg" />
  </a>

  <a href="http://makeapullrequest.com">
    <img alt="Make a pull request" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
  </a>

  <a href="https://opensource.org/">
    <img alt="Open Source" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"/>
  </a>

  <a href="https://github.com/DevExpress/testcafe">
    <img alt="TestCafe" src="https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg">
  </a>

  <a href="https://codecov.io/gh/Meemaw/react-redux-typescript-boilerplate">
    <img alt="Codecov" src="https://codecov.io/gh/Meemaw/react-redux-typescript-boilerplate/branch/master/graph/badge.svg" />
  </a>

</p>

Opinionated `react-redux-typescript-boilerplate` with focus on best practices and painless developer experience.

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Features

- State Management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Linting with [prettier](https://github.com/prettier/prettier) and [eslint](https://eslint.org/)
- Up to date [Storybook](https://meemaw.github.io/react-redux-typescript-boilerplate)
- [Docker](https://www.docker.com/) support
- Code splitting with [React Suspense](https://reactjs.org/docs/code-splitting.html)
- CI integration with [Github Actions](https://github.com/actions)
- Unit testing with [Jest](https://jestjs.io/) and [RTL](https://testing-library.com/docs/react-testing-library/intro)
- E2E testing with [Testcafe](https://devexpress.github.io/testcafe/)

# Getting started

## Locally

```sh
➜ yarn install                              // install dependencies
➜ yarn start                                // start the app
➜ yarn build                                // build the app
➜ yarn test                                 // run unit tests
➜ yarn test:e2e                             // run e2e tests
```

## Docker

```sh
➜ docker build . -t react:app                                                            // build the react docker image
➜ docker run -it -p 3000:3000 react:app                                                  // runs react app on port 3000
➜ docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app react:app          // runs react app with hot realoding
➜ docker container run -it -v $(pwd):/app react:app test                                 // runs tests inside docker
```
