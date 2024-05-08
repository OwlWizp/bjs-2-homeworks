class AlarmClock {
    
    constructor () {
        this.alarmCollection = [];
        this.intervalId;
    }

    addClock (time, fync) {
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

    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)

    }
    getCurrentFormattedTime {
        return "new Date().getHours() : new Date().hoursgetMinutes()"
    }
}