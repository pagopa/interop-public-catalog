/**
 * This module provides utilities to initialize Bootstrap Italia interactive components
 * like Popovers, Dropdowns, and Accordions that require JavaScript initialization.
 *
 * Usage:
 * - Call `initBootstrapItaliaComponents()` on page load to initialize all components
 * - For React components or dynamically rendered content, call the initialization
 *   functions again after the component mounts or re-renders, as Bootstrap Italia
 *   components need to be re-initialized when the DOM changes
 * - Use the individual `init*` functions for targeted initialization of specific elements
 */
import { Popover, Tooltip, Dropdown, Accordion } from 'bootstrap-italia'

export const initPopover = (
  el: HTMLElement,
  overrides?: ConstructorParameters<typeof Popover>[1]
) => {
  try {
    return new Popover(el, {
      trigger: 'hover focus',
      ...overrides,
    })
  } catch (error) {
    console.warn('Failed to initialize popover:', error)
    return null
  }
}

export const initTooltip = (
  el: HTMLElement,
  overrides?: ConstructorParameters<typeof Tooltip>[1]
) => {
  try {
    return new Tooltip(el, {
      ...overrides,
    })
  } catch (error) {
    console.warn('Failed to initialize tooltip:', error)
    return null
  }
}

export const initDropdown = (el: HTMLElement) => {
  try {
    return new Dropdown(el)
  } catch (error) {
    console.warn('Failed to initialize dropdown:', error)
    return null
  }
}

export const initAccordion = (el: HTMLElement) => {
  try {
    return new Accordion(el)
  } catch (error) {
    console.warn('Failed to initialize accordion:', error)
    return null
  }
}

export const initBootstrapItaliaComponents = (container: Document | HTMLElement = document) => {
  const selectors = [
    { selector: '[data-bs-toggle="popover"]', init: initPopover },
    { selector: '[data-bs-toggle="tooltip"]', init: initTooltip },
    { selector: '[data-bs-toggle="dropdown"]', init: initDropdown },
    { selector: '.accordion', init: initAccordion },
  ]

  selectors.forEach(({ selector, init }) => {
    container.querySelectorAll<HTMLElement>(selector).forEach((el) => init(el))
  })
}
