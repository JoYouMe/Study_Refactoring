/**
 *  3. 그런 다음 defaultOwner를 참조하는 코드를 찾아서 방금 만든 게터 함수를 호출하도록 고친다.
 */

spaceship.owner = getDefaultOwner;

// 대입문은 세터 함수로 바꾼다.
setDefaultOwner({firstName: '마틴', lastName: '파울러'}) 

function defaultOwner() {return defaultOwnerData}

function getDefaultOwner() {return defaultOwner}

function setDefaultOwner(arg:any){defaultOwnerData = arg}




