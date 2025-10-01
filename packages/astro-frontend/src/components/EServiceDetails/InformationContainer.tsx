import { Icon } from 'design-react-kit'
import React from 'react'

type InformationContainerProps = {
  label: string
  content: string
  icon?: {
    icon: string
    tooltipText: string
  }
}

export const InformationContainer: React.FC<InformationContainerProps> = ({
  label,
  content,
  icon,
}) => {
  return (
    <div className="d-flex flex-row align-items-center py-3">
      <span>
        <strong>{label}</strong>
        {icon && <Icon icon={icon.icon} size="xs" className="ms-2" />}
      </span>
      <span className="ms-3">{content}</span>
    </div>
  )
}
