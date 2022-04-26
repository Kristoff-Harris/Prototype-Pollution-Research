// https://huntr.dev/bounties/9076ebc6-20f8-4d04-96d3-5e1e4b0c8150/
export class JsonUnFlat {
	static unflat(json: Object) {
		let unflatten: Object = {};

		for (let item in json) {
			let _this;
			let splittedKey = item.split('.');

			splittedKey.map(function (keysPart, i) {

				if (i == 0) {
					_this = unflatten;
				}

				if (!_this[keysPart]) {
					if (splittedKey.length === i + 1) {
						_this[keysPart] = json[item];
					} else {


						_this[keysPart] = {};
						_this = _this[keysPart];
					}

				} else {
					_this = _this[keysPart];
				}
			})
		}

		return unflatten;
	}
}
