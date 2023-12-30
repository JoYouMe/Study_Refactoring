/**
 *  매개변수를 속성으로 바꾸기
 * 
 * 6. 함수 선언 바꾸기를 다시 한번 적용하여 새 함수의 이름을 기존 함수의 이름으로 바꾼다.
 */

const newEnglanders = someCustomers.filter(c=>inNewEngland(c.address.state))

function inNewEngland(stateCode:any){
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}