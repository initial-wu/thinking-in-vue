<script>
    import Button from './button.vue'
    export default {
        name: 'cancel-button',
        render(h){
            return h(
                Button,
                {
                    class: ['cancel']
                },
                this.$slots.default
            )
        }
    }
</script>
<style scoped>
    .button.cancel {
        background-color: cadetblue;
        color: white;
    }
</style>