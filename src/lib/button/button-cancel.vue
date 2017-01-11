<script>
    import Button from './button.vue'
    export default {
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
<style>
    .button.cancel {
        background-color: cadetblue;
        color: white;
    }
</style>