const
	blockTime = {
		get value() {
			return this._value;
		},
		set value(value) {
			value = parseFloat(value);

			switch (true) {
				case isNaN(value):
					value = this._value;
					break;

				case (value < 0):
					value = 0;
					break;
					
				case (value > 3600):
					value = 3600;
					break;
			}

			this._value = value;
			this.updateElement();

			localStorage.setItem('block-time', JSON.stringify(this._value));
		},

		updateElement() {
			$blockTime.value = this._value;
		}
	},
	count = {
		get value() {
			return this._value;
		},
		set value(value) {
			this._value = value;
			this.updateElement();

			localStorage.setItem('count', JSON.stringify(this._value));
		},

		updateElement() {
			$count.value = this._value;
		}
	},
	title = {
		get value() {
			return this._value;
		},
		set value(value) {
			this._value = value;
			this.updateElement();

			localStorage.setItem('title', JSON.stringify(this._value));
		},

		updateElement() {
			$title.value = this._value;
		}
	};

blockTime.value = JSON.parse(localStorage.getItem('block-time')) || 5;
count.value = JSON.parse(localStorage.getItem('count')) || 0;
title.value = JSON.parse(localStorage.getItem('title'));