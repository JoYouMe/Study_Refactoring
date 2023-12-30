// 2. 이 로직을 이해했다면 기본 가격을 담을 변수를 만들고 적절한 이름을 지어준다.

function price(order:any) {
    // 가격 (price) = 기본 가격 - 수량 할인 + 배송비
    const basePrice = order.quantity * order.itemPrice;
    return (
      order.quantity * order.itemPrice -
      Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
      Math.min(order.quantity * order.itemPrice * 0.1, 100)
    );
  }