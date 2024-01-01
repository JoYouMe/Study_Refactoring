/**
 * 4. 이제 세금을 부과할 소비량 계산으로 넘어가자.
 * 가장 먼저 변환 함수부터 끼워 넣는다.
 */
function enrichReading(original: any) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year))
    return result;
}


// 새로 만든 필드를 사용하도록 원본 코드를 수정한다.
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;