//input nama dan peran
var nama = 'Budi';
var peran = 'Penyihir';

//jika nama ada dan peran kosong
if (nama !== '' && peran === '') {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}
//jika nama dan peran ada
else if (nama && peran) {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    //jika peran Ksatria
    if (peran == 'Ksatria'){
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }
    //jika peran Tabib
    else if (peran == 'Tabib') {
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
    }
    //jika peran Penyihir
    else if (peran == 'Penyihir') {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    }
    //jiks peran yang diinputkan bukan Ksatria, Tabib, atau Penyihir
    else {
        console.log('Mohon input peran dengan Ksatria, Tabib, atau Penyihir');
    }
}
//jika nama kosong
else {
    console.log('Nama harus diisi!');
}
