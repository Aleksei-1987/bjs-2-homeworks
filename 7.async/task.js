class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутсвуют обязательные аргументы");
		}

		if (this.alarmCollection.includes(time)) {
			console.warn("Уже присутствует звонок на это же время");
		}

		this.alarmCollection.push({
			time,
			callback,
			canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(
			(alarm) => alarm.time !== time
		);
	}

	getCurrentFormattedTime() {
		let hours = new Date().getHours().toString().padStart(2, "0");
		let minutes = new Date().getMinutes().toString().padStart(2, "0");
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((alarm) => {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
					alarm.callback();
					alarm.canCall = false;
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((alarm) => (alarm.canCall = true));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}