class Reading {
    base(){}
    taxableCharge(){}
    calculateBaseCharge(){}
}

let reading = {
    customer: 'ivan', quantity: 10, month: 5, year: 2017
}

// client 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client 2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))

// client 3
const aReading = acquireReading();
const baseChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading:any){ // 기본 요금 계산 함수
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

