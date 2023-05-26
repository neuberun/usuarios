Vue.createApp({
    data() {
        return {
            users: []
        }
    },
    methods: {
        getUsers() {
            fetch('https://reqres.in/api/users?per_page=10')
                .then(response => response.json())
                .then(data => this.users = data.data)
                .catch(error => console.log(error.message))
        }
    },
    mounted() {
        this.getUsers()
    }
}).mount('#usuarios')