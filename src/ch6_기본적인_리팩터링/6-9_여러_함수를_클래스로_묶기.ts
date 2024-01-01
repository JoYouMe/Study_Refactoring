/**
 * 1. 먼저 레코드를 클래스로 변환하기 위해 레코드를 캡슐화한다.
 */
class Reading {
    private _customer: any;
    private _quantity: any;
    private _month: any;
    private _year: any;

    constructor(data:any){
        this._customer = data.customer;
        this._quantity = data.quantity
        this._month = data.month;
        this._year = data.year;
    }
    
    get customer(){return this._customer}
    get quantity(){return this._quantity}
    get month(){return this._month}
    get year(){return this._year}
}