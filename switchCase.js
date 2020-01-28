//input tanggal, bulan, dan tahun
var tanggal = 17; // assign variabel tanggal dengan angka antara 1 - 31
var bulan = 8; // assign variabel bulan dengan angka antara 1 - 12
var tahun = 1945; // assign nilai variabel tahun dengan angka antara 1900 - 2200)

//merubah bulan yang semula angka menjadi nama bulan dengan menggunakan switch-case
switch (bulan) {
    case 1 :
        bulan = 'Januari';
        break;
    case 2 :
        bulan = 'Februari';
        break;
    case 3 :
        bulan = 'Maret';
        break;
    case 4 :
        bulan = 'April';
        break;
    case 5 :
        bulan = 'Mei';
        break;
    case 6 :
        bulan = 'Juni';
        break;
    case 7 :
        bulan = 'Juli';
        break;
    case 8  :
        bulan = 'Agustus';
        break;
    case 9 :
        bulan = 'September';
        break;
    case 10 :
        bulan = 'Oktober';
        break;
    case 11 :
        bulan = 'November';
        break;
    case 12 :
        bulan = 'Desember';
        break;
    default:
        console.log('Periksa kembali input bulan Anda');
        break;
}

//menampilkan susunan tanggal, nama bulan, tahun
console.log(`${tanggal} ${bulan} ${tahun}`);

