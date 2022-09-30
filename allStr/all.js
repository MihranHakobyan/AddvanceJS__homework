const fs = require('fs');
const ascii = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

let last=''
const str = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
for (let i = 0; i < 36; i++) {
    str[0] = ascii[i];

    for (let j = 0; j < 36; j++) {
        str[1] = ascii[j];
        for (let a = 0; a < 36; a++) {
            str[2] = ascii[a];
            for (let b = 0; b < 36; b++) {
                str[3] = ascii[b];
                for (let c = 0; c < 36; c++) {
                    str[4] = ascii[c];
                    for (let d = 0; d < 36; d++) {
                        str[5] = ascii[d];
                        for (let f = 0; f < 36; f++) {
                            str[6] = ascii[f];
                            for (let h = 0; h < 36; h++) {
                                str[7] = ascii[h];
                                for (let k = 0; k < 36; k++) {
                                    str[8] = ascii[k];
                                    for (let l = 0; l < 36; l++) {
                                        str[9] = ascii[l];
                                        for (let m = 0; m < 36; m++) {
                                            str[10] = ascii[m];
                                            for (let n = 0; n < 36; n++) {
                                                str[11] = ascii[n];
                                                for (let o = 0; o < 36; o++) {
                                                    str[12] = ascii[o];
                                                    for (let p = 0; p < 36; p++) {
                                                        str[13] = ascii[p];
                                                        for (let q = 0; q < 36; q++) {
                                                            str[14] = ascii[q];
                                                            for (let r = 0; r < 36; r++) {
                                                                str[15] = ascii[r];
                                                                fs.appendFileSync('file.txt',str.join('')+'\n')
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}