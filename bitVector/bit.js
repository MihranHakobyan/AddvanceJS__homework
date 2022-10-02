class BitVector {
    vector = [];

    set(pos, resalt) {
        let pos1 = Math.floor(pos / 32);
        let mask;

        if ((pos + 1) % 32 === 0 && pos !== 0) {
            mask = Math.pow(2, 31) - 1;
        } else {
            mask = 0b1 << pos % 32;
        }
        ;

        for (let i = 0; i <= pos; i++) {
            if (this.vector.length <= pos1) {
                this.vector.push(0b0);
            } else {
                break;
            }
        }
        if (resalt) {
            this.vector[pos1] &= ~mask;
        } else {
            this.vector[pos1] |= mask;
        }
        return this.vector;
    }

    get(pos) {
        let pos1 = Math.floor(pos / 32);
        if( 0b1<<pos%32&this.vector[pos1] ){
            return 1
        }
        return 0
    }
}

let obj = new BitVector();
console.log(obj.set(100, false));
console.log(obj.get(100));
