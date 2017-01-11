<script>
    import Button from './button.vue'
    export default {
        name: 'type-button',
        render(h){
            return h(
                Button,
                {
                    class: [this.type]
                },
                this.$slots.default
            )
        },
        props: {
            type: {
                validator: function(typeStr){
                    if(typeof typeStr === 'string'){
                        switch(typeStr){
                            case 'ok':
                            case 'cancel':
                            case 'success':
                            case 'warning':
                            case 'danger':
                            case 'info': return true;
                            default: return false;
                        }
                    } else return false;
                }
            }
        }
    }
</script>
<style scoped>
    .button.success {
        background-color: #13ce66;
        color: white;
    }
    .button.warning {
        background-color: #f7ba2a;
        color: white;
    }
    .button.danger {
        background-color: #ff4949;
        color: white;
    }
    .button.info {
        background-color: #50bfff;
        color: white;
    }
    .button.ok {
        background-color: deepskyblue;
        color: white;
    }
    .button.cancel {
        background-color: rebeccapurple;
        color: white;
    }
</style>