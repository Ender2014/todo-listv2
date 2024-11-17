export class EventEmitter {
    static events = {};

    static subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    static unsubscribe(event, callback) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter((listener) => listener !== callback);
    }

    static publish(event, ...args) {
        if (!this.events[event] || this.events[event].length === 0) return;

        this.events[event].forEach(callback => callback(...args));
    }
}
//helper functions