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
            $.ajax({
                method: "POST",
                url: "../php/Gacha/playCheck.php",
                data: {},
                dataType: "text",
                success: function (response) {
                    if (response == "false") {
                        let blk = document.getElementById('toLoginBlk');
                        blk.classList.remove('none');
                    } else {
                        let total = (point.value).replace("$", "");;
                        if (total < 300) {
                            let blk = document.getElementById('coinBlk');
                            blk.classList.remove('none');
                            return false;
                        } else {
                            vm.isShow = true
                        }
                    }
                }
            })


        },
        close() {
            // console.log('321');
            this.isShow = false
        }
    },
})
