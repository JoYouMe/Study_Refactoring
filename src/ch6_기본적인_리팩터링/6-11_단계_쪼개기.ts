// 상품의 결제 금액을 계산하는 코드로 시작해보자

function priceOrder(product:any, quantity:any, shippingMethod:any) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price
}