export class Plosca {
    // v konstruktorju so informacije, ki jih potrebujemo za ustvarjanje plošče
    constructor(w, h) {
        this.h = h;
        this.w = w;
        this.zetoni = [];
    }

    dodajZeton(x, y) {
        let zeton;
        if (this.zetoni.length % 2 === 0) {
            zeton = new Zeton("X", x, y)
        } else {
            zeton = new Zeton("O", x, y)
        }
        this.zetoni.push(zeton)

    }

    reset() {
        this.zetoni = [];
    }

    zmaga() {
    // horizontala
        for (let y = 0; y < this.h; y++) {
            let simbol = this.getZeton(0, y).simbol

            if (simbol !== null) {
                // zmagal je
                let zmagal = true;
                for (let x = 0; x < this.w; x++) {
                    let zeton = this.getZeton(x, y)
                    // če pridema do pogoja ko ni zmagal potem je zmaga false
                    if (simbol !== zeton.simbol) {
                        zmagal = false;
                        break;
                    }
                }
                if (zmagal === true) {
                    return simbol;
                }
            }
        }
    //vertikala
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
                }
                if (zmagal === true) {
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
    //simbol je x ali o (glej dodajZeton())
    constructor(simbol, x, y) {
        this.simbol = simbol;
        this.x = x;
        this.y = y;
    }
}

