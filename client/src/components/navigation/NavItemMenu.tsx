import React, {useMemo} from 'react'

import {runIfFn} from "../../utils/runIfFn"


type MaybeRenderProp<P> = React.ReactNode | ((props: P) => React.ReactNode)

export interface MenuProps extends UseMenuProps {
    children: MaybeRenderProp<{
        isOpen: boolean
        onClose: () => void
        forceUpdate: (() => void) | undefined
    }
}


/**
 * Menu provides context, state, and focus management
 * to its sub-components.  It doesn't render any DOM node.
 */
export const Menu: React.FC<MenuProps> = (props) => {
    const {children} = props
    const direction = 'some direction'
    const {descendants, ...ctx} = useMenu({props, direction})
    const context = useMemo(() => ctx, [ctx])

    const {isOpen, onClose, forceUpdate} = context

    return (
        <MenuDescendantsProvider value={descendants}>
            <MenuProvider value={context}>
                {runIfFn(children, {isOpen, onClose, forceUpdate})}
            </MenuProvider>
        </MenuDescendantsProvider>
    )
}
 