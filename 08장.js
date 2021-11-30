// 08-09
let year = 2000
let month = 2 
let days = 0

switch (month) {
    case 1: case 3: case 7: case 8: case 10: case 12: 
        days = 31;
        break;

    case 4: case 6: case 9: case 11: 
        days = 30;
        break;
    
    case 2: 

    // 윤년 계산 알고리즘
    // 2월이 28일까지면 평년, 29일까지인 해는 윤년.
    // year가 4로 나누어 떨어지는 해는 윤년이다.
    // year가 4로 나누어 떨어지더라도, 100으로 나누어 떨어지면 평년이다. 
    // 위 두 조건을 둘 다 만족해야하므로 && 로 묶어준다.
    // year가 400으로 나누어 떨어지면 윤년이다. 
    days = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) ? 29 : 28 ;
    break;

    default:
        console.log('Invalid month');
}

console.log(days);

// 08-13
// 두 주사위를 굴려 두 눈의 합이 6이 되는 모든 경우의 수 
for (let i = 1; i <= 6; i++){
    for (let j = 1; j <= 6; j++){
        if(i + j == 6) console.log(`[${i} , ${j}]`)
}
}

// 08-22
// 문자열에서 특정 문자의 인덱스(위치)를 검색하는 예 
let string = 'abcdefghi'
let search = 'g'
let index;

for(let i = 0; i < string.length; i++) {
    if(string[i]==search){
    index = i;
    break;
    }
}
console.log(index);
console.log(string.indexOf(search));
// console.log(String.prototype.indexOf);

// i를 인덱스 순서 변수로 선언하고, 문자열의 길이까지라는 조건으로 , 증감
// 만약에, 스트링의 배열 중 변수 [i]와 search의 결과가 같다면 , 
//  인덱스에 i값을 넣어라
//  그리고 if문을 탈출해라.
//  인덱스를 출력해라. 


// 08-23
// 문자열에서 특정 문자의 갯수를 세는 방법
let string = 'hello world'
let search = 'l'
let count;

for(let i = 0; i < string.length; i++) {
    if(string[i]==search) continue
    count++;
}
console.log(count);

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
// 'l'이 아니면 현지점에서 실행을 종료하고 반복문의 증감식으로 실행 흐름을 이동하고
// l 이면 count++ 가 적용된다.

let string = 'hello world'
let search = 'l'
let count;

for(let i = 0; i < string.length; i++) {
    if(string[i] === search)  count++;
}

