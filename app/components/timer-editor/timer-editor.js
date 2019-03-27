"use strict";

app.component("timerEditor", {
    templateUrl: "components/timer-editor/timer-editor.html",
    controller: "TimerEditorController",
    bindings: {
        add: '&'
    }
});


app.controller("TimerEditorController", function(TimerService, Timer) {

    this.timer = new Timer('', '', false);

    this.addTimer = () => {
        if(this.formular.$invalid) {
            return;
        }
        TimerService.add(this.timer);
        this.add();
    }

});
