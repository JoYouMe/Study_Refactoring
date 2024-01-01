/**
 *  1. 기본적인 캡슐화를 위해 가장 먼저 데이터를 읽고 쓰는 함수부터 정의한다.
 */

let defaultOwnerData = {firstName: '마틴', lastName: '파울러'}

spaceship.owner = defaultOwner;

function defaultOwner() {return defaultOwnerData}

function getDefaultOwner() {return defaultOwner}

function setDefaultOwner(arg:any){defaultOwnerData = arg}


