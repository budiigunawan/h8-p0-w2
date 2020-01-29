var string = 'abcdefghi';

for (var i = 0; i < 3; i++) {
    var hasil = '';
    for (var j =0; j < 3; j++) {
        hasil += string[ 3 * i + j];
    }
    console.log(hasil);
}