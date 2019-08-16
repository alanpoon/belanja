#!/usr/bin/env bash
cp -r cennznet-ui/packages/app-xpay ../belanja_test/MyAwesomeProject/packages
cd ../belanja_test/MyAwesomeProject && yarn add file:packages/app-xpay
yarn install
yarn start