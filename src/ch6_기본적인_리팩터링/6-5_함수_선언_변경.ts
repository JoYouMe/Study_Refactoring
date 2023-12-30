/**
 * 매개변수 추가하기
 * 
 */

class Book {
  _reservations: any;
  addReservation(customer:any){
    this._reservations.push(customer)
  }
}