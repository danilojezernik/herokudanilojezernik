import {Plosca} from "@/components/Games/TicTacToe/domain.js";

export default {
    data() {
        return {
            krizec: 0,
            krozec: 0,
            plosca: new Plosca(3, 3)
        }
    },
    methods: {
        reset() {
            this.krozec = 0;
            this.krizec = 0;
            this.plosca.reset()
        },
        dodajZeton(x, y) {
            console.log("test")
            this.plosca.dodajZeton(x, y)
            let simbol = this.plosca.zmaga()



            if(simbol !== null) {
                this.reset();

                if(simbol === `x`) {
                    this.krizec ++
                } else {
                    this.krozec ++
                }
            }
        }
    }
}