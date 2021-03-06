'use strict';

// 私のコンポーネント (onメソッドはthisをbind)
class MyComponent extends React.Component {

	// コンストラクタ
	constructor(props, context) {
		super(props, context);
		Object.getOwnPropertyNames(this.constructor.prototype)
			.forEach(x => x.substr(0, 2) === 'on' &&
				typeof this[x] === 'function' &&
				(this[x] = this[x].bind(this)));
	}
}

// カウンター
class MyCounter extends MyComponent {

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
		return React.createElement('div', null,
			'カウンター: ', this.state.counter,
			React.createElement('br'),
			React.createElement('button',
				{children: "増", onClick: this.onIncr}),
			React.createElement('button',
				{children: "減", onClick: this.onDecr}));
	}
}

ReactDOM.render(React.createElement(MyCounter), container);
