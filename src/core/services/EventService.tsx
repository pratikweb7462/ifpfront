/* 
Author: Zankat Kalpesh
Email: zankatkalpesh@gmail.com
*/

class EventService {

    subscribers: any = {};

    subscribersData: any = {};

    constructor() {
        this.subscribers = {};
        this.subscribersData = {};
    }

    subscribe(eventName: string, callback: (res: any) => void, lastData: boolean = false) {
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = [];
        }

        this.subscribers[eventName].push(callback);

        // Check if there is last data for the event
        if (this.subscribersData[eventName] && lastData) {
            // Call the callback with the last data immediately
            callback(this.subscribersData[eventName]);
        }
    }

    unsubscribe(eventName: string, callback: (res: any) => void) {
        if (!this.subscribers[eventName]) {
            return;
        }

        this.subscribers[eventName] = this.subscribers[eventName].filter(
            (subscriber: any) => subscriber !== callback
        );
    }

    dispatch(eventName: string, data: any) {
        // set last data
        this.subscribersData[eventName] = data;

        if (!this.subscribers[eventName]) {
            return;
        }

        // dispatch event
        this.subscribers[eventName].forEach((subscriber: (arg: any) => void) => {
            subscriber(data);
        });
    }
}

export default new EventService();