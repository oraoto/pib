# php-wasm aka PIB

Changes

## 0.0.2 - Gaining Momentum

* php objects now have persistent memory, may be cleared with `php.refresh();`.
* php code may now access Javascript (and thus, the DOM) via the [VRZNO](https://github.com/seanmorris/vrzno) project. The extension is preinstalled with php-wasm.
* Building objects is now separated so multiple binaries may be built from the same set of objects.
* License changed from MIT to Apache-2.0, which has similar terms, but USERS must hav visibility of the attribution, rather that just DEVELOPERS.
* Build dependencies are now expressed in the makefile
* Project can be built in its entirety by running `make`.
* Ensuring newlines in PHP output are respected.


## 0.0.1 - Humble Beginnings

* Event-oriented interface added to php object.
* Buildscript was slightly improved with a makefile
