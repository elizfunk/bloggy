export interface UseDisclosureProps {
  isOpen?: boolean
  defaultIsOpen?: boolean
  onClose?(): void
  onOpen?(): void
  id?: string
}
