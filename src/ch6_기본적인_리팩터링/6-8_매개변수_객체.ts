/**
 * 6. 이제 기존 매개변수를 사용하는 부분을 변경한다. 
 */

class NumberRange {
    private _data: any;
    constructor(min:any, max:any){
        this._data = {min:min, max:max}
    }
    get min(){return this._data.min;}
    get max(){return this._data.max}
}

let operatingPlan:any;
let station:any;

function readingOutsideRange(station:any, range:any){
    return station.readings.filter(r => r.temp < range.min || r.temp > range.max)
}
const range = new NumberRange(operatingPlan.temperatureFloor,operatingPlan.temperatureCeiling)

let alerts = readingOutsideRange(station, range)
