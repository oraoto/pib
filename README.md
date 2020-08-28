# PIB: PHP in Browser (and Node.js) aka php-wasm

[![Build Status](https://travis-ci.org/oraoto/pib.svg?branch=master)](https://travis-ci.org/oraoto/pib) ![PHP](https://img.shields.io/badge/PHP-7.4-green.svg)

### v0.0.3 - New Horizons


[changelog](https://raw.githubusercontent.com/seanmorris/php-wasm/master/CHANGELOG.md)

## Examples

+ [Hello, World](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250Aecho%2520%2522Hello%252C%2520World%21%2522%253B)
+ [phpinfo()](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%2520phpinfo%28%29%253B&persist=0&render-as=html&single-expression=0)
+ [Persistent Memory](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%2520%2524c%252B%252B%253B%2520%252F%252F%2520run%2520this%2520over%2520and%2520over%2520again&persist=1&single-expression=1)
+ [Access The DOM](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250A%2524oldTitle%2520%253D%2520NULL%253B%250A%2524newTitle%2520%253D%2520%27Changed%2540%27%2520.%2520date%28%27h%253Ai%253As%27%29%253B%250A%250A%252F%252F%2520Grab%2520the%2520current%2520title%250A%2524oldTitle%2520%253D%2520vrzno_eval%28%27document.title%27%29%253B%250A%250A%252F%252F%2520Change%2520the%2520document%2520title%250A%2524newTitle%2520%253D%2520vrzno_eval%28%27document.title%2520%253D%2520%2522%27%2520.%2520%2524newTitle%2520.%2520%27%2522%27%2520%29%253B%250A%250Aprintf%28%250A%2520%2520%2520%2520%27Title%2520changed%2520from%2520%2522%2525s%2522%2520to%2520%2522%2525s%2522.%27%250A%2520%2520%2520%2520%252C%2520%2524oldTitle%250A%2520%2520%2520%2520%252C%2520%2524newTitle%250A%29%253B%250A%250A%250A%252F%252F%2520Show%2520an%2520alert%250Avrzno_run%28%27alert%27%252C%2520%255B%27Hello%252C%2520World%21%27%255D%29%253B)
+ [Standard Output, Standard Error, & Return](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250A%252F%252F%2520Only%2520%2522single%2522%2520expressions%2520can%2520return%2520strings%2520directly%250A%252F%252F%2520So%2520wrap%2520the%2520commands%2520in%2520an%2520IFFE.%250A%250A%28function%28%29%2520%257B%250A%2520%2520%2520%2520global%2520%2524persist%253B%250A%250A%2520%2520%2520%2520fwrite%28fopen%28%27php%253A%252F%252Fstdout%27%252C%2520%27w%27%29%252C%2520%2522output%255Cn%2522%29%253B%250A%2520%2520%2520%2520fwrite%28fopen%28%27php%253A%252F%252Fstdout%27%252C%2520%27w%27%29%252C%2520sprintf%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Ran%2520%2525d%2520times%21%255Cn%2522%252C%2520%2524persist%252B%252B%250A%2520%2520%2520%2520%29%29%253B%250A%2520%2520%2520%2520fwrite%28fopen%28%27php%253A%252F%252Fstderr%27%252C%2520%27w%27%29%252C%2520%27error%27%29%253B%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520return%2520%27return%2520value%27%253B%250A%257D%29%28%29%253B&persist=1&single-expression=1)
+ [Sqlite](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250A%2524db%2520%253D%2520new%2520SQLite3%28%27people.db%27%29%253B%250A%2524db-%253Equery%28%27CREATE%2520TABLE%2520IF%2520NOT%2520EXISTS%2520people%2520%28%250A%2509id%2520INTEGER%2520PRIMARY%2520KEY%252C%250A%2520%2520%2520%2509name%2520TEXT%2520NOT%2520NULL%250A%29%253B%27%29%253B%250A%250Afor%28%2524i%2520%253D%25200%253B%2520%2524i%2520%253C%2520100%253B%2520%2524i%252B%252B%29%2520%257B%250A%2509%2524insert%2520%253D%2520%2524db-%253Eprepare%28%27INSERT%2520INTO%2520people%2520%28name%29%2520VALUES%28%253Aname%29%27%29%253B%250A%2509%2524insert-%253EbindValue%28%27%253Aname%27%252C%2520str_repeat%28chr%28%2524i%252B64%29%252C%252010%29%252C%2520SQLITE3_TEXT%29%253B%250A%250A%2509%2524insert-%253Eexecute%28%29%253B%250A%257D%250A%250A%2524results%2520%253D%2520%2524db-%253Equery%28%27SELECT%2520*%2520FROM%2520people%27%29%253B%250A%250A%2524rows%2520%253D%2520%255B%255D%253B%250A%250Awhile%2520%28%2524row%2520%253D%2520%2524results-%253EfetchArray%28%29%29%2520%257B%250A%2520%2520%2520%2520var_dump%28%2524row%29%253B%250A%257D%250A&persist=1)
+ [Sqlite w/PDO](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250A%2524db%2520%253D%2520new%2520PDO%28%27sqlite%253Apeople.db%27%29%253B%250A%250A%2524db-%253Equery%28%27CREATE%2520TABLE%2520IF%2520NOT%2520EXISTS%2520people%2520%28%250A%2509id%2520INTEGER%2520PRIMARY%2520KEY%252C%250A%2520%2520%2520%2509name%2520TEXT%2520NOT%2520NULL%250A%29%253B%27%29%253B%250A%250Afor%28%2524i%2520%253D%25200%253B%2520%2524i%2520%253C%252010%253B%2520%2524i%252B%252B%29%2520%257B%250A%2509%2524insert%2520%253D%2520%2524db-%253Eprepare%28%27INSERT%2520INTO%2520people%2520%28name%29%2520VALUES%28%253Aname%29%27%29%253B%250A%2509%2524insert-%253EbindParam%28%27%253Aname%27%252C%2520str_repeat%28chr%28%2524i%252B64%29%252C%252010%29%252C%2520SQLITE3_TEXT%29%253B%250A%250A%2509%2524insert-%253Eexecute%28%29%253B%250A%257D%250A%250A%2524results%2520%253D%2520%2524db-%253Equery%28%27SELECT%2520*%2520FROM%2520people%27%29%253B%250A%250A%2524rows%2520%253D%2520%255B%255D%253B%250A%250Awhile%2520%28%2524row%2520%253D%2520%2524results-%253EfetchObject%28%29%29%2520%257B%250A%2520%2520%2520%2520print_r%28%2524row%29%253B%250A%257D%250A&persist=0&single-expression=0)
+ [JSON](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250A%2524x%2520%253D%2520%255B%250A%2520%2520%2520%2522id%2522%2520%253D%253E%25201%2520%2520%250A%255D%253B%250A%250Avar_dump%28json_decode%28json_encode%28%2524x%29%29%29%253B%250A)
+ [Closures](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250A%2524x%2520%253D%252010%253B%250A%250Afunction%2520run%28callable%2520%2524f%29%2520%257B%250A%2520%2520%2520%2520%2524f%28%29%253B%250A%257D%250A%250Arun%28function%2520%28%29%2520use%2520%28%2526%2524x%29%2520%257B%250A%2520%2520%2520%2520%2524x%2520%253D%25209%253B%250A%257D%29%253B%250A%250Avar_dump%28%2524x%29%253B%250A)
+ [File access](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250A%2524it%2520%253D%2520new%2520RecursiveIteratorIterator%28new%2520RecursiveDirectoryIterator%28%2522.%2522%29%29%253B%250A%250Aforeach%2520%28%2524it%2520as%2520%2524name%2520%253D%253E%2520%2524entry%29%2520%257B%250A%2520%2520%2520%2520echo%2520%2524name%2520.%2520%2522%253Cbr%252F%253E%2522%253B%250A%257D%250A)
+ [Zend/bench.php](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250Ainclude%28%2522Zend%252Fbench.php%2522%29%253B%250A)


## Getting started

Install with npm:

```sh
$ npm install php-wasm
```

## Static assets:

You'll need to add the following `postinstall` script entry to your package.json to ensure the static assets are available to your web application. Make sure to replace `public/` with the path to your public document root if necessary.

```json
{
  "scripts": {
    "postinstall": [
      "cp node_modules/php-wasm/php-web.* public/"
    ]
  },
}
```

If you're using a more advanced bundler, use the vendor's documentation to learn how to move the files matching the following pattern to your public directory:

```
./node_modules/php-wasm/php-web.*
```

## Usage

Using php-wasm is easy.

### Automatic

Once the library is included in the page, you can run PHP right from a script tag! The src attribute is also supported for non-inline scripts.

```html
<script type = "text/php">
	<?php vrzno_run('alert', ['Hello, world!']);
</script>
```

### Manual

First, grab an instance of the object:

```javascript
const php = new ( require('php-wasm/Php').Php );
```

Then, add an output listener:

```javascript
php.addEventListener('output', (event) => {
	console.log(event.detail);
});
```

Be sure to wait until your WASM is fully loaded, then run some PHP:

```javascript
php.addEventListener('ready', () => {
	php.run('<?php echo "Hello, world!";');
});
```
Get the result code of your script with `then()`:

```javascript
php.addEventListener('ready', () => {
	php.run('<?php echo "Hello, world!";').then(retVal => {
		// retVal contains the return code.
	});
});

```
### Persistent Memory

So long as `php.refresh()` is not called from Javascript, the instance will maintain its own persistent memory.

```php
<?php
// Run this over and over again...
print ++$x;

```

See the example in action [here](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%252F%252F%2520Run%2520this%2520over%2520and%2520over%2520again...%250Aprint%2520%252B%252B%2524x%253B&persist=1)

### Accessing the DOM

The DOM may be accessed via the [VRZNO](https://github.com/seanmorris/vrzno) php extension. This is specially  for the browser allowing PHP to access Javascript via a C api. It comes preinstalled with php-wasm.

See the example in action [here](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250A%2524oldTitle%2520%253D%2520NULL%253B%250A%2524newTitle%2520%253D%2520%27Changed%2540%27%2520.%2520date%28%27h%253Ai%253As%27%29%253B%250A%250A%252F%252F%2520Grab%2520the%2520current%2520title%250A%2524oldTitle%2520%253D%2520vrzno_eval%28%27document.title%27%29%253B%250A%250A%252F%252F%2520Change%2520the%2520document%2520title%250A%2524newTitle%2520%253D%2520vrzno_eval%28%27document.title%2520%253D%2520%2522%27%2520.%2520%2524newTitle%2520.%2520%27%2522%27%2520%29%253B%250A%250Aprintf%28%250A%2520%2520%2520%2520%27Title%2520changed%2520from%2520%2522%2525s%2522%2520to%2520%2522%2525s%2522.%27%250A%2520%2520%2520%2520%252C%2520%2524oldTitle%250A%2520%2520%2520%2520%252C%2520%2524newTitle%250A%29%253B%250A%250A%250A%252F%252F%2520Show%2520an%2520alert%250Avrzno_run%28%27alert%27%252C%2520%255B%27Hello%252C%2520World%21%27%255D%29%253B)

```php

// Show an alert with vrzno_run. Note the second param is an array of args.
vrzno_run('alert', ['Hello, World!']);

$oldTitle = NULL;
$newTitle = 'Changed@' . date('h:i:s');

// Grab the current title.
$oldTitle = vrzno_eval('document.title');

// Change the document title.
vrzno_eval('document.title = "' . $newTitle . '"' );

```

# php-wasm is a fork of oraoto/PIB...

**[Run PIB](https://seanmorris.github.io/php-wasm/)**

Firefox is recommended for better user experience.

## Building From Source

### Using Docker

The quickest way to build PIB is by using Make & Docker. Simply issue the `make` command after checking out the repo, and it will build.

```
make
```

### Using Emscripten SDK (emsdk) manually

Steps:

+ Setup emsdk (>= 1.38.11), see [Installation Instructions](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions)
+ Run `bash configure.sh`
+ Run `bash build-objects.sh`
+ Run `bash build.sh` to build the web binary

# Acknowledgements

- php-wasm and makefile contributed by @seanmorris
- The Web UI is based on [Rust Playground](https://play.rust-lang.org/).
