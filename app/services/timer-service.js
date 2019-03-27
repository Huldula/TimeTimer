"use strict";

app.service("TimerService", function (Timer, $interval) {

    let timers = loadTimers();

    this.add = (timer) => {
        timers.push(timer);
        this.save();
    }

    this.getTimers = () => {
        return timers;
    }

    this.remove = (timer) => {
        timers = timers.filter(t => t !== timer);
        this.save();
    }

    this.save = () => {
        localStorage.setItem('TimeTimer', JSON.stringify(timers));
    }

    function loadTimers() {
        let items = localStorage.getItem('TimeTimer');
        if (!items) {
            return [];
        }
        items = JSON.parse(items);
        const timers = [];
        items.forEach(item => {
            const timer = new Timer(item.person, item.activity, item.isRunning, item.time, item.startTimeStamp);
            timers.push(timer);
        });
        return timers;
    }

    $interval(() => {
        timers.forEach(t => {
            t.outTime = t.getTime();
        });
    }, 1000);
});
