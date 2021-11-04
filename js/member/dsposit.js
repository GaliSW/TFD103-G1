let vm = new Vue({
  el: "#app",
  data: {
    cards: [
      {
        value: 50,
        imgUrl: "./image/deposit/b1.jpg",
      },
      {
        value: 100,
        imgUrl: "./image/deposit/b2.jpg",
      },
      {
        value: 300,
        imgUrl: "./image/deposit/b3.jpg",
      },
      {
        value: 500,
        imgUrl: "./image/deposit/b4.jpg",
      },
      {
        value: 1000,
        imgUrl: "./image/deposit/b5.jpg",
      },
      {
        value: 2000,
        imgUrl: "./image/deposit/b6.jpg",
      },
      {
        value: 3000,
        imgUrl: "./image/deposit/b7.jpg",
      },
      {
        value: 5000,
        imgUrl: "./image/deposit/b8.jpg",
      },
    ],
  },
  methods: {
    test(itemValue) {
      alert(itemValue);
    },
  },
});
