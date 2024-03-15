class Vehicle {
    constructor(engine) {
        this.engine = engine;
    }
    turnOnOff() {
        this.engine.turnOnOff();
    }
    accelerate(){}
    brake(){}

}

class Engine {
    constructor() {
        this.isOn = false;
    }
    turnOnOff() {
        this.isOn = !this.isOn;
    }
}

class Electric