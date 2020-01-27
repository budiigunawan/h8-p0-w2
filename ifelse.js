//input nama dan peran
var nama = 'Budi';
var peran = 'Penyihir';

//jika nama kosong
if (nama == '') {
    console.log('Nama harus diisi!');
}
else {
    //jika nama ada dan peran kosong
    if (peran == '') {
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
    }
    //jika nama ada dan peran Ksatria
    else if (peran == 'Ksatria') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }
    //jika nama ada dan peran Tabib
    else if (peran == 'Tabib') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
    }
    //jika nama ada dan peran Penyihir
    else if (peran == 'Penyihir') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    }
}
