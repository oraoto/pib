#!/bin/bash

mkdir gh-pages
cp php.js php.wasm index.html gh-pages
cd gh-pages
git init
git add .
git commit -m "Update gh-pages"
git remote add origin https://github.com/oraoto/pib.git
git push origin master:gh-pages -f

