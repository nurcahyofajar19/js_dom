function getPilihanComputer(){
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp <0.68) return 'semut';
    return 'orang';
}

function getHasil (p,comp){
    let hasil = '';
    if( p == comp) return 'seri';
    if (p == 'gajah') return ( comp == 'orang') ? 'menang' : 'kalah'; 
    if (p == 'semut') return ( comp == 'gajah') ? 'menang' : 'kalah';
    if ( p == 'orang') return ( comp =='semut')? 'menang' : 'kalah';

}


function putar(){
    const imgComputer = document.querySelector ('.img-computer'); 
    const gambar = ['gajah', 'semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime(); 
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute ('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length){
            i = 0
        }
    },100)
}



const pilihan = document.querySelectorAll ('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click' , function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil (pilihanPlayer,pilihanComputer);
        putar();

        setTimeout(function(){
        const imgComputer = document.querySelector ('.img-computer');
        imgComputer.setAttribute('src' , 'img/' + pilihanComputer + '.png');

        const info = document.querySelector ('.info');
        info.innerHTML = hasil;
        
        if (hasil == 'menang'){
            skorP++;
            tSkorP.textContent = skorP;
        }else if (hasil == 'kalah'){
            skorC++;
            tSkorC.textContent = skorC;
        }

    },1000);
    });
});

let skorP = 0;
let skorC = 0;

const tSkorP = document.querySelector ('.skor-Player');
const tSkorC = document.querySelector ('.skor-Computer');









// const pGajah =  document.querySelector ('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil (pilihanComputer,pilihanPlayer);

//     const imgComputer = document.querySelector ('.img-computer');
//     imgComputer.setAttribute ('src', 'img/' + pilihanComputer + '.png');
    

//     const info = document.querySelector ('.info')
//     info.innerHTML = hasil;
// });

// const pSemut =  document.querySelector ('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil (pilihanComputer,pilihanPlayer);

//     const imgComputer = document.querySelector ('.img-computer');
//     imgComputer.setAttribute ('src', 'img/' + pilihanComputer + '.png');
    

//     const info = document.querySelector ('.info')
//     info.innerHTML = hasil;
// });

// const pOrang =  document.querySelector ('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil (pilihanComputer,pilihanPlayer);

//     const imgComputer = document.querySelector ('.img-computer');
//     imgComputer.setAttribute ('src', 'img/' + pilihanComputer + '.png');
    

//     const info = document.querySelector ('.info')
//     info.innerHTML = hasil;
// });