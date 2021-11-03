var vm = new Vue({
    el: '#app',
    data: {
        index: 0,
        isShow: false,
    },
    components: {
        0: {
            template: "#box1"
        },
        1: {
            template: "#box2"
        },
        2: {
            template: "#box3"
        }
    },
    methods: {
        change(index) {
            this.selected = index;
        }
    }
});