/**
 *  2. addReservation()의 본문을 새로운 함수로 추출한다.
 * 새로 추출한 함수 이름도 addReservation()이어야 하지만,
 * 기존 함수와 이름이 같은 상태로 둘 수는 없으니 우선은 
 * 나중에 찾기 쉬운 임시 이름을 붙인다.
 */

class Book {
  _reservations: any;
  addReservation(customer:any){
    this.zz_reservations(customer)
  }

  zz_reservations(customer:any){
    this._reservations.push(customer)
  }
}