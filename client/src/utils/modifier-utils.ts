export type State = {|
  elements: {|
    reference: Element | VirtualElement,
    popper: HTMLElement,
    arrow?: HTMLElement,
  |},
  options: OptionsGeneric<any>,
  placement: Placement,
  strategy: PositioningStrategy,
  orderedModifiers: Array<Modifier<any, any>>,
  rects: StateRects,
  scrollParents: {|
    reference: Array<Element | Window | VisualViewport>,
    popper: Array<Element | Window | VisualViewport>,
  |},
  styles: {|
    [key: string]: $Shape<CSSStyleDeclaration>,
  |},
  attributes: {|
    [key: string]: { [key: string]: string | boolean },
  |},
  modifiersData: {
    arrow?: {
      x?: number,
      y?: number,
      centerOffset: number,
    },
    hide?: {
      isReferenceHidden: boolean,
      hasPopperEscaped: boolean,
      referenceClippingOffsets: SideObject,
      popperEscapeOffsets: SideObject,
    },
    offset?: OffsetData,
    preventOverflow?: Offsets,
    popperOffsets?: Offsets,
    [key: string]: any,
  },
  reset: boolean,
|}


export type ModifierArguments<Options: Obj> = {
  state: State,
  instance: Instance,
  options: $Shape<Options>,
  name: string,
}

export type Modifier<Name, Options: Obj> = {|
  name: Name,
  enabled: boolean,
  phase: ModifierPhases,
  requires?: Array<string>,
  requiresIfExists?: Array<string>,
  fn: (ModifierArguments<Options>) => State | void,
  effect?: (ModifierArguments<Options>) => (() => void) | void,
  options?: $Shape<Options>,
  data?: Obj,
|}