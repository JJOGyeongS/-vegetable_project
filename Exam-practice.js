// const son = 52;
// const son2 = 273;
// javob = son + son2;
// console.log(javob);

// console.log(5+3*2);
// console.log(10%5);
// console.log(7%3);

// console.log(1+2);
// console.log(1-2);
// console.log(1*2);
// console.log(1/2);
// console.log(1%2);

/***********************************************************************/

// console.log("This is 'String'");
// console.log('This is "String"');

// console.log('Assalamu Alaikum barchaga!\\\\' + 'Ishlaringiz joyidami?');

// console.log("Das" + "tur" + "lash" + "!");

/***********************************************************************/

// console.log("Assalam"[0]);
// console.log("Assalam"[1]);
// console.log("Assalam"[3]);

/***********************************************************************/

// console.log(`52 + 273 = ${52 + 273}`);
// console.log(`Hozir ${new Date().getFullYear()}-yil!`);

/***********************************************************************/

// console.log(52 <= 273);
// console.log(52 > 273);

// console.log(52 < 273);
// console.log(52 > 273);                 
//console.log("bir" > "ikki");
//console.log("하마" < "가방");            ?????????????????????????

/*
console.log("yuz" > "to'qson");
console.log("five" > "fivety");
console.log("hundred two" > "hundred"); */
// console.log("사자" > "늑대");
// console.log("모기" > "개");

/***********************************************************************/

/*
console.log(30 > 20 > 10);
console.log((30 > 20) > 10);
console.log(true > 10);
console.log(1 > 10); */

/***********************************************************************/

/*
let hours = (new Date()).getHours();

console.log(hours < 3 || 8 < hours);
console.log(3 <= hours && hours <= 8); */

/***********************************************************************/

//let pi;
//console.log(typeof(pi));

// let pi = 3.14159265;
// let radius = 10;


// console.log(`둘레: ${2 * pi * radius}`);
// console.log(`넓이: ${pi * radius * radius}`);

/***********************************************************************/

//let output = "Hello ";
//output += "world ";  //or: output = output + "world ";
//output += "!";       // same so on... output = output + "!";

//console.log(output);

/***********************************************************************/

//let number = 10;

//number++;
//console.log(number);
//number--;
//console.log(number);

/*
let number = 10;

console.log(number);
console.log(number++);
console.log(number--);
console.log(number);

let number2 = 10;

console.log(number2);
console.log(++number2);
console.log(--number2);
console.log(number2); 

let number = 10;

console.log(number);
console.log(number); number += 1;
console.log(number); number -= 1;
console.log(number);


let number = 10;

console.log(number++);
console.log(++number);
console.log(number--);
console.log(--number); 

let number = 10;

console.log(number);
number++;
number++;
console.log(number);
console.log(number);
number--;
number--;
console.log(number); */

/***********************************************************************/
/*
console.log(typeof(true));

console.log(typeof(function(){}));

console.log(typeof({}));

let alpha
console.log(typeof(alpha)); */

//let a 
//console.log(typeof(a)); //with b same result

/***********************************************************************/

// console.log(Number("52"));
// console.log(Number("52.273"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("안녕하세요"));


/*
let nan = Number("안녕하세요");

console.log(nan == nan);
console.log(nan != nan);

console.log(isNaN(nan));


let nan = Number("안녕하세요");
let undefinedVariable;

console.log(Boolean(0));
console.log(Boolean(nan));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefinedVariable));  */

/***********************************************************************/
/*
console.log(52 + 273);
console.log("52" + 273);
console.log(52 + "273");
console.log("52" + "273");

//other one
console.log("52" - 273);
console.log("52" * 273);
console.log("52" / 273);
console.log("52" % 273);  */

/***********************************************************************/
/*
let nan = Number("안녕하세요");
let undefinedVariable;

console.log(Boolean(!!0));
console.log(Boolean(!!nan));
console.log(Boolean(!!""));
console.log(Boolean(!!null));
console.log(Boolean(!!undefinedVariable)); */

/***********************************************************************/
/*
console.log(`52 == "52" : ${52 == "52"}`);
console.log(`52 === "52" : ${52 === "52"}`);
console.log();
console.log(`0 == "" : ${0 == ""}`);
console.log(`0 === "" : ${0 === ""}`); */

