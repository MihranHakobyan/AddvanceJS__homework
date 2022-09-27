function indexOf(str,char) {
    for (let i = 0; i <str.length ; i++) {
        if (str[i]==char){
            return i
        }
    }
    return -1
}

// console.log(indexOf("sddsa","h")) //erb chka tary
// console.log(indexOf("sddsa","a")) //erb ka tary