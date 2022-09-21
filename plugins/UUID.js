export default (ctx, inject) => {
  inject('uuid', ctx.store.state.uuid)
}
