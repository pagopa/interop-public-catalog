import { useId } from 'react'
import { BootstrapItaliaIcon } from './BootstrapItaliaIcon.js'

type SectionLink = { text: string; href: string }

type SectionProps<Tag extends React.ElementType = 'section'> = {
  as?: Tag
  title?: string
  titleClass?: string
  sectionLink?: SectionLink
  className?: string
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<Tag>

export function Section<Tag extends React.ElementType = 'section'>({
  as,
  title,
  titleClass,
  sectionLink,
  className,
  children,
  ...rest
}: SectionProps<Tag>) {
  const TagComponent = as || 'section'
  const randomId = useId()

  return (
    <TagComponent
      className={`section px-3${className ? ` ${className}` : ''}`}
      aria-labelledby={title ? randomId : undefined}
      {...rest}
    >
      <div className="section-content">
        <div className="container">
          {(title || sectionLink) && (
            <div className="mb-4">
              <div
                className={
                  sectionLink ? 'd-md-flex justify-content-between align-items-center' : undefined
                }
              >
                {/* Section Title */}
                <h2 className={`h3${titleClass ? ` ${titleClass}` : ''}`} id={randomId}>
                  {title}
                </h2>
                {/* Section Link */}
                {sectionLink && (
                  <small>
                    <a href={sectionLink.href} className="text-uppercase fw-semibold">
                      {sectionLink.text}
                      <BootstrapItaliaIcon name="it-arrow-right" size="sm" color="primary" padded />
                    </a>
                  </small>
                )}
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
    </TagComponent>
  )
}
