class Computer {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`I'm running on ${this.name}`);
        
    }
}

class Macbook extends Computer {
    constructor(name, model) {
        super(name);
        this.model = model;
    }
    logIn() {
        console.log(`I'm using ${this.name}`);
        
    }
}

const macbook = new Macbook('Macbook', 'Macbook Pro');
macbook.logIn();
macbook.run();