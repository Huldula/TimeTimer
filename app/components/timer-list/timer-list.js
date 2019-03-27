"use strict";

app.component("timerList", {
    templateUrl: "components/timer-list/timer-list.html",
    controller: "TimerListController",
    bindings: {}
});


app.controller("TimerListController", function(TimerService) {

    this.isAdding = false;

    this.getTimers = ()  => {
        return TimerService.getTimers();
    };
});
