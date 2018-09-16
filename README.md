# React Redux Typescript Boilerplate

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

- CI integration with [Travis](https://travis-ci.org/)
- Linting with [prettier](https://github.com/prettier/prettier)
- Static type-checking with [Typescript](https://www.typescriptlang.org/)
- Opinionatedly scalable folder structure
- State Management with [Redux](https://redux.js.org/)
- Code splitting with [React Loadable](https://github.com/jamiebuilds/react-loadable)
- Testing with [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme)
- [Google Analyics](https://analytics.google.com/analytics/web/) HOC for page tracking
- Highly intuitive and typed approach to resource fetching

###### Fetch API Usage

Fetching in javascript is a pain point especially when switching between projects. It is overwhelming to remember all endpoints and their response structures. Approach implemented in [lib/api](https://github.com/Meemaw/react-typescript-boilerplate/blob/master/src/lib/api/index.tsx) tries to solve that in typed and generic way.
Using that we can create seperate files for different resources and use them as "simple documentation". We can also leverage power of Typescript to statically type those resources and never worry about the types again.

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
}

const CoinmarketCapResource: CoinmarketCapResource = {
  getTicker: GET('https://api.coinmarketcap.com/v2/ticker/', false),
};


/* pages/Ticker */

async componentDidMount() {
  const resp = await CoinmarketCapResource.getTicker();
  this.setState({ data: resp.data });
}
```

###### Looks great. How to use this with dynamic urls?

No worries. Url passed to exported GET/... function is actually an urlTemplate. Dynamic path sections can be annotated with `:`. Those will get replaced at invocation if `data` object passed contains template key. Following code would create url equivalent to the one in example above.

```js
const fetchFunction = GET('https://api.coinmarketcap.com/v:version/ticker/');
const resp = await fetchFunction({ version: 2 });
```

This also works for queryParams. More examples can be seen in [test file](https://github.com/Meemaw/react-typescript-boilerplate/blob/master/src/lib/urls/index.spec.tsx).
