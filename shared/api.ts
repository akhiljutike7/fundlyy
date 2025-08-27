// shared/api.ts

/** Example response type for /api/demo */
export interface DemoResponse {
  message: string;
}

/** Example shared function */
export function ping() {
  return "pong from shared API!";
}

