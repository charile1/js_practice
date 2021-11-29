// let result = 0;

// for (let x = 0; x < 101; x++) {
//     // console.log(x);
//     if (x % 3 == 0 || x % 5 == 0){
//         // console.log(x);
//         result += x //result = result + x 
//     }
// }

// console.log(result);


// let text = '';
// let count = 0;

// for (let i = 0; i < 10001; i++) {
//     text += i;
// }
// // console.log(text);
// for (let i = 0; i < text.length; i++) {
//     if (text[i] == '8'){
//         count += 1;
//     }
// }

// console.log(count);


// 최솟값 구하는 방법 

let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];

// for (let i = 0; i < sample.length; i++) {
//     if (temp < sample[i]){
//         temp = sample[i];
//     }
// }




// 두자리씩 끊어서 가져오기

let text = 'javascript';

for (let i = 1; i < text.length; i++) {
    console.log(text[i-1], text[i]);
}

// 

let value = [1, 3, 4, 8, 13, 17, 20];
let temp = value[1] - value[0]

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        console.log(value[i], value[i + 1])
    }
}