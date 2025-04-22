import { cookies } from "next/headers";

export async function middleware() {
  const token = (await cookies()).get("token")?.value || null;
  if (token) {
  }
}

export const config = {
  matcher: ["/login", "/register"],
};
