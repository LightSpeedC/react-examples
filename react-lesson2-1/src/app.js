console.log('動いた! console.log');

if (typeof container === 'object')
	container.innerHTML = '動いた! container.innerHTML';

if (typeof window === 'object')
	setTimeout(function () {
			if (typeof alert === 'function')
				alert('動いた! alert');
		}, 1000);
