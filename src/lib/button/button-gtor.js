import Button from './button.vue'
import './button-gtor.css';
function generator(prefix) {
  return {
    functional: true,
    name: prefix + '-button',
    render: (h, context) => h(
      Button, {
        class: [prefix]
      },context.slots().default)
  }
}

export const SuccessButtonG = generator('success')
export const WarningButtonG = generator('warning')
export const DangerButtonG = generator('danger')
export const InfoButtonG = generator('info')
export const OkButtonG = generator('ok')
export const CancelButtonG = generator('cancel')