export const delayAndFocus = (elementToReceiveFocus: HTMLElement | null): void => {
  window.requestAnimationFrame(() => {
    elementToReceiveFocus && elementToReceiveFocus.focus()
  })
}
