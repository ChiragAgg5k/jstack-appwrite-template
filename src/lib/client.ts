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
  if (process.env.NODE_ENV === "production" && process.env.APP_DOMAIN) {
    return `https://${process.env.APP_DOMAIN}`;
  }
  return `http://localhost:3000`;
}
