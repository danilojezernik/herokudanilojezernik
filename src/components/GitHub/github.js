export default {
    data() {
        return {
            loading: false,
            repositories: [],
            api: "https://server-portfelia.herokuapp.com/github"
        }
    },
    methods: {
        setRepositories() {
            this.loading = true;
            this.$http.get(this.api)
                .then((response) => {
                this.repositories = response.data
            })
                .finally(() => {
                this.loading = false;
            })
        }
    },
    mounted() {
        this.setRepositories();
    }
}
