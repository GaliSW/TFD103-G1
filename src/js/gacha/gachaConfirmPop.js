//宣告子組件:hiddenPopUps 並綁定區塊
let PopUps = {
    template: '#PopUps',
    //向上層傳遞事件
    methods: {
        clickClose() {
            this.$emit('stop-show')
        }
    },
}

let vm = new Vue({
    el: '#goBtn',
    data: {
        isShow: false,
    },
    //在父層掛載子組件
    components: {
        hidden: PopUps
    },
    //綁定點擊事件
    methods: {
        clickShow() {
            let total = (point.value).replace("$", "");;
            if (total < 300) {
                alert("您的點數不足，可至儲姪專區進行儲值喔～");
                return false;
            } else {
                this.isShow = true
            }

        },
        close() {
            // console.log('321');
            this.isShow = false
        }
    },
})
