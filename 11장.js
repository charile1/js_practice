// 11-01
const o = {};

o.a = 1;
console.log(o);
// {a: 1}

// 11-02 
// 문자열은 0개 이상의 문자로 이뤄진 집합이다. 
let str1 = '';  // 0개의 문자로 이뤄진 문자열 
let str2 = 'hello'// 5개의 문자로 이뤄진 문자열 

// 11-03
// str은 "hello"가 저장된 메모리 공간의 첫번째 셀 주소를 가리키다가, 
// 재할당 되면서 "world"가 저장된 메모리 주소를 가르킨다. 
let str = "hello"
    str = "world"

// 11-04 유사 배열 객체
let str = 'string';

console.log(str[0]); //s

console.log(str.length); //6
console.log(str.toUpperCase()); //STRING 

// 11-05 유사 배열 객체
let str = 'string';

str[0] = 'A';
console.log(str); //string 

// 11-06 값에 의한 전달 (복사)
let score = 100;
let count = score;

console.log(score); //100
console.log(count); //100

score = 123;

console.log(score); //123
console.log(count); //100

// 11-07
// 두 개의 변수는 같은 숫자값이지만
// 다른 메모리 공간에 저장된 별개의 값 
let score = 100;
let count = score;

console.log(score, count)  //100 100
console.log(score === count) // true 

// 11-08 
let score = 100;
let count = score;

console.log(score, count)  //100 100
console.log(score === count) //true

score = 200;

console.log(score, count)  // 200 100
console.log(score === count) //false 


// 11-12
let person = {
    name: 'lee'
};
//프로퍼티 값 갱신
person.name = 'kim';

//프로퍼티 동적 생성
person.age = '17';
person.height = '163cm';

console.log(person);

// 11-17 참조에 의한 전달 
let person = {
    name: 'lee'
};

let count = person; // 참조 값을 복사. 이제 person과 count는 동일한 참조 값을 갖고 같은 객체를 가르킨다. 

console.log(person === count); //true 

count.name = 'park'; //변수 count 를 통해 객체를 변경한다. 

person.age = '20'; //person으로 객체를 동적 생성한다. 

console.log(person); // [name: 'park', age: '20']
console.log(person); // [name: 'park', age: '20']

// 11-18
let person1 = {
    name: 'lee'
};

let person2 = {
    name: 'lee'
};

console.log(person1 === person2); //false
console.log(person1.name === person2.name); //true 