/***********************************************************************/
/*
const constant = "변경할 수 없어요";
constant = "";

console.log(constant); */

//other one
//const a = "처음 선언할 때 값을 할당해야 합니다";
//const b;

/************************************************************************** 3장 ************************************************************************************/

// let input = 32;

// if (input % 2 == 0) {
//     console.log("짝수입니다");
// } 

// if (input % 2 == 1) {
//     console.log("홀수입니다");
// }


// let input = 32;

// if (input % 2 == 0) {
//     console.log("짝수입니다");
// } else {
//     console.log("홀수입니다");
// }

/*******************************************************************/
/*
let date = new Date();

console.log(date.getUTCFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());


let date = new Date();

if (date.getHours() < 12) {
    console.log("오전입니다.");
}

if (12 <= date.getHours()) {
    console.log("오후입니다.");
}  */



// let date = new Date();
// if (date.getHours() < 12) {
//     console.log("오전입니다");
// } else {
//     console.log("오후입니다");
// }

/********************************************************************/

// let date = new Date();
// let hours = date.getHours();
// if (hours < 11) {
//     console.log("아침을 먹을 시간입니다.");
// } else {
//     if (hours < 15)  {
//         console.log("점심 먹을 시간입니다.");
//     }
//     else {
//     console.log("처녁 먹을 시간입니다.");
//     }
// }


// let date = new Date();
// let hours = date.getHours();
// if (hours < 11) {
//     console.log("아침을 먹을 시간입니다.");
// } else if (hours < 15)  {
//         console.log("점심 먹을 시간입니다.");
// } else {
//     console.log("처녁 먹을 시간입니다.");
// }

/********************************************************************/
/*
let input = 32;

switch (input % 2) {
    case 0:
        console.log("짝수입니다.");
        break;
    case 1:
        console.log("홀수입니다.");
        break;
}  


let date = new Date();

switch (date.getMonth() + 1) {
    case 12:
    case 1:
    case 2:
        console.log("겨울입니다.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("봄입니다.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("여름입니다.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("가을입니다.");
        break;
    default:
        console.log("데체 어떤 행성에 살고 계신가요?")
        break;
} */

/********************************************************************/
/*
let test;

if (typeof(test) != 'undefined') {
    test = "초기화_1"
}
console.log(test)

if (typeof(test) != 'undefined') {
    test = "초기화_2"
}
console.log(test)  */

/********************************************************************/
/*
const repl = require('repl');

repl.start({
    prompt: "입력_때_앞에_출력할_문자열",
    eval: (command, context, filename, callback) => {

        callback();
    }
});


const repl = require('repl');

repl.start({
    prompt: "숫자_입력> ",
    eval: (command, context, filename, callback) => {

        let number = Number(command);
    

        if(isNaN(number)) {
            console.log("숫자가 아닙니다.");
        } else {
            console.log("숫자입니다.");
        }

        callback();
    }
});  */

/************************************************************************** 4장 ************************************************************************************/
/*
yosh = Number(prompt("Yoshingizni kiriting:\n>>"));

yil = 2022 - yosh;
console.log("Siz ", yil, "-yilda tug'ilgansiz!"); */

/***********************************************************************/

/************************************************************* 5장 **********************************************************************/

// let 함수 = function () {
//     console.log("Funksiyaning birinchi qatori");
//     console.log("Funksiyaning ikkinchi qatori");
// }

// 함수();
// console.log(함수);

/*
function bir() {
    console.log("Birinchi qator");
    console.log("ikkinchi qator");
}

bir();
console.log(bir);

let ikki = () => {
    console.log("Birinchi qator");
    console.log("ikkinchi qator");
}

ikki();
console.log(ikki);   */

/***********************************************************************/
/*
function power(x) {
      return x * x;
}

console.log(power(10));
console.log(power(20)); */

/***********************************************************************/
/*
function multiply(x , y) {
    return x * y;
}

console.log(multiply(52, 273));
console.log(multiply(103, 32));  


function print(message) {
    console.log(`"${message}" deb aytdi!`);
}

print("Alhamdulillah!");
print("JavaScript is the best");  


function sum(min, max) {
    let output = 0;
    for(let i = min; i <= max; i++) {
        output += i;
    }
    return output;
}
console.log(sum(1, 100));      


function multiply(min, max) {
    let output = 1;
    for (let i = min; i <= max; i++) {
        output *= i;
    }
    return output;
}
console.log(multiply(1, 10));     */


