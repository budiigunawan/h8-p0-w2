/// soal 1///
var rows1 = 5;

for (var i = 0; i < rows1; i++) {
    console.log('*');
}

/// soal 2 ///
console.log(" ");
var rows2 = 5;

for (var j = 0; j < rows2; j++) {
    var temp = '';
    for (var k = 0; k < rows2; k++) {
        temp += '*';
    }
    console.log(temp);
}

/// soal 3 ///
console.log(" ");
var rows3 = 5;

for (var l = 0; l < rows3; l++) {
    var hasil = '';
    for (var m = 0; m <= l; m++) {
        hasil += '*';
    }
    console.log(hasil);
}