module.exports = function (Vue) {
    Vue.mixin({
        mounted() {
            this.$el.style.border = '10px solid red'
        }
    })
}