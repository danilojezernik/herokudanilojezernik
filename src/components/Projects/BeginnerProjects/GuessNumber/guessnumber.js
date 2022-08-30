let randomNumber = Math.floor(Math.random() * 50) + 1;

export default {
    data() {
        return {
            showModal: false,
            stevilo: ``,
            rezultat: ``,
            sporocilo: ``,
            pokazi: false,
            zg: []
        }
    },
    methods: {
        vnesi() {
            this.rezultat = this.stevilo;
            console.log(randomNumber)

            if (this.rezultat > randomNumber) {
                this.stevilo = ``
                console.log(randomNumber)
                this.sporocilo = "The number is too large. Choose a smaller number!"
            } else if (this.rezultat < randomNumber) {
                this.stevilo = ``
                console.log(randomNumber)
                this.sporocilo = "The number is too small. Choose a larger number!"
            }
            if (this.rezultat == randomNumber) {
                this.stevilo = ``
                this.ponovnaIgra()
                this.zg.push(this.rezultat)
                this.pokazi = true
                this.sporocilo = "Awesome, you guessed a number and won!! Good Job"
            }

            if (this.rezultat > 50 || this.rezultat < 1) {
                this.stevilo = ``
                this.sporocilo = "Please, chose a number between 1 - 50!"
            }

        },
        ponovnaIgra() {
            this.stevilo = ``
            this.sporocilo = ``
            randomNumber = Math.floor(Math.random() * 50) + 1
        },
        resetVsega() {
            this.stevilo = ``
            this.sporocilo = ``
            this.rezultat = ``
            this.pokazi = false
            this.zg = []

        }
    }
}



