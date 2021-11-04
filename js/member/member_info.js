let vm = new Vue({
  el: "#app",
  data: {
    edit_on: true,
    btn_on: true,
    image: "../image/member/r1.jpg",
    pop: false,
  },
  methods: {
    
    fileChange(e) {
      let file = e.target.files[0];
      readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.loadImage);
    },
    loadImage(e) {
      this.image = readFile.result;
      // this.image = e.target.result;
    },
    clickPop() {
      vm.$data.pop = true;
    },
    clickClose() {
      vm.$data.pop = false;
    },
  },
});
