/**
 *  3. 다음 새 함수의 선언문과 호출문에 원하는 매개변수를 추가한다.
 * 
 * 호출하는 곳에서 새로 추가한 매개변수를 실제로 사용하는지 확인한다.
 * 호출문을 수정하는 과정에서 실수로 새 매개변수를 빠뜨린 부분을 찾는데 도움이 된다.
 */

class Book {
  private _reservations: any[] = [];

  addReservation(customer: any) {
    this.zzReservations(customer, false);
  }

  zzReservations(customer: any, isPriority: boolean) {
    if (!(isPriority === true || isPriority === false)) {
      throw new Error('isPriority should be a boolean value');
    }
    this._reservations.push(customer);
  }
}
