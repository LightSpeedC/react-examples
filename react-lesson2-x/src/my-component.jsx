'use strict';

import * as React from 'react';

// 私のコンポーネント (onメソッドはthisをbind)
export default class MyComponent extends React.Component {

	// コンストラクタ
	constructor(props, context) {
		super(props, context);
		Object.getOwnPropertyNames(this.constructor.prototype)
			.forEach(x => x.substr(0, 2) === 'on' &&
				typeof this[x] === 'function' &&
				(this[x] = this[x].bind(this)));
	}
}
