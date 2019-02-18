#!/bin/bash
docker run --rm -v $(pwd):/src trzeci/emscripten:sdk-tag-1.38.25-64bit bash build.sh
