import moment from 'moment';

export default {
    name: 'my-tour',
    data() {
        return {
            vrednost: ``,

            prostornina: ``,
            dolzina: ``,
            cas: ``,
            masa: ``,
            temp: ``,
            hitrost: ``,

            zgodovina: [],
            pokaziIzbris: false,
            siGumbi: {
                useKeyboardNavigation: false,
                labels: {
                    buttonSkip: 'Skip Tour',
                    buttonPrevious: 'Back',
                    buttonNext: 'Forward',
                    buttonStop: 'Finish'
                }
            },
            koraki: [
                {
                    target: '[data-v-step="korak-zacetek"]',
                    header: {
                        title: 'Start converting units',
                    },
                    content: `This converter is ment to help you <strong>convert units</strong> faster!`
                },
                {
                    target: '[data-v-step="korak-2"]',
                    params: {
                        placement: 'right'
                    },
                    content: 'Showing a value that you have entered'
                },
                {
                    target: '[data-v-step="korak-3"]',
                    content: 'Input a number that you want to convert'
                },
                {
                    target: '[data-v-step="korak-4"]',
                    header: {
                        title: 'Chose your option',
                    },
                    params: {
                        placement: 'right'
                    },
                    content: 'Chose from various converting options'
                },
                {
                    target: '[data-v-step="korak-zadnji"]',
                    content: '<strong>History of convertions</strong><br> Here you can see a history of convertions and also what time have you did the convertion',
                    params: {
                        placement: 'top'
                    }
                }
            ]
        }
    },
    methods: {
        steviloZpiko(x) {
            let parts = x.toString().split(".");
            parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
            return parts.join(",");
        },
        ponastavitev() {
            this.dolzina = ``
            this.prostornina = ``
            this.masa = ``
            this.temp = ``
            this.cas = ``
            this.hitrost= ``
            this.pokaziIzbris = true
        },
        datum() {
            return moment().startOf('seconds').fromNow();
        },
        // PROSTORNINA
        liter() {
            this.vrednost = parseFloat(this.prostornina) * 10;
            this.zgodovina.unshift((`${this.steviloZpiko(this.prostornina)} ` + `l = `) + this.steviloZpiko(this.vrednost) + ` dl`)
            this.ponastavitev()
        },
        deciliter() {
            this.vrednost = parseFloat(this.prostornina) / 10;
            this.zgodovina.unshift((`${this.steviloZpiko(this.prostornina)} ` + `dl = `) + this.steviloZpiko(this.vrednost) + ` l`)
            this.ponastavitev()
        },
        deci() {
            this.vrednost = parseFloat(this.prostornina) * 100;
            this.zgodovina.unshift((`${this.steviloZpiko(this.prostornina)} ` + `dl = `) + this.steviloZpiko(this.vrednost) + ` ml`)
            this.ponastavitev()
        },
        mili() {
            this.vrednost = parseFloat(this.prostornina) / 100;
            this.zgodovina.unshift((`${this.steviloZpiko(this.prostornina)} ` + `ml = `) + this.steviloZpiko(this.vrednost) + ` dl`)
            this.ponastavitev()
        },
        // TEMPERATIRA
        celzija() {
            this.vrednost = parseFloat(this.temp) * 1.8 + 32;
            this.zgodovina.unshift((`${this.steviloZpiko(this.temp)} ` + `°C = `) + this.steviloZpiko(this.vrednost.toFixed(1)) + ` °F`)
            this.ponastavitev()
        },
        farenheight() {
            this.vrednost = (parseFloat(this.temp) - 32) * (5/9) ;
            this.zgodovina.unshift((`${this.steviloZpiko(this.temp)} ` + `°F = `) + this.steviloZpiko(this.vrednost.toFixed(3)) + ` °C`)
            this.ponastavitev()
        },
        // DOLŽINA
        meter() {
            this.vrednost = parseFloat(this.dolzina) / 100;
            this.zgodovina.unshift((`${this.steviloZpiko(this.dolzina)} ` + `cm = `) + this.steviloZpiko(this.vrednost) + ` m`)
            this.ponastavitev()
        },
        centimeter() {
            this.vrednost = parseFloat(this.dolzina) * 100;
            this.zgodovina.unshift((`${this.steviloZpiko(this.dolzina)} ` + `m = `) + this.steviloZpiko(this.vrednost) + ` cm`)
            this.ponastavitev()
        },
        centi() {
            this.vrednost = parseFloat(this.dolzina) * 10;
            this.zgodovina.unshift((`${this.steviloZpiko(this.dolzina)} ` + `cm = `) + this.steviloZpiko(this.vrednost) + ` mm`)
            this.ponastavitev()
        },
        milimeter() {
            this.vrednost = parseFloat(this.dolzina) / 10;
            this.zgodovina.unshift((`${this.steviloZpiko(this.dolzina)} ` + `mm = `) + this.steviloZpiko(this.vrednost) + ` cm`)
            this.ponastavitev()
        },
        kilometer() {
            this.vrednost = parseFloat(this.dolzina) / 0.62137;
            this.zgodovina.unshift((`${this.steviloZpiko(this.dolzina)} ` + `km = `) + this.steviloZpiko(this.vrednost.toFixed(3)) + ` milja`)
            this.ponastavitev()
        },
        milja() {
            this.vrednost = parseFloat(this.dolzina) * 0.62137;
            this.zgodovina.unshift((`${this.steviloZpiko(this.dolzina)} ` + `milja = `) + this.steviloZpiko(this.vrednost.toFixed(3)) + ` km`)
            this.ponastavitev()
        },
        // HITROST
        kmnamin(){
            this.vrednost = parseFloat(this.hitrost) / 3.6;
            this.zgodovina.unshift((`${this.steviloZpiko(this.hitrost)} ` + `km/h = `) + this.steviloZpiko(this.vrednost.toFixed(3)) + ` m/s`)
            this.ponastavitev()
        },
        minnasek(){
            this.vrednost = parseFloat(this.hitrost) * 3.6;
            this.zgodovina.unshift((`${this.steviloZpiko(this.hitrost)} ` + `m/s = `) + this.steviloZpiko(this.vrednost.toFixed(2)) + ` km/h`)
            this.ponastavitev()
        },
        hitrostzvoka(){
            this.vrednost = parseFloat(this.hitrost) / 1225.044;
            this.zgodovina.unshift((`${this.steviloZpiko(this.hitrost)} ` + `km/h = `) + this.steviloZpiko(this.vrednost.toFixed(6)) + ` Mach`)
            this.ponastavitev()
        },
        hitrostzvokakm(){
            this.vrednost = parseFloat(this.hitrost) * 1225.044;
            this.zgodovina.unshift((`${this.steviloZpiko(this.hitrost)} ` + `Mach = `) + this.steviloZpiko(this.vrednost.toFixed(0)) + ` km/h`)
            this.ponastavitev()
        },
        svetlobaM(){
            this.vrednost = parseFloat(this.hitrost) / 880991.08995269;
            this.zgodovina.unshift((`${this.steviloZpiko(this.hitrost)} ` + `Mach = `) + this.steviloZpiko(this.vrednost.toFixed(10)) + ` c`)
            this.ponastavitev()
        },
        Msvetloba(){
            this.vrednost = parseFloat(this.hitrost) * 880991.08995269;
            this.zgodovina.unshift((`${this.steviloZpiko(this.hitrost)} ` + `c = `) + this.steviloZpiko(this.vrednost.toFixed(5)) + ` Mach`)
            this.ponastavitev()
        },

        // ČAS
        sekunde() {
            this.vrednost = parseFloat(this.cas) / 60;
            this.zgodovina.unshift((`${this.steviloZpiko(this.cas)} ` + `sek = `) + this.steviloZpiko(this.vrednost.toFixed(2)) + ` min`)
            this.ponastavitev()
        },
        minute() {
            this.vrednost = parseFloat(this.cas) * 60;
            this.zgodovina.unshift((`${this.steviloZpiko(this.cas)} ` + `min = `) + this.steviloZpiko(this.vrednost.toFixed(0)) + ` sek`)
            this.ponastavitev()
        },
        desetletje() {
            this.vrednost = parseFloat(this.cas) / 315569520;
            this.zgodovina.unshift((`${this.steviloZpiko(this.cas)} ` + `sek = `) + this.steviloZpiko(this.vrednost.toFixed(10)) + ` Desetletje`)
            this.ponastavitev()
        },
        sekundedesetletje() {
            this.vrednost = parseFloat(this.cas) * 315569520;
            this.zgodovina.unshift((`${this.steviloZpiko(this.cas)} ` + `Desetletje = `) + this.steviloZpiko(this.vrednost.toFixed(0)) + ` sek`)
            this.ponastavitev()
        },
        leto() {
            this.vrednost = parseFloat(this.cas) / 31556952;
            this.zgodovina.unshift((`${this.steviloZpiko(this.cas)} ` + `sek = `) + this.steviloZpiko(this.vrednost.toFixed(12)) + ` Leto`)
            this.ponastavitev()
        },
        letosek() {
            this.vrednost = parseFloat(this.cas) * 31556952;
            this.zgodovina.unshift((`${this.steviloZpiko(this.cas)} ` + `Leto = `) + this.steviloZpiko(this.vrednost.toFixed(0)) + ` sek`)
            this.ponastavitev()
        },
        // MASA
        kilogram() {
            this.vrednost = parseFloat(this.masa) * 100;
            this.zgodovina.unshift((`${this.steviloZpiko(this.masa)} ` + `kg = `) + this.steviloZpiko(this.vrednost.toFixed(0)) + ` dag`)
            this.ponastavitev()
        },
        dekagram() {
            this.vrednost = parseFloat(this.masa) / 100;
            this.zgodovina.unshift((`${this.steviloZpiko(this.masa)} ` + `dag = `) +this.steviloZpiko(this.vrednost.toFixed(2)) + ` kg`)
            this.ponastavitev()
        },
        deg() {
            this.vrednost = parseFloat(this.masa) * 10;
            this.zgodovina.unshift((`${this.steviloZpiko(this.masa)} ` + `dag = `) +this.steviloZpiko(this.vrednost.toFixed(0)) + ` g`)
            this.ponastavitev()
        },
        gram() {
            this.vrednost = parseFloat(this.masa) / 10;
            this.zgodovina.unshift((`${this.steviloZpiko(this.masa)} ` + `g = `) +this.steviloZpiko(this.vrednost.toFixed(1)) + ` deg`)
            this.ponastavitev()
        },
        grami() {
            this.vrednost = parseFloat(this.masa) * 1000;
            this.zgodovina.unshift((`${this.steviloZpiko(this.masa)} ` + `g = `) +this.steviloZpiko(this.vrednost.toFixed(0)) + ` mg`)
            this.ponastavitev()
        },
        miligrami() {
            this.vrednost = parseFloat(this.masa) / 1000;
            this.zgodovina.unshift((`${this.steviloZpiko(this.masa)} ` + `mg = `) +this.steviloZpiko(this.vrednost.toFixed(3)) + ` g`)
            this.ponastavitev()
        },
        izbrisVse() {
            this.vrednost = ``
            this.dolzina = ``
            this.cas = ``
            this.prostornina = ``
            this.masa = ``
            this.hitrost = ``
            this.zgodovina = []
            this.pokaziIzbris = false
        }
    },
    mounted: function () {
        this.$tours['myTour'].start()
    }
}




