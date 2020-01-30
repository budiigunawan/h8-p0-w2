function xo(str) {
    var jumlahX = 0;
    var jumlahO = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            jumlahX += 1;
        }
        else {
            jumlahO += 1;
        }
    }

    if (jumlahX == jumlahO) {
        return true;
    }
    else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true