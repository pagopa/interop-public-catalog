import { BootstrapItaliaIcon, BootstrapItaliaIconProps } from './BootstrapItaliaIcon.js'

export function Chip({
  label,
  iconName,
}: {
  label: string
  iconName?: BootstrapItaliaIconProps['name']
}) {
  return (
    <div className="chip chip-disabled bg-muted px-3 my-0">
      {iconName && <BootstrapItaliaIcon name={iconName} size="xs" color="secondary" />}
      <span className="chip-label text-nowrap">{label}</span>
    </div>
  )
}
