/**
 * 2. 그런 다음 래핑 함수들을 인라인해서 모든 호출자가 변수에 직접 접근하게 하는 방법도
 * 있지만, 나는 별로 내켜하지 않는 방식이다. 이름ㅇ르 바꾸기 위해 캡슐화부터 해야 할 정도로
 * 널리 사용되는 변수라면 나중을 위해서라도 함수 안에 캡슐화된 채로 두는 편이 좋다고 생각하기 때문이다.
 */

let _title = 'untitled'

function title() {return _title;} 
function setTitle(arg:any){_title = arg} 