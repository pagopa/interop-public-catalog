type User = {
  id: number
  name: string
}

declare namespace App {
  interface Locals {
    correlationId: string
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    logger: import('./logger').Logger
  }
}
