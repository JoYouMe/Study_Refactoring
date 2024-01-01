/**
 * 1. 우선 입력 객체를 그대로 복사해 반환하는 변환 함수로 만든다.
 * 
 * 깊은 복사는 lodash 라이브러리가 제공하는 cloneDeep()로 처리했다.
 */

function enrichReading(original: any){
    const resutl = _.cloneDeep(origin);
    return resutl;
}