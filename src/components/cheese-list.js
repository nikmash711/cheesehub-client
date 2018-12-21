import React from 'react';
import {connect} from 'react-redux';

import {fetchCheeses} from '../actions/cheese'


export class CheeseList extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }

  render(){
    let cheeselist = this.props.cheeses.map(cheese=>(
      <li>{cheese}</li>
    ))

    return(
      <ul>
        {cheeselist}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);