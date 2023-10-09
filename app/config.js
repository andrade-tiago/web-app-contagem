const
	blockTime = {
		get value() {
			return this._value;
		},
		set value(value) {
			value = Number.parseFloat(value);

			switch (true) {
				case Number.isNaN(value):
					value = this._value; // Manter valor atual
					break;

				case (value < 0):
					value = 0;
					break;
					
				case (value > 3600):
					value = 3600;
					break;
				
				default:
					let numDecimals = countDecimals(value);

					value = value.toFixed(numDecimals > 3 ? 3 : numDecimals);
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
	datetime = {
		get isDisplay() {
			return this._isDislpay;
		},
		set isDisplay(value) {
			this._isDislpay = !!value;
			this.updateElement();
			this.display();

			localStorage.setItem('display-datetime', JSON.stringify(this._isDislpay));
		},

		getHours() {
			return this._time.getHours().toString().padStart(2, '0');
		},
		getMinutes() {
			return this._time.getMinutes().toString().padStart(2, '0');
		},
		getDay() {
			return this._time.getDate().toString().padStart(2, '0');
		},
		getMonth() {
			return (this._time.getMonth() + 1).toString().padStart(2, '0');
		},

		updateElement() {
			$displayDatetime.checked = this._isDislpay;
		},

		showTime() {
			$date.value = `${this.getDay()}/${this.getMonth()}/${this._time.getFullYear()}`;
			$time.value = `${this.getHours()}${this._time.getSeconds()% 2 ? ':' : ' '}${this.getMinutes()}`;
		},

		updateTime() {
			this._time = new Date();
		},

		display() {
			if (this._isDislpay) {
				this.updateTime();
				this.showTime();

				this._timer = setInterval(() => {
					this.updateTime();
					this.showTime();
				}, 1000);
			} else {
				clearInterval(this._timer);
				
				this._timer = null;
			}

			$datetime.classList.toggle('visible', this._isDislpay);
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

blockTime.value = JSON.parse(localStorage.getItem('block-time')) || 3;
count.value = JSON.parse(localStorage.getItem('count')) || 0;
datetime.isDisplay = JSON.parse(localStorage.getItem('display-datetime')) || false;
title.value = JSON.parse(localStorage.getItem('title'));