import { BootstrapItaliaIcon, BootstrapItaliaIconProps } from './BootstrapItaliaIcon.js'

interface TooltipIconProps {
  title: string
  content: string
  iconName: BootstrapItaliaIconProps['name']
  iconColor?: BootstrapItaliaIconProps['color']
  iconSize?: BootstrapItaliaIconProps['size']
  ariaLabel?: string
}

export const TooltipIcon: React.FC<TooltipIconProps> = ({
  title,
  content,
  iconName,
  iconColor,
  iconSize,
  ariaLabel,
}) => (
  <button
    type="button"
    className="btn btn-link p-0 d-inline-flex align-items-center ms-2"
    data-bs-toggle="popover"
    data-bs-placement="bottom"
    data-bs-title={title}
    data-bs-content={content}
    aria-label={ariaLabel || title}
  >
    <BootstrapItaliaIcon name={iconName} color={iconColor} size={iconSize} />
  </button>
)
