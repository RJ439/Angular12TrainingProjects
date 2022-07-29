export class Engine {
    constructor() {

    }

    public StartEngine(): string {
        return "Engine is starting";
    }
    public StopEngine(): string {
        return "....Engine is stopping";
    }
}

export class Truck{
    constructor() {

    }
    public TransportLoad(weightInTons:number): string {
        return "Transporting" + weightInTons.toString() + "tonnes";
    }
}

export class ContainerTruck {}
export interface ContainerTruck extends Engine, Truck {};
//create a function to bundle the definitions of members in Engine & Truck
function mixEngineAndTruck(derivedCtor:any, constructor:any[]) {
    constructor.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype,name) || 
                Object.create(null)
            )
        })
    })
}
  //bundle
  mixEngineAndTruck(ContainerTruck,[Engine, Truck]);