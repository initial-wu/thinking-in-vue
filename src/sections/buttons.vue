<style>
    .button.blue {
        background-color: blue;
        color: white;
        border-color: deepskyblue;
    }
</style>
<template>
    <div>
        <h1>Demo1 Buttons</h1>
        <sub-section>
            <h3>base-button with class</h3>
            <base-button class="light">button</base-button>
            <base-button class="dark">button</base-button>
            <base-button class="blue">button</base-button>
        </sub-section>
        <sub-section>
            <h3>ok-button & cancel-button</h3>
            <ok-button @v-click="clickHandler">ok</ok-button>
            <cancel-button>cancel</cancel-button>
        </sub-section>
        <sub-section>
            <h3>type-button with props.type</h3>
            <type-button type="success" @click.native="clickHandler">success</type-button>
            <type-button type="warning">warning</type-button>
            <type-button type="danger">danger</type-button>
            <type-button type="info">info</type-button>
            <type-button type="ok">OK</type-button>
            <type-button type="cancel">cancel</type-button>
        </sub-section>
        <sub-section>
            <h3>semantic buttons based on type-button</h3>
            <div>
                <success-button>success</success-button>
                <info-button>info</info-button>
            </div>
        </sub-section>
        <sub-section>
            <h3>semantic buttons based on base-button</h3>
            <div>
                <warning-button>warning</warning-button>
                <danger-button>danger</danger-button>
            </div>
        </sub-section>
        <sub-section>
            <h3>generatored buttons</h3>
            <success-button-g>success</success-button-g>
            <warning-button-g>warning</warning-button-g>
            <danger-button-g>danger</danger-button-g>
            <info-button-g>info</info-button-g>
            <ok-button-g>ok</ok-button-g>
            <cancel-button-g>cancel</cancel-button-g>
        </sub-section>
    </div>
    </div>
</template>
<script>
    import BaseButton from '../lib/button/button'
    import OkButton from '../lib/button/button-ok'
    import CancelButton from '../lib/button/button-cancel'
    import TypeButton from '../lib/button/button-type'
    import { WarningButton, DangerButton } from '../lib/button/button-sem'
    import { SuccessButton, InfoButton } from '../lib/button/button-sem-type'
    import { SuccessButtonG, InfoButtonG, WarningButtonG, DangerButtonG, OkButtonG, CancelButtonG } from '../lib/button/button-gtor'
    import SubSection from './sub-section.vue'
    export default {
        components: {
            SubSection,
            BaseButton,
            OkButton,
            CancelButton,
            TypeButton,
            SuccessButton,
            InfoButton,
            WarningButton,
            DangerButton,
            SuccessButtonG,
            InfoButtonG,
            WarningButtonG,
            DangerButtonG,
            OkButtonG,
            CancelButtonG
        },
        methods: {
            clickHandler(e) {
                console.dir(e);
                console.log('buttons');
            }
        }
    }
</script>