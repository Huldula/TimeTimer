"use strict";

app.component("timer", {
    templateUrl: "components/timer/timer.html",
    controller: "TimerController",
    bindings: {
        timer: '='
    }
});


app.controller("TimerController", function(TimerService, $interval) {

    this.delete = () => {
        TimerService.remove(this.timer);
    };

    this.start = () => {
        this.timer.start();
        TimerService.save();
    }

    this.stop = () => {
        this.timer.stop();
        TimerService.save();
    }

});
