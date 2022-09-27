function splite(str,delim) {
    let result="";
    let check;
    for (let i = 0; i < str.length; i++) {
        check=false
        for (let j = 0; j < delim.length; j++) {
            if (str[i]==delim[j]) check=true
        }
        if (!check) {
            result+=str[i]
        }
    }
    return result
}

// console.log(splite("Mi%hr$an$  H,ak$ob$$$$ya%n","$,%"));