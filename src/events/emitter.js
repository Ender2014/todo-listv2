export const EventEmitter = (function() {
    const events = {};

    const subscribe = (event, callback) => {
        if(!events[event]){
            events[event] = [];
        }
        events[event].push(callback);
    }

    const unsubscribe = (event, callback) => {
        if(!events[event]) return;

        events[event] = events.filter((listener) => listener !== callback)
    }

    const publish = (event, ...args) => {
        if (!events[event] || events[event].length === 0) return;
        events[event].forEach(callback => callback(...args));
    }

    return{
        subscribe,
        unsubscribe,
        publish
    }
})();

//helper functions