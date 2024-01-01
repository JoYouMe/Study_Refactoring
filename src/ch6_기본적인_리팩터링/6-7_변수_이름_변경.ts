/**
 * 1. 나는 이럴 때 주로 변수 캡슐화하기로 처리한다.
 */
result += `<h1>${tpHd}</h1>`

setTitle(obj['articleTitle'])

function title() {return tpHd;} // tpHd 변수의 게터
function setTitle(arg){tpHd = arg} // tpHd 변수의 세터
