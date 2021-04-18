module.exports = function (Vue) {
    Vue.mixin({
        mounted() {
            this.$el.style.border = '1px solid red'
        }
    })
}