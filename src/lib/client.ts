import type { AppRouter } from "@/server";
import { createClient } from "jstack";

/**
 * Your type-safe API client
 * @see https://jstack.app/docs/backend/api-client
 */
export const client = createClient<AppRouter>({
  baseUrl: getBaseUrl() + "/api",
});

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_APP_DOMAIN) {
    return `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`;
  }
  return `http://localhost:3000`;
}
