export class Plosca {
    constructor(w, h) {
        this.h = h;
        this.w = w;
        this.zetoni = [];
    }

    dodajZeton(x, y) {
        let zeton;
        if (this.zetoni.length % 2 === 0) {
            zeton = new Zeton("x", x, y)
        } else {
            zeton = new Zeton("o", x, y)
        }
        this.zetoni.push(zeton)
    }

    reset() {
        this.zetoni = [];
    }

    zmaga() {

        for (let y = 0; y < this.h; y++) {
            let simbol = this.getZeton(0, y).simbol
            if (simbol !== null) {
                let zmagal = true;
                for (let x = 0; x < this.w; x++) {
                    let zeton = this.getZeton(x, y)
                    if (simbol !== zeton.simbol) {
                        zmagal = false;
                        break;
                    }
                } if(zmagal === true) {
                    return simbol;
                }
            }
        }

        for (let x = 0; x < this.w; x++) {
            let simbol = this.getZeton(x, 0).simbol
            if (simbol !== null) {
                let zmagal = true;
                for (let y = 0; y < this.h; y++) {
                    let zeton = this.getZeton(x, y)

                    if (simbol !== zeton.simbol) {
                        zmagal = false;
                        break;
                    }
                } if(zmagal === true) {
                    return simbol;
                }
            }
        }
        return null;
    }

    getZeton(x, y) {
        for (const zeton of this.zetoni) {
            if (zeton.x === x && zeton.y === y) {
                return zeton;
            }
        }
        return {simbol: null};
    }
}

export class Zeton {
    constructor(simbol, x, y) {
        this.simbol = simbol;
        this.x = x;
        this.y = y;
    }
}

