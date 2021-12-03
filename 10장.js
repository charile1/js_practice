// 그림 10-2 
let counter = {
    // 프로퍼티(일반적인 키:벨류)
    num : 0,
    // 메서드(함수)
    increase: function() {
    this.num++;
    }
}

// 10-1 
// person의 타입은 객체이고 , person은 {name: 'Lee', sayHello: ƒ} 형태를 가진다. 
let person = {
    name: 'Lee',
    sayHello: function() {
        console.log(`hello! my name is ${this.name}.`);
    }
};
console.log(typeof person);
console.log(person);

// 10-2 
// {} 내에 프로퍼티를 정의하지 않으면, 빈 객체 오브젝트 생성. 
let empty = {};
console.log(typeof empty); //object


// Object 생성자 함수로 객체 생성하기 (거의 쓸일 없음)
// 빈 객체의 생성
let person = new Object();
// 프로퍼티 추가 
person.name = 'lee';
person.gender = '여';
person.sayHello = function() {
    console.log('Hi! My name is ' + this.name);
}

console.log(typeof person);
console.log(typeof person);

person.sayHello();
//  object
//  object
//  Hi! My name is lee

// 프로퍼티 키에서 따옴표를 사용해야 하는 경우
// first-name은 - 하이픈은 자바스크립트에서 유효하지 않으므로 따옴표를 붙여주고 _ 는 유효하므로 생략가능. 
// for, function 같은 예약어를 키로 써도 에러는 안나지만, 예상치 못한 에러를 위해 사용하면 안된다. 
let person = {
    'first-name': 'park',
    'last-name': 'suh',
    middle_name : 'kyung',
    1 : 10,
    for : 'hello world',
    function : 'bye world'
}

// 프로퍼티에 접근하는 방법 2가지 . 과 [''] 
// 오류 난 이유 : 프로퍼티 사이에 , 를 몇 군데 빼먹었다. 
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10
  };
  
  console.log(person);
  
  console.log(person.first-name);    // NaN: undefined-undefined
  console.log(person[first-name]);   // ReferenceError: first is not defined
  console.log(person['first-name']); // 'Ung-mo'
  
  console.log(person.gender);    // 'male'
  console.log(person[gender]);   // ReferenceError: gender is not defined
  console.log(person['gender']); // 'male'
  
  console.log(person['1']); // 10
  console.log(person[1]);   // 10 : person[1] -> person['1']
  console.log(person.1);    // SyntaxError

//객체에 없는 프로퍼티를 참조하는 경우 undefined을 출력한다.
let person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};  
  console.log(person.age); // undefined


//   프로퍼티 값 갱신하면 덮어쓴다.
// 내가 범한 오류 : 대괄호 표기법 쓸거면서 person 뒤에 . 쳐서 오류남, 
let person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};
person['first-name'] = 'kim';
person.gender = 'hey';
console.log(person['first-name']); //kim
console.log(person.gender); //hey

// 프로퍼티 동적 생성 : 프로퍼티에 없는 값을 참조하면 새로 생성해서 객체에 추가해준다. 
let person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};
person.age = '17';
console.log(person.age); //17


// for - in문 : 객체 내의 모든 프로퍼티에 루프를 수행
// person내의 프로퍼티에 루프를 도는데 순서는 보장되지 않는다. 
let person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male'
  };

for (let i in person) {
    console.log(i + ':' + person[i]);
}
// first-name:Ung-mo
// last-name:Lee
// gender:male

// 배열의 경우 인덱스가 반환된다. 
let array = ['one','two'];

for (let i in array) {
    console.log(i + ':' + array[i]);
}
// 0:one
// 1:two

// 배열의 경우, 배열뿐만 아니라 다른 요소도 순회해버린다. 그러므로 배열에선 for-in문을 사용하지말자. 
let array = ['one','two'];
array.age = '17' 

for(let i in array){
    console.log(i + ':' + array[i]);
}
// 0:one
// 1:two
// age:17

// for-of 문
// for-in문과 달리 생성되는 요소 없이 배열 내에 있는 요소만 순회한다.
let array = ['one', 'two'];
array.age = '17';

for (let i of array){
    console.log(i);
}
// one
// two

// entries를 이용해 인덱스와 벨류 값 쌍으로 구하기 
let array = [1, 2, 3];
array.age = '17';

for (let [i, value] of array.entries()){
    console.log(i,value);
}
// 0 1
// 1 2
// 2 3

// 객체의 참조값이 저장된 변수 girl을
//  다른 변수 boy에 할당하였을때 같은 참조값이 저장됨
let girl = {
    name : 'park'
}

let boy = girl;
console.log(girl.name, boy.name) // park park
console.log(girl === boy); // true

boy.name = 'kim';
console.log(girl.name, boy.name) // kim kim
console.log(girl === boy); // true


// 객체는 참조 타입! 
let a = {}, b = {}, c = {}; //a, b, c 모두 다 다른 객체를 참조
console.log(a === b , b === c , a === c); // false false false 

a = b = c = {};
console.log(a === b , b === c , a === c); // true true true 

var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b);

// 프로퍼티 축약 표현 
// 예제 10-19
let x = 1, y = 2; 

let obj = {
    x: x,
    y: y
};

console.log(obj); 
//{x: 1, y: 2}

// 프로퍼티 축약 표현, 변수명과 프로퍼티 키가 동일한 경우, 키 생략 
let x = 12, y = 21; 

let obj = {x , y};

console.log(obj);
//{x: 12, y: 21}

//프로퍼티 키를 동적 생성하는 방법 
// 객체리터럴 외부에서 []대괄호로 만든다.
let prefix = 'name';
let i = 0;

let obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj);
// {name-1: 1, name-2: 2, name-3: 3}

// ES6부터 도입된 메서드 정의할때 function을 생략한 축약 표현
let person = {
    name: 'lee',
    sayHi: function(){
        console.log('hi! '+this.name);
    }
};
person.sayHi();
//hi! lee

let obj = {
    name: 'lee',
    sayHi() {
        console.log('hi! '+ this.name);
    }
}
obj.sayHi();
//hi! lee
