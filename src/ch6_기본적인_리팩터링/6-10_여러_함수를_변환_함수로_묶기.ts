let reading = {customer: 'ivan', quantity: 10, month: 5, year: 2024}

// client 1
const _aReading = acquireReading();
const _baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client 2
const aReading_2 = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const _taxableCharge = Math.max(0, base - Number(taxThreshold(aReading_2.year)))

// client 3
const aReading_3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading_3)

function calculateBaseCharge(aReading: any){ // 다른 곳에서 이미 함수로 만들어둠
    return baseRate(aReading.month, aReading.year) * aReading.quantity
}

function acquireReading (){}
function baseRate (month:any, year:any):any{}
function taxThreshold (year:any):any{}
