"use strict";

app.component("timer", {
    templateUrl: "components/timer/timer.html",
    controller: "TimerController",
    bindings: {
        timer: '<'
    }
});


class Timer {
    constructor() {

    }
}

app.controller("TimerController", Timer);
