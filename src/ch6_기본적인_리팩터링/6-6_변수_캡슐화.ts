/** 값 캡슐화하기
 * 기본 캡슐화 기법은 데이터 항목을 참조하는 부분만 캡슐화한다.
 * 대부분은 이 정도로 충분하지만, 변수뿐 아니라 변수에 담긴 내용을 변경하는 행위까지
 * 제어할 수 있게 캡슐화하고 싶을 때도 많다.
 * 나는 주로 게터가 데이터의 복제본을 반환하도록 수정하는 식으로 처리한다.
 */

let defaultOwnerData = { firstName: '마틴', lastName: '파울러'};

export function getDefaultOwner(){
    return Object.assign({}, defaultOwnerData)
}

export function setDefaultOwner(arg:any){defaultOwnerData = arg}




