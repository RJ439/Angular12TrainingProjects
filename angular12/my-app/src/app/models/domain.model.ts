// Prototype for Authentication

export class AuthInfo{
    userId: string;
    password:string;

    constructor(userId:string, password: string){
        this.userId = userId;
        this.password = password;
    }
}

export class UserInfo{
    userId: string;
    role: string;

    constructor(userId:string, role: string){
        this.userId = userId;
        this.role = role;
    }
}

export class IOrder {
    id: Number;
    customerId:Number;
    productName:String;
    quantity:Number;
    unitPrice:Number;
    lineTotal:Number

    constructor(id: Number, customerId: Number, productName: string, quantity: Number, unitPrice: Number, lineTotal: Number) {
        this.id = id;
        this.customerId = customerId;
        this.productName = productName;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.lineTotal = lineTotal;
    }
}