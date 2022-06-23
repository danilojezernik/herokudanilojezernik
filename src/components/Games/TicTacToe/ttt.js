import {Plosca} from "@/components/Games/TicTacToe/domain.js";

export default {
    data() {
        return {
            krizec: 0,
            krozec: 0,
            plosca: new Plosca(4, 4)
            // informacija v konstruktorju je w in h!
        }
    },
    methods: {
        resetAll() {
            this.krizec = 0;
            this.krozec = 0;
            this.plosca.reset()
        },
        reset() {
            this.plosca.reset()
        },
        dodajZeton(x, y) {
            console.log("test")
            this.plosca.dodajZeton(x, y)
            let simbol = this.plosca.zmaga()

            if (simbol !== null) {
                this.reset();

                if (simbol === `X`) {
                    this.krizec++
                } else {
                    this.krozec++
                }
            }
        }
    }
}