/// soal pertama///
console.log('LOOPING PERTAMA');
var i = 2;

while (i <= 20) {
    console.log(i + ' - I love coding');
    i += 2;
}

console.log('LOOPING KEDUA');
var j = 20;
while (j > 0) {
    console.log(j + ' - I will become fullstack developer');
    j -= 2;
}

///soal kedua///
console.log('');
console.log('LOOPING PERTAMA');
for (var k = 1; k <= 20; k++) {
    console.log(k + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (var l = 20; l > 0; l--) {
    console.log(l + ' - I will become fullstack developer');
}

///soal ketiga///
console.log('');
for (var a = 1; a <= 100; a++) {
    if (a % 2 != 0) {
        console.log('GANJIL');
    }
    else {
        console.log('GENAP');
    }
}

console.log('');
for (var b = 1; b <= 100; b += 2) {
    if (b % 3 == 0) {
        console.log(b + ' KELIPATAN 3');
    }
}

console.log('');
for (var c = 1; c <= 100; c += 5) {
    if (c % 6 == 0) {
        console.log(c + ' KELIPATAN 6');
    }
}

console.log('');
for (var d = 1; d <= 100; d += 9) {
    if (d % 10 == 0) {
        console.log(d + ' KELIPATAN 10');
    }
}