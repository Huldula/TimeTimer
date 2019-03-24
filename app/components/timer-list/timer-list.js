"use strict";

app.component("timerList", {
    templateUrl: "components/timer-list/timer-list.html",
    controller: "TimerListController",
    bindings: {}
});

class TimerList {

    timers = [];

    constructor() {
    }

    addTimer() {
        this.timers.push();
    }
}

app.controller("TimerListController", TimerList);
