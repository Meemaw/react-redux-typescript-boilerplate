<!-- Name -->

<h1 align="center">
  <a href="https://github.com/Meemaw/react-redux-typescript-boilerplate">React Redux Typescript Boilerplate</a>
</h1>

<!-- Badges -->

<p align="center">

  <a href="https://travis-ci.com/Meemaw/react-redux-typescript-boilerplate">
    <img
       src="https://api.travis-ci.com/Meemaw/react-redux-typescript-boilerplate.svg?branch=master" />
  </a>

  <a href="http://makeapullrequest.com">
    <img
         src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
  </a>

  <a href="https://opensource.org/">
    <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"/>
  </a>

</p>

A highly scalable `react-redux-typescript-boilerplate` with focus on best practices and painless maintenance.

> This project was bootstrapped with [Create React App Typescript](https://github.com/wmonk/create-react-app-typescript).

### Features

- Linting with [prettier](https://github.com/prettier/prettier)
- Docker support [docker](https://www.docker.com/)
- Static type-checking with [Typescript](https://www.typescriptlang.org/)
- Opinionatedly scalable folder structure
- State Management with [Redux](https://redux.js.org/)
- Code splitting with [React Loadable](https://github.com/jamiebuilds/react-loadable)
- Testing with [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme)
- [Google Analyics](https://analytics.google.com/analytics/web/) HOC for page tracking
- Highly intuitive and typed approach to resource fetching
- CI integration with [Travis](https://travis-ci.org/)

### Getting started

###### Locally

```sh
yarn install                              // install dependencies
yarn start                                // start the app
yarn build                                // build the app
yarn test                                 // test
yarn test:coverage                        // test with coverage
```

###### Docker

```sh
docker build . -t react:app                                                            // build the react docker image
docker run -it -p 3000:3000 react:app                                                  // runs react app on port 3000
docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app react:app          // runs react app with hot realoding
docker container run -it -v $(pwd):/app react:app test                                 // runs tests inside docker
```

###### Better fetch

Fetching in javascript is a pain point especially when switching between projects. It is overwhelming to remember all resource endpoints and their response structures. Approach implemented in [lib/api](https://github.com/Meemaw/react-typescript-boilerplate/blob/master/src/lib/api/index.tsx) tries to solve that in typed and generic way. Using that, we can create seperate files for different resources and use them as "simple documentation". We can also leverage power of Typescript to statically type those resource responses and payloads and never worry about the types again.

###### Example

```js
/* resources/Coinmarketcap */

import api from '../../lib/api';
import { ResourceFetch } from '../../meta/types/Api';

const { GET } = api;

type CoinmarketCapServerResponse = {
  data: object;
  metadata: object;
};

interface CoinmarketCapResource {
  getTicker: ResourceFetch<CoinmarketCapServerResponse>;
  getTickerWithPayload: ResourceFetch<CoinmarketCapServerResponse, { message: string }>
}

const CoinmarketCapResource: CoinmarketCapResource = {
  getTicker: GET('https://api.coinmarketcap.com/v2/ticker/', { authenticated: false }),
};

/* pages/Ticker */

async componentDidMount() {
  const resp = await CoinmarketCapResource.getTicker();
  this.setState({ data: resp.data });
}
```

Using this approach, resp is strongly typed as `CoinmarketCapServerResponse`. Accesing any field that doesnt exist on it will throw an error. Moreover, any parameters passed to getTicker() method will throw an error. This can controlled throught second generic parameter to `ResourceFetch` interface. As in getTickerWithPayload() example, it will only work with { message: string } passed to it. This forces us to allways pass correct fetch payloads and avoid silly bugs and errors.

###### Looks great. It looks we define static urls in the resource files. How to use this with dynamic urls?

No worries. Url passed to exported GET/... function is actually an urlTemplate. Dynamic path sections can be annotated with `:`. Those will get replaced at invocation if `data` object passed contains template key. Following code would create url equivalent to the one in example above.

```js
const fetchFunction = GET('https://api.coinmarketcap.com/v:version/ticker/');
const resp = await fetchFunction({ version: 2 });
```

This also works for queryParams. More examples can be seen in [test file](https://github.com/Meemaw/react-typescript-boilerplate/blob/master/src/lib/urls/index.spec.tsx).

```js
const fetchFunction = GET('https://api.coinmarketcap.com/ticker/');
const resp = await fetchFunction({ version: 2 }); // Would fetch https://api.coinmarketcap.com/ticker/?version=2
```
