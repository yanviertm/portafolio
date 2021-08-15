#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to git@github.com:yanviertm/portafolio https://yanviertm.github.io/portafolio
git push -f https://yanviertm.github.io/portafolio main:gh-pages

cd -