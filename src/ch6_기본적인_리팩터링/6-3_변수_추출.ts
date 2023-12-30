// 1. 기본 가격은 상품 가격(itemPrice)에 수량 (quantity)을 곱한 값임을 파악해내야 한다.

function price(order:any) {
    // 가격 (price) = 기본 가격 - 수량 할인 + 배송비
    return (
      order.quantity * order.itemPrice -
      Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
      Math.min(order.quantity * order.itemPrice * 0.1, 100)
    );
  }