/**
 * 6. 이제 첫 번째 단계 코드를 함수로 추출하고 이 데이터 구조를 반환하게 한다.
 */

function priceOrder(product:any, quantity:any, shippingMethod:any) {
    const priceData = calculatePricingData(product, quantity)
    return applyShipping(priceData, shippingMethod);
}

// 첫 번째 단계를 처리하는 함수
function calculatePricingData(product:any, quantity:any) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    return { basePrice, quantity, discount }

}

// 두 번째 단계를 처리하는 함수
function applyShipping(priceData:any, shippingMethod:any) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}