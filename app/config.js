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
	displayHours = {
		get isDisplay() {
			return this._isDislpay;
		},
		set isDisplay(value) {
			this._isDislpay = !!value;
			this.updateElement();
			this.display();

			localStorage.setItem('display-hours', JSON.stringify(this._isDislpay));
		},

		getHours() {
			return this._time.getHours().toString().padStart(2, '0');
		},
		getMinutes() {
			return this._time.getMinutes().toString().padStart(2, '0');
		},

		updateElement() {
			$displayHours.checked = this._isDislpay;
		},

		showTime() {
			$hours.innerHTML = this.getHours();
			$minutes.innerHTML = this.getMinutes();
		},

		updateTime() {
			this._time = new Date();
			this.showTime();
		},

		// display() {
		// 	if (this._isDislpay) {
		// 		this.updateTime();
		
		// 		this._clearTimerFunction = clearTimeout.bind(window);
		// 		this._timer = setTimeout(() => {
		// 			this.updateTime();
				
		// 			this._clearTimerFunction = clearInterval.bind(window);
		// 			this._timer = setInterval(() => this.updateTime(), 1000*60);
		// 		}, 1000*(60 - this._time.getSeconds()));
		// 	} else {
		// 		this._clearTimerFunction(this._timer);
		// 		this._timer = null;
		// 	}
		
		// 	$time.classList.toggle('visible', this._isDislpay);
		// }

		display() {
			if (this._isDislpay) {
				this.updateTime();

				this._timer = setInterval(() => this.updateTime(), 1000);
			} else {
				clearInterval(this._timer);
				
				this._timer = null;
			}

			$time.classList.toggle('visible', this._isDislpay);
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
displayHours.isDisplay = JSON.parse(localStorage.getItem('display-hours')) || false;
title.value = JSON.parse(localStorage.getItem('title'));