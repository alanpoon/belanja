#!/usr/bin/env bash
cp -r cennznet-ui/packages/app-xpay eighteenPlusApp/packages
cd eighteenPlusApp && yarn add file:packages/app-xpay
yarn start