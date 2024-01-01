/**
 * 2. 이미 만들어져 있는 calculateBaseCharge()부터 옮기자.
 * 새 클래스를 사용하려면 데이터를 얻자마자 객체로 만들어야 한다.
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
    get baseCharge(){
        return baseRate(this.month, this.year) * this.quantity;
    }

    
}

// client 1
const rawReading_1 = acquireReading();
const aReading_1 = new Reading(rawReading_1);
const baseCharge = aReading_1.baseCharge

// client 2
const rawReading_2 = acquireReading();
const aReading_2 = new Reading(rawReading_2);
const taxableCharge_2 = Math.max(0, aReading_2.baseCharge - taxThreshold(aReading_2.year))

// client 3
const rawReading_3 = acquireReading();
const aReading_3 = new Reading(rawReading_3);
const taxableCharge_3 = aReading_3.baseCharge