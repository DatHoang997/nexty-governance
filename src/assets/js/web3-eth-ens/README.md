# web3-eth-ens

This is a sub package of [web3.js][repo]

This is the Ens package and it will be used in the `web3-eth` package.
Please read the [documentation][docs] for more.

## Installation

```bash
npm install web3-eth-ens
```

## Usage

```js
import {Ens} from 'web3-eth-ens';

new Ens(
    'ws://localhost:8546',
    accounts,
    {}
);
```

## Types 

All the typescript typings are placed in the types folder. 

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/web3.js
