import {UseDisclosureProps} from "./use-disclosure"
import {UsePopperProps} from "./use-popper"
import {LazyMode} from  "../../utils/lazy-utils"

export interface UseMenuProps 
    extends Omit<UsePopperProps, "enabled">,
        UseDisclosureProps {
    /**
     * If `true`, the menu will close when a menu item is
     * clicked
     *
     * @default true
     */
    closeOnSelect?: boolean
    /**
     * If `true`, the menu will close when you click outside
     * the menu list
     *
     * @default true
     */
    closeOnBlur?: boolean
    /**
     * If `true`, the first enabled menu item will receive focus and be selected
     * when the menu opens.
     *
     * @default true
     */
    autoSelect?: boolean
    /**
     * Performance 🚀:
     * If `true`, the MenuItem rendering will be deferred
     * until the menu is open.
     */
    isLazy?: boolean
    /**
     * Performance 🚀:
     * The lazy behavior of menu's content when not visible.
     * Only works when `isLazy={true}`
     *
     * - "unmount": The menu's content is always unmounted when not open.
     * - "keepMounted": The menu's content initially unmounted,
     * but stays mounted when menu is open.
     *
     * @default "unmount"
     */
    lazyBehavior?: LazyMode
        /**
     * If `rtl`, poper placement positions will be flipped i.e. 'top-right' will
     * become 'top-left' and vice-verse
     */
    direction?: "ltr" | "rtl"
    /*
    * If `true`, the menu will be positioned when it mounts
    * (even if it's not open).
    *
    * Note 🚨: We don't recommend using this in a menu/popover intensive UI or page
    * as it might affect scrolling performance.
    */
    computePositionOnMount?: boolean
}
