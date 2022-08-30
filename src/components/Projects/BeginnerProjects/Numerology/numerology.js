export default {
    data() {
        return {
            izracunLetaDvehStevil: "",

            danRojstva: "",
            mesecRojstva: "",
            letnicaRojstva: "",

            imeInput: "",
            priimekInput: "",

            randomNumberShow: "",
            uniSteviloLeta: "",
            uniSteviloMeseca: "",

            opisStevila: "",
            steviloRojstva: "",
            opisDnevaRojstva: "",
            enaBeseda: "",
            opozorilo: "",
            dan: "",
            danVtednu: "",

            aktivno: false,
            vnos: false
        }
    },
    methods: {
        izracunLifePathNumber() {

            // IZBOR PRAVILNEGA DATUMA ROJSTVA
            let leto = new Date();
            let letoPreko = leto.getFullYear();

            if (this.danRojstva > 31 || this.danRojstva < 0) {
                return
            }
            if (this.mesecRojstva > 12 || this.mesecRojstva < 0) {
                return
            }
            if (this.letnicaRojstva > letoPreko) {
                return
            }

            // IZRAČUNI ROJSTNEGA DATUMA
            let izracunLetnice =
                this.letnicaRojstva.length === 4 ?
                    parseFloat(this.letnicaRojstva.charAt(0)) +
                    parseFloat(this.letnicaRojstva.charAt(1)) +
                    parseFloat(this.letnicaRojstva.charAt(2)) +
                    parseFloat(this.letnicaRojstva.charAt(3))
                    :
                    parseFloat(this.letnicaRojstva.charAt(0)) +
                    parseFloat(this.letnicaRojstva.charAt(1)) +
                    parseFloat(this.letnicaRojstva.charAt(2))

            let letaVenoStevilo =
                izracunLetnice.length === 2 ?
                    parseFloat(izracunLetnice.toString().charAt(0)) +
                    parseFloat(izracunLetnice.toString().charAt(1))
                    :
                    parseFloat(izracunLetnice.toString().charAt(0))


            let izracunMeseca =
                this.mesecRojstva.length === 2 ?
                    parseFloat(this.mesecRojstva.charAt(0)) +
                    parseFloat(this.mesecRojstva.charAt(1))
                    :
                    parseFloat(this.mesecRojstva.charAt(0))

            let izracunDneva =
                this.danRojstva.length === 2 ?
                    parseFloat(this.danRojstva.charAt(0)) +
                    parseFloat(this.danRojstva.charAt(1))
                    :
                    parseFloat(this.danRojstva.charAt(0))

            let koncniRezultatVsega =
                parseFloat(izracunDneva.toString()) +
                parseFloat(izracunMeseca.toString()) +
                parseFloat(letaVenoStevilo.toString())


            // V PRIMERU NIČELNEGA VNOSA VRNE SPOROCILO
            if (this.letnicaRojstva.length === 0 || this.mesecRojstva.length === 0 || this.danRojstva === 0) {
                this.vnos = true
                return this.opozorilo = "Vnesite vsa polja";
            }
            this.izracunLetaDvehStevil =
                koncniRezultatVsega.length === 2 ?
                    parseFloat(koncniRezultatVsega.toString().charAt(0)) +
                    parseFloat(koncniRezultatVsega.toString().charAt(1))
                    :
                    parseFloat(koncniRezultatVsega.toString().charAt(0))
            this.vnos = false

            // PRIKAZ POLJA REZULTATOV
            this.aktivno = true

            switch (this.izracunLetaDvehStevil) {
                case 1:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: energija, motivacija, inovativnost in vodstvenost"
                    break;
                case 2:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: vpliv, mirnost, sodelovanje, sodelaven"
                    break;
                case 3:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: ustvarjalnost, komunikativnost, energičnost, optimističnost, očarljivost"
                    break;
                case 4:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: praktičnost, delavnost, moč, stabilnost, podpora"
                    break;
                case 5:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: radovednost, rad ima raznolikost, pustolovščina!"
                    break;
                case 6:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: zaščitniškost, negovalnost, podpora"
                    break;
                case 7:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: radovednost, razgledanost, osamljenost"
                    break;
                case 8:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: namernost, trud, uspeh"
                    break;
                case 9:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: občutljivost, podpirajoč, strpnost, ljubečnost"
                    break;
                case 11:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: intuitivnost, jasnovidnost, radodarnost"
                    break;
                case 22:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: duhovnost, odgovornost, deljenje"
                    break;
                case 33:
                    this.opisStevila = "Ključne besede pod to numerološko številko so: zdravnilec, duhovni vodja"
                    break;
                default:
                    this.opisStevila = "Nekaj je šlo narobe. Prosim kontaktirajte skrbnika spletne strani!s"
                    break;
            }


            this.dan = this.danRojstva

            if (this.danRojstva == 1) {
                this.enaBeseda = "Samo-začetniški"
                this.steviloRojstva = "Klučne besede: odločnost, pogum, samozačetniškost";
            } else if (this.danRojstva == 2) {
                this.enaBeseda = "Reševalec problemov"
                this.steviloRojstva = "Klučne besede: intuitivnost, nepristranskost pri reševanju problemov";
            } else if (this.danRojstva == 3) {
                this.enaBeseda = "Komunikator"
                this.steviloRojstva = "Klučne besede: Ekspresiven, karizmatičen, spreten komunikator";
            } else if (this.danRojstva == 4) {
                this.enaBeseda = "Skala";
                this.steviloRojstva = "Klučne besede: Stabilen, zanesljiv, racionalen";
            } else if (this.danRojstva == 5) {
                this.enaBeseda = "Fleksibilnost"
                this.steviloRojstva = "Klučne besede: Prilagodljiva, prilagodljiva, navdušena nad spremembami";
            } else if (this.danRojstva == 6) {
                this.enaBeseda = "Vzgojitelj"
                this.steviloRojstva = "Klučne besede: Zaščiten, negovalen, ustrežljiv, požrtvovalen";
            } else if (this.danRojstva == 7) {
                this.enaBeseda = "Zaveden"
                this.steviloRojstva = "Klučne besede: Duhovni, pridni, razgledani, ozaveščeni";
            } else if (this.danRojstva == 8) {
                this.enaBeseda = "Uspešen"
                this.steviloRojstva = "Klučne besede: Samozadosten, sposoben, dosega cilje, uspešen";
            } else if (this.danRojstva == 9) {
                this.enaBeseda = "Sočuten"
                this.steviloRojstva = "Klučne besede: služen, podpora, pomoč večjemu dobremu, sočuten";
            } else if (this.danRojstva == 10) {
                this.enaBeseda = "Vodja"
                this.steviloRojstva = "Klučne besede: Organiziran, inovativen, oster, vodja";
            } else if (this.danRojstva == 11) {
                this.enaBeseda = "Intuitivno"
                this.steviloRojstva = "Klučne besede: Podpira, daje smernice, ima zavedanje, intuitivno";
            } else if (this.danRojstva == 12) {
                this.enaBeseda = "Kreativnost"
                this.steviloRojstva = "Klučne besede: Ekspresivna, domiselna, pronicljiva, ustvarjalna";
            } else if (this.danRojstva == 13) {
                this.enaBeseda = "V trenutku"
                this.steviloRojstva = "Klučne besede: Praktičen, stabilen, optimističen, ustvarjalen, vesten";
            } else if (this.danRojstva == 14) {
                this.enaBeseda = "Odprtega uma"
                this.steviloRojstva = "Klučne besede: Analitičen, moder, razumen, odprt";
            } else if (this.danRojstva == 15) {
                this.enaBeseda = "Podpora"
                this.steviloRojstva = "Klučne besede: Družabna, radovedna, ljubeča, podporna";
            } else if (this.danRojstva == 16) {
                this.enaBeseda = "Radovednost"
                this.steviloRojstva = "Klučne besede: Intuitivna, modra, delajoča, radovedna";
            } else if (this.danRojstva == 17) {
                this.enaBeseda = "Neodvisen"
                this.steviloRojstva = "Klučne besede: Učinkovit, spreten, osredotočen, sposoben, neodvisen";
            } else if (this.danRojstva == 18) {
                this.enaBeseda = "Odprtega uma"
                this.steviloRojstva = "Klučne besede: Velikodušen, odprtega srca, strežen, odprtega duha";
            } else if (this.danRojstva == 19) {
                this.enaBeseda = "Samozadostnost"
                this.steviloRojstva = "Klučne besede: Sposobna, neodvisna, tvegana, samozadostna";
            } else if (this.danRojstva == 20) {
                this.enaBeseda = "Harmoničen"
                this.steviloRojstva = "Klučne besede: Kooperativen, občutljiv, harmoničen, intuitiven";
            } else if (this.danRojstva == 21) {
                this.enaBeseda = "Socialnost"
                this.steviloRojstva = "Klučne besede: Komunikator, očarljiv, povezovalni, družaben";
            } else if (this.danRojstva == 22) {
                this.enaBeseda = "Odločnost"
                this.steviloRojstva = "Klučne besede: Ustvarjalna, kooperativna, pridna, odločna";
            } else if (this.danRojstva == 23) {
                this.enaBeseda = "Energičnost"
                this.steviloRojstva = "Klučne besede: Želja za življenje, navdihujoče, lahkotno";
            } else if (this.danRojstva == 24) {
                this.enaBeseda = "Zlato srce"
                this.steviloRojstva = "Klučne besede: Zaščitnik, negovalni, zvest, zlato srce";
            } else if (this.danRojstva == 25) {
                this.enaBeseda = "Radovednost"
                this.steviloRojstva = "Klučne besede: Zvedoželjen, zbiralec informacij, radoveden";
            } else if (this.danRojstva == 26) {
                this.enaBeseda = "Ambicioznost"
                this.steviloRojstva = "Klučne besede: Inovativno, ambiciozno, ozaveščeno, intuitivno";
            } else if (this.danRojstva == 27) {
                this.enaBeseda = "Sočutnost"
                this.steviloRojstva = "Klučne besede: Pronicljiva, deljena, strpna, sočutna";
            } else if (this.danRojstva == 28) {
                this.enaBeseda = "Sodelujoč"
                this.steviloRojstva = "Klučne besede:K Sočuten, sposoben, vodja, sodelavec";
            } else if (this.danRojstva == 29) {
                this.enaBeseda = "Razumevanje"
                this.steviloRojstva = "Klučne besede: Intuitivno, ustvarjalno, duhovno, pronicljivo";
            } else if (this.danRojstva == 30) {
                this.enaBeseda = "Mislec"
                this.steviloRojstva = "Klučne besede: Kreativen, komunikator, inovativen, mislec";
            } else if (this.danRojstva == 31) {
                this.enaBeseda = "Praktičnost"
                this.steviloRojstva = "Klučne besede: Organizirano, praktično, domiselno, ustvarjalno";
            }


            this.danRojstva = "";
            this.letnicaRojstva = "";
            this.mesecRojstva = "";
            this.imeInput = "";
            this.priimekInput = "";

        }
    }, mounted() {
        let weekday = ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"];
        let d = new Date();
        let day = weekday[d.getDay()];

        let dateNumber = new Date();
        let month = dateNumber.getMonth() + 1
        let year = dateNumber.getFullYear()

        let randomNumber = Math.floor(Math.random() * 10) + 1

        this.randomNumberShow = randomNumber;
        this.danVtednu = day;

        // IZRAČUNI UNIVERZALNEGA ŠTEVILA LETA
        let univerzalniIzracunLeta =
            parseFloat(year.toString().charAt(0)) +
            parseFloat(year.toString().charAt(1)) +
            parseFloat(year.toString().charAt(2)) +
            parseFloat(year.toString().charAt(3))
        this.uniSteviloLeta = univerzalniIzracunLeta

        // IZRAČUNI UNIVERZALNEGA ŠTEVILA MESECA
        let univerzalniIzracunMeseca =
            month.length === 2 ?
                parseFloat(month.toString().charAt(0)) +
                parseFloat(month.toString().charAt(1))
                :
                parseFloat(month.toString().charAt(0))
        this.uniSteviloMeseca = univerzalniIzracunMeseca

    }
}



