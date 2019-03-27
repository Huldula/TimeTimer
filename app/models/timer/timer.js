"use strict";

app.factory("Timer", function () {

    function Timer(person, activity, isRunning, inTime, timeStamp) {
        this.person = person;
        this.activity = activity;
        this.isRunning = isRunning;

        this.startTimeStamp = timeStamp;
        this.time = inTime;
        this.outTime = 0;

        this.start = () => {
            this.isRunning = true;
            this.startTimeStamp = Date.now();
        }

        this.stop = () => {
            this.time = this.getTime();
            this.outTime = this.time;
            this.isRunning = false;
        }

        this.getTime = () => {
            return this.isRunning ? this.time + Date.now() - this.startTimeStamp : this.time;
        }
    }

    return Timer;
});
