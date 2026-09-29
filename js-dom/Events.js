// const p1 = document.querySelector('.p1');
// p1.onclick = ubahWarna;

// function ubahWarna (){
//     p1.style.backgroundColor = 'lightblue';
// }


// // .addEventListener
// const li = document.querySelector('section#b ul li:nth-child(2)');
// li.addEventListener ('click',function (){
//     alert ('oke')
//     alert ('gass')
// })

// const p2 = document.querySelector('section#b ul li:nth-child(2)');
// p2.addEventListener ('click',function (){
//     alert ('oke')
//     alert ('gass')
// })

const p3 = document.querySelector('.p3');
p3.addEventListener ('click' , function () {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener ('click' , function () {
    p3.style.color = 'red';
});

const p4 = document.querySelector ('section#b p');
p4.addEventListener ('click',function (){
    const ul = document.querySelector ('section#b ul');
    const libaru = document.createElement ('li');
    const teksli = document.createTextNode ('item baru');
    libaru.appendChild (teksli);
    ul.appendChild (libaru);
});


const p1 = document.querySelector ()