// 1.soru
dolap = ["Shirt", "Pant","TShirt"];

let son = dolap.pop();
console.log(son); 

// 2.soru
let element = dolap.shift();
let add = dolap.unshift("Hat");
console.log(dolap);

// 3.soru
let check = Array.isArray(dolap);
console.log(check);

// 4.soru

let varYok = dolap.find((element) => element === "Pant");
console.log(varYok);


if(dolap.indexOf("Pant") !== -1){
    console.log('var');
}else{
    console.log('yok');
}

let sure = dolap.includes("Pant");
if(sure === true){
    console.log('var');
}else{
    console.log('yok');
}

// 5.soru

const sum = (array) =>
array.map((item) => item.length).reduce((acc, cur) => acc + cur);
console.log(sum(dolap));

// 6.soru

let Upper = [];
dolap.forEach(function (e){
    Upper.push(e.toUpperCase())
})
console.log(Upper);

/*let Upper = dolap.map(function(e) { return e.toUpperCase(); });
console.log(Upper);*/

// 7.soru

const Dolap = dolap.map((item, key) => {
return {
  key,item,};
});
console.log(Dolap);

// 8.soru

/* Slice, Başlangıç ve bitiş indexsi diye iki değişken alır. Verilen aralıktaki elemanları kesmek için kullanılır. yeni array oluşturur.
Splice, sonuç olarak yeni bir array döndürür. üç parametre alır :  Başlangıç konumu, kaldırılma sayısı ve eklenecek öğe sayısı */

// yeni bölüm

const arr = [1,2,3,4,5,6,7,7,8,6,10];

// 1.soru


const repeater = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !repeater.includes(arr[i])) {
      repeater.push(arr[i]);
      break;}}}
console.log(repeater); 

// 2.soru

const newArr = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(newArr); 

const newArr2 = [...new Set(arr)];

console.log(newArr2);

// 3.soru

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(max); 
console.log(min); 