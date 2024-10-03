import { NextRequest } from "next/server";
import { JWTPayload } from "./types";
import jwt from "jsonwebtoken";

// Verify Token For API
export function verifyToken(request: NextRequest) : JWTPayload | null {
    try {
        const jwtToken = request.cookies.get("jwtToken")
        const token = jwtToken?.value as string

        if (!token) {
            return null
        }

        const privateKey = process.env.JWT_TOKEN as string
        const userPayload = jwt.verify(token, privateKey) as JWTPayload

        return userPayload
    } catch (error) {
        return null
    }
}

// Verify Token For Client
export function verifyTokenClient(token: string) : JWTPayload | null {
    try {
        const privateKey = process.env.JWT_TOKEN as string
        const userPayload = jwt.verify(token, privateKey) as JWTPayload

        if(!userPayload) return null

        return userPayload
    } catch (error) {
        return null
    }
}