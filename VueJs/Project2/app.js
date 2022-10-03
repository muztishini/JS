const App = {
  data() {
    return {
      placeholderString: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2"],
    };
  },
  methods: {
    inputChangeHandler(event) {
      // console.log('inputChangeHandler', event.target.value)
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },

    // inputKeyPress(event){
    // 	if (event.key==='Enter') {
    // 		this.addNewNote()
    // 	}
    // }
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      console.log("doubleCountComputed");
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
    },
  },
};

Vue.createApp(App).mount("#app");
