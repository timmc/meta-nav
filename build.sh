#!/bin/bash

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

mkdir -p build
rm -f build/*

zip build/meta-nav-latest.xpi manifest.json icons/*.png content-script.js
