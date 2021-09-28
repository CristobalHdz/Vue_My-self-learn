const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author:'myself',
            age:'1234'
        }
    },
    methods: {
        // changeTitle(title) {
        //     // this.title = 'Something dark side'
        //     this.title = title
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});

app.mount('#app')