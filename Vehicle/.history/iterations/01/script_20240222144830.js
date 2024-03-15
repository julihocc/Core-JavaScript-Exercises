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

class ElectricEngine extends Engine {
    constructor() {
        super();
        this.battery = 100;
    }
    consumeBattery() {
        this.battery--;
    }
    rechargeBattery() {
        
}