"use strict";

app.factory("Timer", function () {

    function Timer(person, activity, timestamp) {
        this.person = person;
        this.activity = activity;
        this.timestamp = timestamp;
    }

    return Timer;
});
