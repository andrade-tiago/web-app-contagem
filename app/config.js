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
		_value: new Date(),

		startUpdateDatetimeInterval() {
			if (!this._updateDatetimeIntervalID) {
				this._updateDatetimeIntervalID = setInterval(() => this.updateDatetime(), 1000);
			}
		},
		stopUpdateDatetimeInterval() {
			clearInterval(this._updateDatetimeIntervalID);
			this._updateDatetimeIntervalID = null;
		},

		get isDisplay() {
			return this._isDislpay;
		},
		set isDisplay(value) {
			this._isDislpay = !!value;
			this.updateDisplayElement();
			this.display();

			localStorage.setItem('display-datetime', JSON.stringify(this._isDislpay));
		},

		getHours() {
			return this._value.getHours().toString().padStart(2, '0');
		},
		getMinutes() {
			return this._value.getMinutes().toString().padStart(2, '0');
		},
		getDay() {
			return this._value.getDate().toString().padStart(2, '0');
		},
		getMonth() {
			return (this._value.getMonth() + 1).toString().padStart(2, '0');
		},

		getDate() {
			return `${this.getDay()}/${this.getMonth()}/${this._value.getFullYear()}`;
		},
		getTime() {
			return `${this.getHours()}:${this.getMinutes()}`;
		},

		updateDisplayElement() {
			$displayDatetime.checked = this._isDislpay;
		},

		showDatetime() {
			$date.value = this.getDate();
			$time.value = this._value.getSeconds() % 2 ? this.getTime() : this.getTime().replace(':', ' ');
		},

		updateDatetime() {
			this._value = new Date();
		},

		display() {
			if (this._isDislpay) {
				if (!this._updateElementIntervalID) {
					this.showDatetime();
					this._updateElementIntervalID = setInterval(() => this.showDatetime(), 1000); 
				}
			} else {
				this._updateElementIntervalID = null;
			}

			$datetime.classList.toggle('visible', this._isDislpay);
		}
	},
	logs = {
		get text() {
			return this._value;
		},
		set text(value) {
			this._text = value;
			this.updateElement();

			localStorage.setItem('logs', JSON.stringify(this._text));
		},

		updateElement() {
			$logs.value = this._text;
		},

		log(msg) {
			this.text = this._text + `${datetime.getDate()} ${datetime.getTime()} -> ${msg}.\r\n`;
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

datetime.startUpdateDatetimeInterval();

blockTime.value = JSON.parse(localStorage.getItem('block-time')) || 3;
count.value = JSON.parse(localStorage.getItem('count')) || 0;
datetime.isDisplay = JSON.parse(localStorage.getItem('display-datetime')) || false;
logs.text = JSON.parse(localStorage.getItem('logs')) || '';
title.value = JSON.parse(localStorage.getItem('title')) || '';