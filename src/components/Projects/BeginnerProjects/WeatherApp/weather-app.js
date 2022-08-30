export default {
    data() {
        return {
            api_key: "056338eb8205d2914f1771365d188389",
            url_base: "https://api.openweathermap.org/data/2.5/",
            query: "",
            message: "",
            weather: {},
        }
    },
    methods: {
        fetchWeather() {
            fetch(`${this.url_base}weather?q=${this.query}&units=metric&lang=sl&APPID=${this.api_key}`)
                .then(res => {
                    return res.json();
                })
                .then(this.setResults)
            this.query = ``
        },
        setResults(results) {
            this.weather = results;
        },
        dateBuilder() {
            let d = new Date();
            let months = ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"];
            let days = ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"];
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            return `${day}, ${date}. ${month}. ${year}`;
        },
        goBack(){
            return this.$router.go(-1);
        }
    }
}
