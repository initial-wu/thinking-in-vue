<style>
    .button.blue {
        background-color: blue;
        color: white;
    }
</style>
<template>
    <section>
        <div>
            <base-button class="light">button</base-button>
            <base-button class="dark">button</base-button>
            <base-button class="blue">button</base-button>
        </div>
        <div>
            <ok-button @click.native="clickHandler">ok</ok-button>
            <cancel-button>cancel</cancel-button>
        </div>
        <div>
            <type-button type="success" @click.native="clickHandler">success</type-button>
            <type-button type="warning">warning</type-button>
            <type-button type="danger">danger</type-button>
            <type-button type="info">info</type-button>
            <type-button type="ok">OK</type-button>
            <type-button type="cancel">cancel</type-button>
        </div>
        <div>
            <success-button>success</success-button>
            <info-button>info</info-button>
            <warning-button>warning</warning-button>
            <danger-button>danger</danger-button>
        </div>
    </section>
</template>
<script>
    import BaseButton from '../lib/button/button'
    import OkButton from '../lib/button/button-ok'
    import CancelButton from '../lib/button/button-cancel'
    import TypeButton from '../lib/button/button-type.vue'
    import { SuccessButton, InfoButton, WarningButton, DangerButton } from '../lib/button/button-sem.js'

    export default {
        components: {
            BaseButton,
            OkButton,
            CancelButton,
            TypeButton,
            SuccessButton,
            InfoButton,
            WarningButton,
            DangerButton
        },
        methods: {
            clickHandler(e) {
                console.dir(e);
                console.log('click');
            }
        }
    }
</script>