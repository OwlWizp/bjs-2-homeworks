class AlarmClock {
    
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, fync){
        if (!time || !fync) {
            throw new Error('Отсутствуют обязательные аргументы');
        };
        
        if (this.alarmCollection.some(clock => clock.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        };

        return this.alarmCollection.push({
            callback: fync,
            time: time,
            canCall: true,
        })        
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)

    }

    getCurrentFormattedTime () {
        return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    start(){
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(()=> {
            this.alarmCollection.forEach(ring => {
                if (ring.time === this.getCurrentFormattedTime() && ring.canCall === true) {
                    ring.canCall = false;
                    ring.callback();
                }
            })
        }, 1000 )

    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(ring => ring.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}