/**
 *  매개변수를 속성으로 바꾸기
 * 
 * 1. 매개변수로 사용할 코드를 변수로 추출해둔다.
 */

function inNewEngland(aCustomer: any){
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}