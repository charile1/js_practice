// 콜백함수
// 함수의 매개변수로 들어가는 함수
function a(x) {
    console.log(x);
}

// 매개변수를 1개 받는 함수 a가 있을 때, 이 함수를 아래와 같이 매개변수로 다양한 값을 받아서 호출할 수 있습니다.
a(1); //1
a(2); //2
a('가나다'); //'가나다'
a([1, 2, 3]); //[1, 2, 3]

// 또 아래와 같이 매개변수에 함수를 받아 호출할 수 도 있습니다
a(function(){
    console.log('콜백함수입니다.');
}) 
// ƒ (){
// console.log('콜백함수입니다.');
// }

// 함수를 직접 a()에 정의해서 넣지 않고 변수에 할당해서 넣어도 똑같습니다.
let b = function() {
    console.log('콜백함수입니다');
    };
// undefined
a(b);
// ƒ () {
// console.log('콜백함수입니다');
// }

// 화살표 함수도 변수에 할당해서 호출할 수 있습니다.
let b = () => console.log('콜백함수입니다.');
a(b);
// () => console.log('콜백함수입니다.')


////////////////////////////////////////////
// setTimeout은 지연시간 이후에 콜백함수를 실행합니다.
setTimeout(콜백함수, 지연시간);

// 콜백함수로 () => console.log('완료')를 넣고, 지연시간에 1000을 넣었습니다.
// 1초(1000ms)뒤에 '완료'라는 문자열을 출력하는 콜백함수를 실행합니다.
setTimeout(() => console.log('완료'),1000);

// setTimeout의 첫번째 매개변수는 콜백함수가 들어가야 합니다.
// () => console.log('완료')대신 console.log('완료')를 넣으면 함수가 아닌 console.log('완료')의 반환값인 undefined가 들어가 에러가 발생합니다.
setTimeout(console.log('완료'),1000);


// setTimeOut은 비동기적으로 동작합니다. 동기적이였더라면 1 2 완료 3 4 순으로 출력되었겠지만, 실제로는 1 2 3 4 완료이다.
// console.log(1)과 console.log(2)가 순차적으로 실행되고 
// a()가 실행되는데, 1초 후에 실행될 () => console.log('완료')는 테스크 큐에서 대기를 합니다.
// 1초가 지나면 () => console.log('완료')가 실행될 준비가 됩니다.
// 순차적으로 console.log(3)과 console.log(4)가 실행됩니다.
// 3과 4가 실행되는 것은 위에서 말한 1초를 기다리는 것과 동시에 일어납니다.
// a()가 실행되고 1초가 지났습니다.
// 모든 코드가 다 끝났으므로 호출 스택이 비어있고 
// 이벤트 루프가 테스크 큐에서 대기중인 () => console.log('완료')를 호출 스택으로 보냅니다.
// 이제 () => console.log('완료')가 실행됩니다.
// 1초를 기다리는 동안 3과 4가 출력된다는 것을 이해해야 한다.
function a(){
    setTimeout(() => console.log('완료'), 1000);
}

console.log(1);
console.log(2);
a(); // 1초 후 실행 
console.log(3); //1초를 기다리는 동안 3,4 실행
console.log(4);
// 1
// 2
// 3
// 4
// 완료

// 우리가 의도했던 순서로 동작하는 코드
// 아까 함수 a는 함수 안에서 곧바로 setTimeout을 실행했지만
// 지금 함수 b에서는 return문으로 Promise 객체를 반환하고 있습니다.
function b(){
    return new Promise((resole, result) => {
        setTimeout(() => resolve('완료'), 1000);
    });
}

console.log(1);
console.log(2);
b().then(res => console.log(res))
    .then(() => {
        console.log(3);
        console.log(4);
    });
// 1
// 2
// 완료
// 3
// 4

// Promise 생성자함수(붕어빵 틀)로 인스턴스(붕어빵)를 만드는 기본적인 형태
// 선언한 적도 없는 resolve,reject 매개변수는 Promise 생성자 함수가 호출될때 
// 콜백함수의 첫번째, 두번째 매개변수에 자동으로 들어가는 함수입니다.
let promise = new Promise((resole, reject) => {
    if(성공일 때){
        resolve(성공일 때 반환할 값);
    }else {
        reject(실패일 때 반환할 오류);
    }
});
// resolve 나 reject가 호출되지 않으면 Promise는 pending 상태에 있습니다.
// resolve를 호출하면 프로미스의 상태는 fulfilled(성공)이며, result로 "성공일 때 반환할 값"을 갖습니다.
// reject를 호출하면 프로미스의 상태는 rejected(실패)이며, result로 "실패일 때 반환할 값"을 갖습니다.


// 자동으로 들어간다는 것은 map의 매개변수로 (value, index)가 들어가는 것과 같은 원리입니다.
[1, 2, 3].map((value, index) => console.log(value, index));
// 1 0
// 2 1
// 3 2

// 반드시 resolve와 reject를 나눠서 호출할 필요는 없습니다.
// 함수 b를 보면 resolve 만 있고 reject는 없는 것을 볼 수 있습니다.
// 함수 b의 프로미스는 처음에는 pending 상태였다가, 1초 후에 fulfilled 상태가 되고 '완료'라는 반환값을 갖게 됩니다.
function b() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('완료'), 1000);
    });
  }
