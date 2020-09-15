class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null; //хранение id таймена
  }
  addClock(timeStart, callback, id) {
    if (!id) {
      throw new Error("id не передан");
    }
    if (this.alarmCollection.find((item) => item.id === id)) {
      console.error("Будильник с таким id уже существует");
      return;
    }
    this.alarmCollection.push({ time: timeStart, callback: callback, id: id });
    return this.alarmCollection;
  }
  removeClock(id) {
    //удаляет определённый звонок
    let remClAlarmCollection = this.alarmCollection.filter(
      (item) => item.id != id
    );
    console.log(remClAlarmCollection);
    if (remClAlarmCollection.length === this.alarmCollection.length) {
      return false;
    } else {
      this.alarmCollection = remClAlarmCollection;
      return true;
    }
  }
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }
  start() {
    const checkClock = (alarm) => {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback();
        this.removeClock(alarm.id);
      }
    };

    if (!this.timerId) {
      this.timerId = setInterval(
        () => this.alarmCollection.forEach(checkClock),
        1000
      );
    }
  }
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms() {
    console.log(
      `печать всех будильников в количестве ${this.alarmCollection.length}`
    );
    this.alarmCollection.forEach((item) =>
      console.log(`Будильник № ${item.id} заведен на ${item.time}`)
    );
  }
  clearAlarms() {
    this.stop();
    return (this.alarmCollection = []);
  }
}
function testCase(nameAlarm) {
  nameAlarm = new AlarmClock();
  nameAlarm.addClock(
    "22:18",
    () => console.log("Я будильниек 1 вали на работу"),
    1
  );
  nameAlarm.addClock(
    "22:19",
    () => {
      console.log("Я будильниек 2 вали на работу");
      nameAlarm.removeClock(2);
    },
    2
  );
  nameAlarm.addClock(
    "22:22",
    () => {
      console.log("Я будильниек 2 вали на работу");
      nameAlarm.stop();
      nameAlarm.printAlarms();
      nameAlarm.clearAlarms();
    },
    3
  );
  nameAlarm.start();
}
testCase("alarm01");
