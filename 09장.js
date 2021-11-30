// 9-2
var x = 10;
var str = x + '';
console.log(typeof str,str);

// 결과 : string, 10

// 9-6

// 숫자 타입
0 + '' // '0'
-0 + '' // '0'
1 + '' // '1'
-1 + '' // '-1'
Nan + '' // 'NaN'
Infinity + '' // 'Infinity'
-Infinity + '' // '-Infinity'

// 불리언 타입
true + '' // 'true'
false + '' // 'false'

// null 타입
null + '' // 'null'

// undefined 타입
undefined + '' // 'undefinded'

//심벌 타입
(Symbol()) + '' // TypeError 

// 객체 타입
({}) + '' // '[object Object]'
Math + '' // '[object Math]'
[] + '' // ''
[10, 20] + '' // '10,20'
(function(){}) + '' // 'function(){}'
Array + '' // 'function Array() { [native code] }'


// 9-9
// 숫자 타입으로 변환 시켰을 때 0 이 나오는 경우
+ ''
+ '0'
+ false
+ null
+ []

// 숫자 타입으로 변환 시켰을 때 NaN 이 나오는 경우 
+ 'string'
+ undefined
+ {}
+ [10,20]
+ (function(){})



// 9-11 
if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');

// 결과 :  2 4 


//  9-13 truthy/falsy 값을 판별하는 함수

function isFalsy(v) {
    return !v;
}
function isTruthy(v) {
    return !!v;
}

// 9-20 
// && 은 앞 조건과 뒷 조건이 모두 true 해야하는 아이 
let done = true;
let message ='';

// 주어진 조건이 truthy값
if (done) message = '완료';

// done 이 true 라면 message에 '완료'를 할당
message = done && '완료';
console.log(message);

// 9-21
// || 으로 조건이 falsy 한 경우 적용하기 
let done = false;
let message ='';

// 주어진 조건이 falsy 값
if (!done) message = '미완료';

// done 이 false 라면 message에 '미완료'를 할당
message = done && '미완료';
console.log(message);

// 9-22
let done = true;
let message = '';

// if ... else 문
if (done) message = '완료';
else message = '미완료';
console.log(message);

// 위를 삼항 조건 연산자로 대체하면
let done = true;
let message = '';

message = done ? '완료' : '미완료' ;
console.log(message);

// 9-23 
// 객체를 가리키기를 기대하는 변수값이 객체가 아닌 null 이나 undefined 이면 객체의 프로퍼티를 참조하면 타입에러가 발생하고 강제 종료된다.
let elem = null;
let value = elem.value;

let elem = null;
let value = elem && elem.value;

