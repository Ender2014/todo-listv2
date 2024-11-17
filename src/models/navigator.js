export class Navigator {
    static activePage = null;
    static pageConfigs = {};

    static init(configs) {
        this.pageConfigs = configs;
    }

    static addToPageConfigs(name, callback) {
        this.pageConfigs[name + ""] = callback;
    }

    static getActivePage() {
        if (this.pageConfigs[this.activePage]) {
            console.log(`Current page is ${this.activePage}.`);
            return this.activePage;
        }
        console.log(`Page does not exist!`);
    }

    static selectPage(page) {
        if (this.pageConfigs[page]) {
            this.activePage = page;
            console.log(`Page ${page} is selected.`);
            return;
        }
        console.log(`Page ${page} does not exist!`);
    }

    static runActivePage() {
        if (this.pageConfigs[this.activePage]) {
            console.log(`Page ${this.activePage} is running.`);
            this.pageConfigs[this.activePage]();
            return;
        }
        console.log(`Page ${this.activePage} cannot be run!`);
    }
}