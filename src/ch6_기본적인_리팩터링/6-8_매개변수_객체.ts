/**
 * 5. 이제 온도 범위를 객체 형태로 전달하도록 호출문을 하나씩 바꾼다.
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

function readingOutsideRange(station:any, min:any, max:any, range:any){
    return station.readings.filter(r => r.temp < min || r.temp > max)
}

alerts = readingOutsideRange(station, operatingPlan.temperatureFloor,operatingPlan.temperatureCeiling, null)

const range = new NumberRange(operatingPlan.temperatureFloor,operatingPlan.temperatureCeiling)