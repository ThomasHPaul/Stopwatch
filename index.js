function Stopwatch() {
    let duration = 0;
    let isStarted = false;
    let startTime;
    let stopTime;

    this.start = function() {
        if(isStarted) {
            throw new Error('Stopwatch has already started');
        }
        isStarted = true;
        startTime = Date.now();
    }

    this.stop = function() {
        if(!isStarted) {
            throw new Error('Stopwatch is not started');
        }
        isStarted = false;
        stopTime = Date.now();
        time = (stopTime - startTime) / 1000;
        duration += time;
    }

    this.reset = function() {
        duration = 0;
        startTime = null;
        stopTime = null;
        isStarted = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}