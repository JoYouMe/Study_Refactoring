// 5. 이 변수를 실제로 사용해야 하므로 원래 표현식에서 새로 만든 변수에 해당하는 부분을 교체한다.

  function price(order:any) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount =
      Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
  }