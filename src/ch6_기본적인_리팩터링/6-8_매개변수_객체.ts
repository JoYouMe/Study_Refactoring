// 온도 측정값을 표현하는 데이터
const station = {
    name: 'ZB1',
    readings:[
        {temp: 47, time: '2024-01-01 09:10'},
        {temp: 47, time: '2024-01-01 09:10'},
        {temp: 47, time: '2024-01-01 09:10'},
        {temp: 47, time: '2024-01-01 09:10'},
        {temp: 47, time: '2024-01-01 09:10'},
    ]
}

// 정상 범위를 벗어난 측정값을 찾는 함수
function readingsOutsieRange(station:any, min:any, max:any){
    return station.readings.filter(r => r.temp < min || r.temp > max)
}

alerts = readingsOutsieRange(station,
    operatingPlan.temperatureFloor, // 최저 온도
    operatingPlan.temperatureCeiling // 최고 온도
    )

