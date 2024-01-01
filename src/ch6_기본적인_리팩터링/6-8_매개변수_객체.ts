/**
 * 1. 묶은 데이터를 표현하는 클래스부터 선언하자.
 */

class NumberRange {
    private _data: any;
    constructor(min:any, max:any){
        this._data = {min:min, max:max}
    }
    get min(){return this._data.min;}
    get max(){return this._data.max}
}