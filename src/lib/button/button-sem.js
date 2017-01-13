import Button from './button.vue'
import './button-sem.css';

export const WarningButton = {
  name: 'warning-button',
  render(h) {
    return h(Button, {
      class: ['warning']
    }, this.$slots.default)
  }
}

export const DangerButton = {
  functional: true,
  name: 'danger-button',
  render: (h, context) => h(Button, {
    class: ['danger']
  }, context.slots().default)
}
