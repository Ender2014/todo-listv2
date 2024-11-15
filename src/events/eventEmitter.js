function EventEmitter(){
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

    const publish = (event, data) => {
        if (!events[event] || events[event].length === 0) return;
        events[event].forEach(callback => callback(data));
    }

    return{
        subscribe,
        unsubscribe,
        publish
    }
}

export {
    EventEmitter
}