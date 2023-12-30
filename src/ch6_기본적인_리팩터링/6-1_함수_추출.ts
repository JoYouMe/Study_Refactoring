// 4. 내 자바스크립트 환경은 컴파일해도 아무런 값을 출력하지 않는다. 따라서 이 단계에서는 더 이상 할 일이 없다.
// 5. 다음으로 넘어가, 추출한 코드의 원래 자리를 새로 뽑아낸 함수를 호출하는 문장으로 교체한다.
// 추출한 함수에서 새 값을 반환하니, 이 값을 원래 변수에 저장한다.

function printOwing(invoice:any) {
    printBanner();
    let outstanding = calculateOutstanding(invoice) // 함수 추출 완료. 추출한 함수가 반환한 값을 원래 변수에 저장한다.
    recordDueDate(invoice)
    printDetails(invoice, outstanding)
  }
  
  function calculateOutstanding(invoice:any) {
    let outstanding = 0; // 추출할 코드 복사
    for(const o of invoice.orders) {
      outstanding += o.amount;
    }
    return outstanding; // 수정된 값 반환
  }