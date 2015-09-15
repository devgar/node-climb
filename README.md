# node-sink

**The JSON filter**

## What is sink?

__sink__ is a tool that makes it easier for developers to debug and analyze JSON files and
 http responses.

## Documentation

[TODO]

## Samples

To get the 4th item of an array in `array.json` file use:
```
sink 3 array.json
```

To filter the 'BTC' attribute of a response passed by a `curl` request:
```
curl -sS http://coinabul.com/api.php | sink BTC
```

Piping two `sink` commands:
```
curl -sS http://coinabul.com/api.php | sink BTC | sink Ounces
```

## Want to contribute?

[TODO]
