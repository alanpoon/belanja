import execute from './use';
require('./public/d3-floorplan/d3.floorplan.css');
var Floorplan =require('./static/Sample_Floorplan.jpg');

import React, { PureComponent } from 'react';

import Loading from '../../components/loading';

import {
  Container,
} from './style';

type Props = {
};

class Lunch_Diner extends PureComponent <Props> {

  componentDidMount() {
    execute(Floorplan,1,6);
  }

  render () {
    return (
      <Container>
        <div id="demo"></div>
          <div >
            <h3>Panel</h3>
            Table id: <span id="diner_panel"></span>       
            <button id="pay_but">Belanja Pay</button>
            <button id="invoice_but">Invoice</button>
          </div>
      </Container>
    );
  }
}  
import { connect } from 'react-redux';

import { NavigationActions } from 'react-navigation';

const mapDispatchToState = dispatch => ({
  onPageDismiss: () => dispatch(NavigationActions.back())
});

export default connect(null, mapDispatchToState)(Lunch_Diner);