// document.getElementById()   ->mengembalikan Element
const jdul = document.getElementById('judul');
jdul.style.backgroundColor = 'red';
jdul.style.color = '#fff';
jdul.innerHTML = 'Jarwo'

// document.getElementsByTagName ()   -> mengembalikan HTMLCollection
const P = document.getElementsByTagName('p');
// P[0].style.color ='red';
// P[1].style.color ='yellow';
// P[2].style.color ='blue';
// P[3].style.color ='green';
for (let i = 0 ; i < P.length; i++){
    P[i].style.color ='red';
    P[i].style.backgroundColor = 'blue'
}
const h1 =document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px'

// document.getElemetsByClassName ()     -> mengembalikan HTMLCollection
const p1 = document.getElementsByClassName ('p1');
p1[0].innerHTML = 'Cihuy';



// document.querySelector()     ->mengembalikan element
const p4 = document.querySelector('#b p');
p4.style.backgroundColor = 'white';

const li2 = document.querySelector ('section#b ul li:nth-child(2)');
li2.style.color = 'blue';



// document.querySelectorAll()    -> mengembalikan nodeList
const p=document.querySelectorAll ('p');
for (let i = 0 ; i < P.length;i ++){
    p[i].style.color = 'grey';
}
// p[0].style.color = 'red';
// p[1].style.color = 'yellow';
// p[2].style.color = 'blue';
// p[3].style.color = 'green';




// const sectionb = document.getElementById('b');
// const p4 = sectionb.querySelector('p');
// p4.style.color= 'orange';

// const sectionb = document.querySelector('section#b');
// const p4 = sectionb.getElementsByTagName('p')[0];
// p4.style.color= 'orange';