// for (var i = 0; i < 4; i++) {
//     var temp = '';
//     for (var j = 0; j <= i; j++) {
//        temp += '*';
//     }
//     console.log(temp);
// }

// for (var i = 3; i > 0; i--) {
//     var temp2 = '';
//     for (var j = 0; j < i; j++) {
//         temp2 += '*';
//     }
//     console.log(temp2);
// }


var n = 9;

for (var i = 0; i < n; i++) {
    var hasil = '';
    if (i < Math.ceil(n/2)) {
        for (var j = 0; j <= i; j++) {
            hasil += '*';
        }
    }
    else {
        for (var k = n; k > i; k--)
        {
            hasil += '*';
        }
    }
console.log(hasil);
}