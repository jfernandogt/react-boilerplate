import React, { Component } from 'react';
import {increment, decrement} from '../actions';
import { connect } from 'react-redux';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	increment() {
		let {dispatch} = this.props;
		dispatch(increment());
	}

	decrement() {
		let {dispatch} = this.props;
		dispatch(decrement());
	}

  render() {
  	let { counter } = this.props;
    return (
      <div>
        <div className="button-counter" onClick={this.decrement}>-</div>
        <div>{counter}</div>
        <div className="button-counter" onClick={this.increment}>+</div>
      </div>
    );
  }
}

export default connect()(Counter);