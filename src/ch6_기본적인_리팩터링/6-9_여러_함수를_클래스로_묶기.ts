/**
 * 3. 이어서 세금을 부과할 소비량을 계산하는 코드를 함수로 추출한다.
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
    get taxableCharge(){
        return Math.max(0, this.baseCharge - taxThreshold(this.year))
    }
    
}

function taxableChargeFn(aReading:any){
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year))
}

// client 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge