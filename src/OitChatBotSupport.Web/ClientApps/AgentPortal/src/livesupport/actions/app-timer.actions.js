export var INITIALIZE_TIMER = '[Timer] INITIALIZE_TIMER';
export var EMIT_SECOND_INTERVAL = '[Timer] EMIT_SECOND_INTERVAL';
var EmitSecondIntervalAction = (function () {
    function EmitSecondIntervalAction(interval) {
        this.interval = interval;
        this.type = EMIT_SECOND_INTERVAL;
    }
    return EmitSecondIntervalAction;
}());
export { EmitSecondIntervalAction };
var InitializeTimerAction = (function () {
    function InitializeTimerAction(interval) {
        this.interval = interval;
        this.type = INITIALIZE_TIMER;
    }
    return InitializeTimerAction;
}());
export { InitializeTimerAction };
//# sourceMappingURL=app-timer.actions.js.map