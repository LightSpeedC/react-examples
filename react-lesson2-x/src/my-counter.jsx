'use strict';

import * as React from 'react';
import MyComponent from './my-component';

// カウンター
export default class MyCounter extends MyComponent {

	// コンストラクタ
	constructor(props, context) {
		super(props, context);
		this.state = {counter: 0};
	}

	// 増/プラス
	onIncr() {
		this.setState(s => ({counter: s.counter + 1}));
	}

	// 減/マイナス
	onDecr() {
		this.setState(s => ({counter: s.counter - 1}));
	}

	// レンダー
	render() {
		return <div>
			カウンター: {this.state.counter}
			<br/>
			<button children="増" onClick={this.onIncr}/>
			<button children="減" onClick={this.onDecr}/>
		</div>;
	}
}
