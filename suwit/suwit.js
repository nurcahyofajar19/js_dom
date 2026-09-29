function pilihanKomputer(){
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp <0.68) return 'semut';
    return 'orang';
}

function hasil (p,comp){
    let hasil = '';
    if( p == comp) return 'seri';
    if (p == 'gajah') return ( comp == 'orang') ? 'menang' : 'kalah'; 
    if (p == 'semut') return ( comp == 'orang') ? 'menang' : 'kalah' ;
    if ( p == 'orang') return ( comp =='semut')? 'menang' : 'kalah';

}

const pGajah = document.querySelector ()