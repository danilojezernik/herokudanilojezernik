

export default {
    data() {
        return {
            repositories: [],
            api: "https://server-portfelia.herokuapp.com/github"
        }
    },
    methods: {
        setRepositories() {
            this.$http.get(this.api).then((response) => {
                this.repositories = response.data
            })
        }
    },
    mounted() {
        this.setRepositories();
    }
}
