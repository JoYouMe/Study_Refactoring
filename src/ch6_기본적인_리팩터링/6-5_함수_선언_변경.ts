/**
 *  매개변수를 속성으로 바꾸기
 * 
 * 2. 함수 추출하기로 새 함수를 만든다.
 */

function inNewEngland(aCustomer: any){
  return xxNEWinNewEngland(aCustomer.address.state)
}

function xxNEWinNewEngland(stateCode:any){
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
