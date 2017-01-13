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
    return h(TypeButton, {
      props: {
        type: 'info'
      }
    }, this.$slots.default)
  }
}