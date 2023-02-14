// let ism = 'Anvar';
// alert("I am an alert box!");
// console.log(`Salom ${ism}`)

// confirm('Siz registratsiyadan qilishga roszimisiz');

// let person = prompt("Please enter your name", "Please enter your name");
// let age = prompt("Please enter your age", "Please enter your age");
// let job = prompt("Please enter your job", "Please enter your job" );


// console.log(`User info : \nName: ${person} \nAge: ${age} \nJob: ${job}`);

// cltr + shift + d

// 2 talik == faqat value ni tekshiradi typeni yoq

let gender = prompt('Enter your gender');
let age = prompt('Enter your gender');

if (gender === 'Erkak' && age >= 20 ) {
    console.log(`Siz ${gender} kishisiz, siz ${age} yoshdasiz va siz qurilishda ishlasangiz bo'ladi`);
}

else if (gender === 'Erkak' && age < 20 ) {
    console.log(`O'qing bolam`);
}

if (gender === 'Ayol' && age >= 20 ) {
    console.log(`Siz ${gender} kishisiz, siz ${age} yoshdasiz va siz maktabda ishlasangiz bo'ladi`);
}

else if (gender === 'Erkak' && age < 20 ) {
    console.log(`O'qing bolam`);
}

else {
  console.log(`To'g'ri ma'lumot kiriting`);
}



// Past saviyali tillarda kod yozish qiyin lkn brauzerni o'qishi tez 
// var kalit so'zi bn ochilgan o'zgaruvchilar redelear bola oladi ya'ni qayta elon qilsa boladi
// var da tepadan chaqirsa boladi 
// o'zgaruvchi ochilgan lkn unga qiymat berilmagan bolsa undefined boladi
// declared deb error bersa bu ozgaruvchi nomi bn ozgaruvchi ochib bolingan degan yozuv chiqadi
// const da ozgaruvchi ochiliwi bn qiymat beriw wart
//  const da bir marta ochilgan ozgaruvchi qiymatini ozgartirib bolmaydi
// 2xil error bor reference and type error
//  ozgarmas ozgaruvchiga qiymat bersak type error boladi
// ozrgaruvchidan oldin log bn chaqirsak bu referenceerrror
// temprol denzone (vaqtinchalik olik zona) bu let bn constda boladi yani ulani tepadan chaqirib bomiydi 
// hoisting bu - ozgaruvcha elon qilingandan oldin tepadan access oliw
// reserved keyword w3school dan koriw
// primitive tip da faqat 1ta turdagi qiymat ushab turiw mkn
// reference tip ozgaruvchini qiymatidan qati nazar hohlagancha qiymat ushab turiw mkn


