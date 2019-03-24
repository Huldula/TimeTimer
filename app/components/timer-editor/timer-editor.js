"use strict";

app.component("timerEditor", {
    templateUrl: "components/timer-editor/timer-editor.html",
    controller: "TimerEditorController",
    bindings: {}
});

class TimerEditor {
    constructor() {

    }

    timer = new Timer('', '');
}

app.controller("TimerEditorController", TimerEditor);
