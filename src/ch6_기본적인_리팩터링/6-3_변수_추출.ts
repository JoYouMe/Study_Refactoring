// 3. 이 변수를 실제로 사용해야 하므로 원래 표현식에서 새로 만든 변수에 해당하는 부분을 교체한다.

function price(order:any) {
    // 가격 (price) = 기본 가격 - 수량 할인 + 배송비
    const basePrice = order.quantity * order.itemPrice;
    return basePrice - 
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  }