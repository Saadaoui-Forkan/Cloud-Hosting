import jwt from "jsonwebtoken";
import { JWTPayload } from "./types";

export function generateJWT(jwtPayload: JWTPayload): string {
    const privateKey = process.env.JWT_TOKEN as string

    const token = jwt.sign(jwtPayload, privateKey, {
        expiresIn: '1d'
    })

    return token
}