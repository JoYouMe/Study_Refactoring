// 마지막으로 반환 값의 이름을 내 코딩 스타일에 맞게 바꾼다.

function printOwing(invoice:any) {
    printBanner();
    const outstanding = calculateOutstanding(invoice)
    recordDueDate(invoice)
    printDetails(invoice, outstanding)
  }
  
  function calculateOutstanding(invoice:any) {
    let result = 0; 
    for(const o of invoice.orders) {
      result += o.amount;
    }
    return result; 
  }