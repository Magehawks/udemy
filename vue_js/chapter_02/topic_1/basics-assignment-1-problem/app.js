const app = Vue.createApp({
    data() {
        return {
            name: 'T800',
            age: 33,
            randomNumber: Math.random(),
            image: "https://static-00.iconduck.com/assets.00/vue-icon-512x512-ne4r9aa8.png"
        };
    },
    methods: {
        myname() {
            return this.name
        },
        myage() {
            return this.age
        },
        myfutureAge() {
            return this.age + 5
        },
        arandomNumber() {
            return this.randomNumber
        },
        myimage() {
            return this.image
        }
    }
});
app.mount('#assignment');