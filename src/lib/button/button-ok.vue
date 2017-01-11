<script>
    import Button from './button.vue'
    export default {
        render(h){
            return h(
                Button,
                {
                    class: ['ok']
                },
                this.$slots.default
            )
        }
    }
</script>
<style>
    .button.ok {
        background-color: green;
        color: white;
    }
</style>