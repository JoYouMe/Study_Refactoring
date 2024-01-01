/**
 * 2. 이제 변경하려는 계산 로직 중 하나를 고른다. 먼저 이 계산 로직에 측정값을 전달하기 전에
 * 부가 정보를 덧붙이도록 수정한다.
 */

import { isAssertClause } from "typescript";

function calculateBaseCharge(original: any) {
    const result = _.cloneDeep(original);
    // 미가공 측정값에 기본 소비량을 부가 정보로 덧붙임
    result.baseCharge = calculateBaseCharge(result);
    return result;
}

it('check reading unchaged', function(){
    const baseReading = {customer: 'ivan', quantity: 10, month: 5, year: 2024}
    const oracle = _.cloneDeep(baseReading);
    enrichReading(baseReading);
    isAssertClause.deepEqual(baseReading, oracle)
})

// client 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// client 3
const rawReading_3 = acquireReading();
const aReading = enrichReading(rawReading_3);
const basicChargeAmount = aReading.baseCharge;
