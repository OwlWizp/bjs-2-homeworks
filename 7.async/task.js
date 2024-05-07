class AlarmClock {
    
    constructor () {
        this.alarmCollection = [];
        this.id;
    }
    addClock (time, fync) {
        if (!time || !fync) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        
    }
}