// function print(name, count) {
//     console.log(`${name}가 ${count}개 있습니다!`);
// }

// print("바나나", 20);
// print("바나나");


// function print (name, count) {
//     if (typeof(count) == "undefined") {
//         count = 1;
//     }
//     console.log(`${name}이/가 ${count}개 있습니다!`);
// }
// print("바나나");


// function print(name, count = 1) {
//     console.log(`${name}이/가 ${count}개 있습니다!`);
// }
// print("망고");

/***********************************************************************/
/*
//bu yerda bir yozuvni 10 marotaba consolega chiqarish kodi berib o'tilgan.
function callTenTimes(callback) {
    for (let i = 0; i < 10; i++) {
        callback();
    }
}

callTenTimes(function () {
    console.log('함수 호출');   //funksiyani chaqirish degani konsol ichidagi yozuv.
});  */

/***********************************************************************/
/*
//bu yerda biz string qiymatlarni parseInt va parseFloat yordamida sanoq songa(Number) aylantirib olyapmiz.
let inputA = "52";
let inputB = "52.273";
let inputC = "1401동";

console.log(parseInt(inputA));

console.log(parseInt(inputB));   //bu yerda int bo'gani uchun javob qoldiqsiz tasvirlanadi.
console.log(parseFloat(inputB))

console.log(parseInt(inputC));


//bu kod yordamida soniya sanovchi funksiyani consolega chiqarishimiz mumkin bo'ladi.
setTimeout(function () {            //setTimeout - shunchaki oradan 1soniya o'tganini xabarini beruvchi funksiya
    console.log("1초가 지났습니다.");   
}, 1000); 

setInterval(function () {      //setInterval - soniyani jonli efirda sanab boradigan funksiya.
    console.log("1초 마다 호출됩니다.");
}, 1000);   


//bu yerda ma'lum bir vaqt berib, setTimeout - clearInterval(id) orqali ma'lum vaqtgacha soniya ishlashini kirgizyapmiz (bu kodda 3000 milisoniya).
let id = setInterval(function () {
    console.log("출력합니다.");
}, 1000);

setTimeout(function () {

    clearInterval(id);      //clearInterval(id) - Muayyan bir vaqtda bajarilishi kerak bo'lgan funktsiya chaqiruvini belgilaydi.
}, 3000);   */

/***********************************************************************/

//bu kodda qaysi o'zgaruvchi birinchi bo'lib o'qilishi ko'rsatilmoqda.
// let 변수;
// 변수 = 10;
// 변수 = 20;            //consoleda aynan 20 javobi chiqadi chunki kod doim tepadan pastga qarab o'qiladi/ishledi.
// console.log(변수);

/*
//bu yerdaham yuqoridagi holatni faqat function tarzida kuzatishimiz mumkin.
let 함수;
함수 = function () {console.log("첫 번째 함수."); };
함수 = function () {console.log("두 번째 함수."); };     //bu qiymat aynan kod tepadan pastga qarab o'qilgani uchun olinyapti.

함수();       */


//bu holatda birinchi 함수 dan boshlangan kod terminalga chiqadi, sababi bu yerda function holati shunga mos.
// 함수 = function () {console.log("첫 번째 함수."); };      //bu kod birinchi chiqadi chunki 2-koddan function tomonidan farqi bor.
// function 함수() {console.log("두 번째 함수."); };       //bu kod terminalda birinchi chiqa olmaydi.

// 함수();          //javob: 첫 번째 함수.

/*
함수 = function () {console.log("첫 번째 함수."); }; 
함수 = function () {console.log("두 번째 함수."); }; 

함수();


function 함수() {console.log("1"); };
function 함수() {console.log("2"); };

함수();

//ichkaridagi 'this' kalit so'zini ishlashi(har xil global kabi yozuvlar chiqib keladi).
(function () {
    console.log(this);
})(); 

//this kalit so'zining bu kod holatidagi ishlashi(terminal javobi:{}).
(() => {
    console.log(this);
})();   */

// let output = '';

// for(let i = 0; i < 10; i++) {
//     for(let j = 0; j < i +1; j++) {
//         output += '*';
//     }
//     output += '\n';
// }
// console.log(output);

/***********************************************************************/