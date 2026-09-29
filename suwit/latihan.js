let tanya = true;
while (tanya){
    let p = prompt ('pilih : gunting, batu ,kertas');
    let comp = Math.random ();
    if (comp < 0.34){
        comp = 'gunting';
    }else if ( comp >= 0.34 && comp < 0.67){
        comp = 'batu';
    }else{
        comp = 'kertas';
    }
    
    let hasil = '';
    if (p == comp){
        hasil = 'seri';
    }else if (p == 'gunting'){
        hasil = (comp == 'kertas') ? 'menang' : 'kalah';
    }else if (p == 'batu'){
        hasil = (comp == 'gunting') ? 'menang' : 'kalah';
    }else if (p == 'kertas'){
        hasil = (comp == 'batu') ? 'menang' : 'kalah'
    }else{
        hasil = 'kamu salah memilih';
    }

    alert ('kamu memillih: ' + p +'\nlawanmu memilih: ' + comp +'\nhasilnya adalah:'  + hasil);
    
    tanya = confirm ('lagi?');


}
alert ( 'terimakasih telah bermain (:');