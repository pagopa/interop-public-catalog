import type { ElementType, RefObject } from 'react'
import { BootstrapItaliaIcon } from './BootstrapItaliaIcon.js'
import type { BootstrapItaliaIconProps } from './BootstrapItaliaIcon.js'

type ChipProps<T extends ElementType = 'div'> = {
  as?: T
  ref: RefObject<HTMLElement | null>
  label: string
  iconName?: BootstrapItaliaIconProps['name']
} & React.ComponentPropsWithoutRef<T>

export function Chip<T extends ElementType = 'div'>({ label, iconName, ...rest }: ChipProps<T>) {
  return (
    <div {...rest} className={`chip chip-disabled bg-muted px-3 my-0 ${rest.className}`}>
      {iconName && <BootstrapItaliaIcon name={iconName} size="xs" color="secondary" />}
      <span className="chip-label text-nowrap">{label}</span>
    </div>
  )
}
