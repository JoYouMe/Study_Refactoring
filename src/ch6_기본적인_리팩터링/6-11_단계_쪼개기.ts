/**
 * 3. 다음으로 첫 번째 단계와 두 번째 단계가 주고받을 중간 데이터 구조를 만든다.
 */

function priceOrder(product:any, quantity:any, shippingMethod:any) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    const priceData = {}; // 중간 데이터 구조
    const price = applyShipping(priceData, basePrice, shippingMethod, quantity, discount);
    return price
}

function applyShipping(priceData:any, basePrice:any, shippingMethod:any, quantity:any, discount:any) {
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}