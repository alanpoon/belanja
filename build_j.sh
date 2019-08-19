#!/usr/bin/env bash
cp -r cennznet-ui/packages/test ../belanja_test/MyAwesomeProject/packages
cd ../belanja_test/MyAwesomeProject && yarn install
yarn add file:packages/test
yarn start