# node-sink

**The JSON filter**

## What is sink?

__sink__ is a tool that makes it easier for developers to debug and analyze JSON files and
 http responses.

## Installation

```bash
npm install -g sink
```

## Samples

To get the 4th item of an array in `array.json` file use:
```bash
sink 3 array.json
```

To filter the 'BTC' attribute of a response passed by a `curl` request:
```bash
curl -sS http://coinabul.com/api.php | sink BTC
```

Piping two `sink` commands:
```bash
curl -sS http://coinabul.com/api.php | sink BTC | sink Ounces
```

You can also do this
```bash
sink repository.type package.json

# or...

sink keywords.1 package.json

```

## Want to contribute?

[TODO]
