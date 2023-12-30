// 1. 선언문을 변수가 사용되는 코드 근처로 슬라이드 한다.

function printOwing(invoice:any) {
  
    printBanner(); 
    
    // 미해결 채무 (outstanding)를 계산한다.
    for (const o of invoice.orders) {
      let outstanding = 0; // 맨 위에 있던 선언문을 이 위치로 이동
      outstanding += o.amount;
    }
  
    recordDueDate(invoice) 
    printDetails(invoice, outstanding); 
  
  }