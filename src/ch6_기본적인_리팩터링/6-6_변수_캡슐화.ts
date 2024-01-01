/**
 *  4. 모든 참조를 수정했다면 이제 변수의 가시 범위를 제한한다.
 * 그러면 미처 발견하지 못한 참조가 없는지 확인할 수 있고, 나중에 수정하는 코드에서도 
 * 이 변수에 직접 접근하지 못하게 만들 수 있다.
 * 자바스크립트로 작성할 때는 변수와 접근자 메서드를 같은 파일로 옮기고 
 * 접근자만 노출시키면 된다.
 */

let defaultOwner = { firstName: '마틴', lastName: '파울러'}

export function getDefaultOwner(){return defaultOwner;}
export function setDefaultOwner(arg:any){defaultOwner = arg}




