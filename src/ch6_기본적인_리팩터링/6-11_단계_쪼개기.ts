/**
 * 간단한 예지만, 가만 보면 계산이 두 단계로 이뤄짐을 알 수 있다.
 * 상품 정보를 이용해, 결제 금액 중 상품 가격을 계산 | 배송 정보를 이용해, 결제 금액 중 배송비를 계산
 * 나중에 상품 가격과 배송비 계산을 더 복잡하게 만드는 변경이 생긴다면 이 코드는 두 단계로 나누는 것이 좋다.
 * 
 * 1. 먼저 배송비 계산 부분을 함수로 추출한다.
 */

function priceOrder(product:any, quantity:any, shippingMethod:any) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    const price = applyShipping(basePrice, shippingMethod, quantity, discount);
    return price
}

// 두 번째 단계를 처리하는 함수
function applyShipping(basePrice:any, shippingMethod:any, quantity:any, discount:any) {
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}