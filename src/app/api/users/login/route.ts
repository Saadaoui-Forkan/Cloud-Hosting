import prisma from "@/utils/db";
import { JWTPayload, LoginUserDTO } from "@/utils/types";
import { loginSchema } from "@/utils/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { setCookie } from "@/utils/generateToken";

/**
 *  @method  POST
 *  @route   /api/users/login
 *  @desc    Create New User
 *  @access  public
*/
export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as LoginUserDTO
        const validation = loginSchema.safeParse(body)
        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            );
        }

        const user = await prisma.user.findUnique({ where: { email: body.email } })
        if (!user) {
            return NextResponse.json(
                {
                    message:
                    "Invalid Email Or Password, If You Don't Have An Account Please Register First!",
                },
                { status: 400 }
            );
        }
         
        const isMatch = await bcrypt.compare(body.password, user.password)
        if (!isMatch) {
            return NextResponse.json(
                {
                    message:
                    "Invalid Email Or Password, If You Don't Have An Account Please Register First!",
                },
                { status: 400 }
            )
        }

        // generate token
        const jwtPayload: JWTPayload = {
            id: user.id,
            isAdmin: user.isAdmin,
            username: user.username
        }

        const cookie = setCookie(jwtPayload)

        const data = {
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin
        }
        return NextResponse.json(
          { message: "Authenticated", data },
          { status: 200, headers: { "Set-Cookie": cookie } }
        );
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}