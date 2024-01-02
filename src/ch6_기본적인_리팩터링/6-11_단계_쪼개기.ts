/**
 * 5. 이제 applyShipping()에 전달되는 다양한 매개변수를 살펴보자. 
     중간 데이터 구조로 옮기고 매개변수 목록에서 제거한다.
 */

     function priceOrder(product:any, quantity:any, shippingMethod:any) {
        const basePrice = product.basePrice * quantity;
        const discount = Math.max(quantity - product.discountThreshold, 0)
            * product.basePrice * product.discountRate;
        const priceData = { basePrice, quantity, discount }; // 중간 데이터 구조
        const price = applyShipping(priceData, shippingMethod);
        return price
    }
    
    function applyShipping(priceData:any, shippingMethod:any) {
        const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
            ? shippingMethod.discountFee : shippingMethod.feePerCase;
        const shippingCost = priceData.quantity * shippingPerCase;
        const price = priceData.basePrice - priceData.discount + shippingCost;
        return price;
    }