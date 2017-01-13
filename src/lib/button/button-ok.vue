<script>
    import Button from './button.vue'
    export default {
        name: 'ok-button',
        render(h){
            return h(
                Button,
                {
                    class: ['ok'],
                    on: {
                        'v-click': function(){
                            console.log('ok-button');
                        }
                    }
                },
                this.$slots.default
            )
        }
    }
</script>
<style scoped>
    .button.ok {
        background-color: green;
        color: white;
    }
</style>