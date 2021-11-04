window.onload = function () {

    //宣告子組件:hiddenPopUps 並綁定區塊
    let hiddenPopUps = {
        template: '#hiddenPopUps',
        //向上層傳遞事件
        methods: {
            clickClose() {
                this.$emit('stop-show')
            }
        },
    }

    let vm = new Vue({
        el: '#box',
        data: {
            isShow: false,
        },
        //在父層掛載子組件
        components: {
            hidden: hiddenPopUps
        },
        //綁定點擊事件
        methods: {
            clickShow() {
                // console.log('123');
                this.isShow = true
            },
            close() {
                // console.log('321');
                this.isShow = false
            }
        },
    })
}
