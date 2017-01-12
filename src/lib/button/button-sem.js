import TypeButton from './button-type.vue';

export const SuccessButton = {
  name: 'success-button',
  functional: true,
  render: (h, context) => h(TypeButton, {
    props: {
      type: 'success'
    }
  }, context.slots().default)
}
export const InfoButton = {
  name: 'info-button',
  render(h) {
    return h(
      TypeButton, {
        props: {
          type: 'info'
        }
      },
      this.$slots.default
    )
  }
}

import Button from './button.vue'
import './button-sem.css';

export const WarningButton = {
  render(h) {
    return h(
      Button, {
        class: ['warning']
      },
      this.$slots.default
    )
  }
}

export const DangerButton = {
  functional: true,
  name: 'danger-button',
  render: (h, context) => h(Button, {
    class: ['danger']
  }, context.slots().default)
}

