let vm = new Vue({
  el: "#app",
  data: {
    cards: [
      {
        value: 50,
        imgUrl: "../dist/images/deposit/b1.jpg",
      },
      {
        value: 100,
        imgUrl: "../dist/images/deposit/b2.jpg",
      },
      {
        value: 300,
        imgUrl: "../dist/images/deposit/b3.jpg",
      },
      {
        value: 500,
        imgUrl: "../dist/images/deposit/b4.jpg",
      },
      {
        value: 1000,
        imgUrl: "../dist/images/deposit/b5.jpg",
      },
      {
        value: 2000,
        imgUrl: "../dist/images/deposit/b6.jpg",
      },
      {
        value: 3000,
        imgUrl: "../dist/images/deposit/b7.jpg",
      },
      {
        value: 5000,
        imgUrl: "../dist/images/deposit/b8.jpg",
      },
    ],
  },
  methods: {
    test(itemValue) {
      alert(itemValue);
    },
  },
});
