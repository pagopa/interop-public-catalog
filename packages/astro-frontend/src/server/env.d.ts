type User = {
  id: number;
  name: string;
};

declare namespace App {
  interface Locals {
    correlationId: string;

    logger: import("./logger").Logger;
  }
}
