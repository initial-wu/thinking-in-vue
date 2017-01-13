<script>
    export default {
        name: 'base-button',
        render(h) {
            return h('a',
                {
                    class: ['button'],
                    on: {
                        click: this.clickHandler
                    }
                }, this.$slots.default)
        },
        methods: {
            clickHandler(){
                console.log('button click')
                this.$emit('v-click');
            }
        }
    }
</script>
<style>
    a.button {
        display: inline-block;
        padding: 0.5em 1em;
        cursor: pointer;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #333;
        background-color: #fff;
        border-color: #ccc;
    }
    a.button.dark {
        background-color: black;
        color: white;
    }
    a.button.light {
        background-color: white;
        color: black;
        border: solid 1px black;
    }
</style>