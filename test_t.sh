#!/usr/bin/env bash
cp -r cennznet-ui/packages/app-xpay ../belanja_test/MyAwesomeProject/packages
cd ../belanja_test/MyAwesomeProject && yarn install
yarn add file:packages/app-xpay
yarn start