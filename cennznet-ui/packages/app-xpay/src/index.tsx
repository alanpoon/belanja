// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// some types, AppProps for the app and I18nProps to indicate
// translatable strings. Generally the latter is quite "light",
// `t` is inject into props (see the HOC export) and `t('any text')
// does the translation
import { AppProps, I18nProps } from '@polkadot/ui-app/types';
import Tabs, { TabItem } from '@polkadot/ui-app/Tabs';

import React from 'react';
import { Route, Switch } from 'react-router';

import AccountSelector from './AccountSelector';
import Shop from './Shop';
import Merchant from './Merchant';
import Lunch_Diner from './Lunch_Diner';
import Query_param from './Query_param';
var belanja = require('./static/belanja.png');
// define out internal types
type Props = AppProps & I18nProps;
type State = {
  accountId?: string,
  tabs: Array<TabItem>
};

class App extends React.PureComponent<Props, State> {
  state: State = {
    tabs: [
      {
        name: 'shop',
        text: 'Shop'
      },
      {
        name: 'merchant',
        text: 'Merchant'
      },
      {
        name: 'lunch_diner',
        text: 'lunch_diner'
      },
      {
        name: 'belanja',
        text: 'Belanja'
      }
    ]
  };

  render () {
    
    const { basePath } = this.props;
    const { accountId, tabs } = this.state;

    return (
      <main>
        <AccountSelector onChange={this.onAccountChange} />
        <header>
          <Tabs
            basePath={basePath}
            items={tabs}
          />
        </header>
        <img src={belanja}/>
        <div>Paying for treats for resturants App</div>
        <Switch>
          <Route path={`${basePath}/merchant`} render={() => <Merchant accountId={accountId} />} />
          <Route path={`${basePath}/lunch_diner`} render={() => <Lunch_Diner />} />
          <Route path={`${basePath}/belanja`} render={() => <Query_param accountId={accountId}/>} />
          <Route render={() => <Shop accountId={accountId} />} />
          
        </Switch>
      </main>
    );
  }

  private onAccountChange = (accountId?: string): void => {
    this.setState({ accountId });
  }
}

export default App;
