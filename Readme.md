# PIB: PHP in Browser

[Try it](https://oraoto.github.io/pib/)

## Examples

+ [Hello, World](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250Aecho%2520%2522Hello%252C%2520World%21%2522%253B)
+ [JSON](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250A%2524x%2520%253D%2520%255B%250A%2520%2520%2520%2522id%2522%2520%253D%253E%25201%2520%2520%250A%255D%253B%250A%250Avar_dump%28json_decode%28json_encode%28%2524x%29%29%29%253B%250A)
+ [Closures](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250A%2524x%2520%253D%252010%253B%250A%250Afunction%2520run%28callable%2520%2524f%29%2520%257B%250A%2520%2520%2520%2520%2524f%28%29%253B%250A%257D%250A%250Arun%28function%2520%28%29%2520use%2520%28%2526%2524x%29%2520%257B%250A%2520%2520%2520%2520%2524x%2520%253D%25209%253B%250A%257D%29%253B%250A%250Avar_dump%28%2524x%29%253B%250A)

## Build

Requirement:

+ emsdk: [Installation Instructions](https://github.com/juj/emsdk#installation-instructions)

Build:

```
bash build.sh
```

## Known issues

+ Generator doesn't work
