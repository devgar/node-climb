# node-climb

**The JSON filter**

## What is climb?

__climb__ is a tool that makes it easier for developers to debug and analyze JSON files and
 http responses.

## Installation

```bash
npm install -g climb
```

## Samples

To get the 4th item of an array in `array.json` file use:
```bash
climb 3 array.json
```

To filter the 'BTC' attribute of a response passed by a `curl` request:
```bash
curl -sS https://api.coindesk.com/v1/bpi/currentprice.json | climb bpi
```

Piping two `climb` commands:
```bash
curl -sS https://api.coindesk.com/v1/bpi/currentprice.json | climb bpi | climb EUR
```

You can also do this
```bash
climb repository.type package.json

# or...

climb keywords.1 package.json

```

## Want to contribute?

[TODO]
