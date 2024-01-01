/**
 * 3. 새로 만든 객체를 readingOutsideRange()의 매개변수로 추가하도록 함수 선언을 바꾼다.
 */

function readingOutsideRange(station:any, min:any, max:any, range:any){
    return station.readings.filter(r => r.temp < min || r.temp > max)
}

alerts = readingOutsideRange(station, operatingPlan.temperatureFloor,operatingPlan.temperatureCeiling, null)