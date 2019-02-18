# WIB

[![Build Status](https://travis-ci.org/oraoto/pib.svg?branch=master)](https://travis-ci.org/oraoto/pib) ![PHP](https://img.shields.io/badge/PHP-7.3.0-green.svg)

**[Run PIB](https://oraoto.github.io/pib/)**

Firefox is recommended for better user experience.

## Examples

+ [Hello, World](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250Aecho%2520%2522Hello%252C%2520World%21%2522%253B)
+ [JSON](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250A%2524x%2520%253D%2520%255B%250A%2520%2520%2520%2522id%2522%2520%253D%253E%25201%2520%2520%250A%255D%253B%250A%250Avar_dump%28json_decode%28json_encode%28%2524x%29%29%29%253B%250A)
+ [Closures](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250A%2524x%2520%253D%252010%253B%250A%250Afunction%2520run%28callable%2520%2524f%29%2520%257B%250A%2520%2520%2520%2520%2524f%28%29%253B%250A%257D%250A%250Arun%28function%2520%28%29%2520use%2520%28%2526%2524x%29%2520%257B%250A%2520%2520%2520%2520%2524x%2520%253D%25209%253B%250A%257D%29%253B%250A%250Avar_dump%28%2524x%29%253B%250A)
+ [PCRE](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250Apreg_match%28%27%252F%28foo%29%28bar%29%28baz%29%252F%27%252C%2520%27foobarbaz%27%252C%2520%2524matches%252C%2520PREG_OFFSET_CAPTURE%29%253B%250Aprint_r%28%2524matches%29%253B%250A)
+ [Multi catch exception handling](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250Atry%2520%257B%250A%2520%2520%2520%2520if%2520%28random_int%280%252C%252010%29%2520%253E%25205%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520throw%2520new%2520BadFunctionCallException%28%29%253B%250A%2520%2520%2520%2520%257D%2520else%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520throw%2520new%2520LengthException%28%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%2520catch%2520%28BadFunctionCallException%2520%257C%2520LengthException%2520%2524ex%29%2520%257B%250A%2520%2520%2520%2520var_dump%28%2524ex%29%253B%250A%257D%250A)
+ [Scalar type declarations](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%252F%252Fdeclare%28strict_types%253D1%29%253B%250A%250Afunction%2520sumOfInts%28int%2520...%2524ints%29%250A%257B%250A%2520%2520%2520%2520return%2520array_sum%28%2524ints%29%253B%250A%257D%250A%250Avar_dump%28sumOfInts%282%252C%2520%273%27%252C%25204.1%29%29%253B%250A)
+ [File access](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250A%2524it%2520%253D%2520new%2520RecursiveIteratorIterator%28new%2520RecursiveDirectoryIterator%28%2522.%2522%29%29%253B%250A%250Aforeach%2520%28%2524it%2520as%2520%2524name%2520%253D%253E%2520%2524entry%29%2520%257B%250A%2520%2520%2520%2520echo%2520%2524name%2520.%2520%2522%253Cbr%252F%253E%2522%253B%250A%257D%250A)
+ [Zend/bench.php](https://oraoto.github.io/pib/?code=%253C%253Fphp%250A%250Ainclude%28%2522Zend%252Fbench.php%2522%29%253B%250A) (**Benchmark, about 5x slower in Firefox than native PHP**)

## Building From Source

### Using Docker

The quickest way to build PIB is by using Docker:

```
docker-compose up -d
```

### Setup Emscripten SDK (emsdk) manually

Steps:

1. Setup emsdk (>= 1.38.11), see [Installation Instructions](https://github.com/juj/emsdk#installation-instructions)
2. Run `bash build.sh`
3. npm install http-server -g
4. http-server .
5. open http://localhost:8081

## Known issues

+ Memory leak

## Acknowledgements

The Web UI is based on [Rust Playground](https://play.rust-lang.org/).

## Notes

**Loading Files** https://emscripten.org/docs/porting/files/packaging_files.html
