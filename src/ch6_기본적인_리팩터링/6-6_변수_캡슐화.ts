/** 값 캡슐화하기
 * 데이터의 복제복은 반환하면 클라이언트는 게터로 얻은 데이터를 변경할 수 있지만 원본에는 아무 영향을 주지 못한다.
 * 단, 주의할 점이 있다. 공유 데이터 (원본)를 변경하기를 원하는 클라이언트가 있을 수 있다.
 * 이럴 때 나는 문제가 될만한 부분을 테스트로 찾는다. 아니면 아예 변경할 수 없게 만들 수도 있다.
 * 이를 위한 좋은 방법이 레코드 캡슐화하기다.
 */

let defaultOwnerData = { firstName: '마틴', lastName: '파울러'};

export function getDefaultOwner(){
    return Object.assign({}, defaultOwnerData)
}

export function setDefaultOwner(arg:any){defaultOwnerData = arg}

class Person {
    constructor(data) {
        this._lastName = data.lastName;
        this._firstName = data.firstName
    }

    get lastName() {return this._lastName;}
    get firstName() {return this._firstName;}
    // 다른 속성도 이런 식으로 처리한다.
}




