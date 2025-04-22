import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { DecodedToken } from "./dtos";
type Payload = {
  userId: number;
  email: string;
};

export function generateToken(payload: Payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
  return token;
}

export function setCookie(jwtToken: string) {
  const cookie = serialize("token", jwtToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return cookie;
}
export function verfiyToken(token: string): DecodedToken | null {
  return jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
}

export function clearCookie() {
  const cookie = serialize("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });
  return cookie;
}
