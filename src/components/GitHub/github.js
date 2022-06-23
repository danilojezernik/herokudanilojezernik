

export default {
    data() {
        return {
            repositories: [],
            api: "http://localhost:3030/github"
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