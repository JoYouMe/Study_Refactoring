// 2. 추출할 부분을 새로운 함수로 복사한다. 

function printOwing(invoice:any) {
    printBanner();
  
    // 미해결 채무 (outstanding)를 계산한다.
    for (const o of invoice.orders) {
      let outstanding = 0; // 맨 위에 있던 선언문을 이 위치로 이동
      outstanding += o.amount;
    }
  
    recordDueDate(invoice);
    printDetails(invoice, outstanding);
  }
  
  function calculateOutstanding(invoice:any) {
    let outstanding = 0; // 추출할 코드 복사
    for(const o of invoice.orders) {
      outstanding += o.amount;
    }
  // 3. outstanding의 선언문을 추출할 코드 앞으로 옮겼기 때문에 매개변수로 전달하지 않아도 된다.
  // 추출한 코드에서 값이 변경된 변수는 outstanding뿐이다. 따라서 이 값을 반환한다.
    return outstanding; // 수정된 값 반환
  }