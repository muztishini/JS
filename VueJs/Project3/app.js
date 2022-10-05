Vue.createApp({
  // data(){
  //     return{

  //     }
  // }
  data: () => ({
    myHtml: "<h1>Vue 3 App</h1>",
    title: "Я есть Грут",
    person: {
      firstName: "Andrey",
      lastName: "Kroshakov",
      age: 43,
    },
    items: [1, 2],
  }),
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      // console.log(this.$refs)
    },
    remove(i) {
      this.items.splice(i, 1)
    },
    log(item){
      console.log('Log item: ',item)
    }
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
}).mount("#app")