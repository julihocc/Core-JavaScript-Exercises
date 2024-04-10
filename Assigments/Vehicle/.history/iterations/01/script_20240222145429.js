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
        this.battery = 100;
    }
}

class CombustionEngine extends Engine {
    constructor() {
        super();
        this.fuel = 100;
    }
    consumeFuel() {
        this.fuel--;
    }
    refillFuel() {
        this.fuel = 100;
    }
}

class ElectricVehicle extends Vehicle {
    constructor() {
        super(new ElectricEngine());
    }
    rechargeBattery() {
        this.engine.rechargeBattery();
    }
    turnOnOff() {
        this.engine.turnOnOff();
        console.log('Electric vehicle is ' + (this.engine.isOn ? 'on' : 'off'));
    }
}

const electricVehicle = new ElectricVehicle();
electricVehicle.turnOnOff();
electricVehicle.