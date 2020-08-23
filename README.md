# PIB: PHP in Browser (and Node.js) aka php-wasm

[![Build Status](https://travis-ci.org/oraoto/pib.svg?branch=master)](https://travis-ci.org/oraoto/pib) ![PHP](https://img.shields.io/badge/PHP-7.4-green.svg)

### v0.0.2 - Gaining Momentum

## Examples

+ [Hello, World](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250Aecho%2520%2522Hello%252C%2520World%21%2522%253B)
+ [Persistent Memory](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%252F%252F%2520Run%2520this%2520over%2520and%2520over%2520again...%250Aprint%2520%252B%252B%2524x%253B&persist=1)
+ [Access The DOM](https://seanmorris.github.io/php-wasm/?code=%253C%253Fphp%250A%250A%2524oldTitle%2520%253D%2520NULL%253B%250A%2524newTitle%2520%253D%2520%27Changed%2540%27%2520.%2520date%28%27h%253Ai%253As%27%29%253B%250A%250A%252F%252F%2520Grab%2520the%2520current%2520title%250A%2524oldTitle%2520%253D%2520vrzno_eval%28%27document.title%27%29%253B%250A%250A%252F%252F%2520Change%2520the%2520document%2520title%250A%2524newTitle%2520%253D%2520vrzno_eval%28%27document.title%2520%253D%2520%2522%27%2520.%2520%2524newTitle%2520.%2520%27%2522%27%2520%29%253B%250A%250Aprintf%28%250A%2520%2520%2520%2520%27Title%2520changed%2520from%2520%2522%2525s%2522%2520to%2520%2522%2525s%2522.%27%250A%2520%2520%2520%2520%252C%2520%2524oldTitle%250A%2520%2520%2520%2520%252C%2520%2524newTitle%250A%29%253B%250A%250A%250A%252F%252F%2520Show%2520an%2520alert%250Avrzno_run%28%27alert%27%252C%2520%255B%27Hello%252C%2520World%21%27%255D%29%253B)
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
