import prisma from "@/utils/db";
import { JWTPayload, RegisterUserDTO } from "@/utils/types";
import { registerSchema } from "@/utils/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateJWT } from "@/utils/generateToken";

/**
 *  @method  POST
 *  @route   /api/users/register
 *  @desc    Create New User
 *  @access  public
*/
export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as RegisterUserDTO
        // user validation with zod
        const validation = registerSchema.safeParse(body)
        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            );
        }
        // check if user exist
        const user = await prisma.user.findUnique({ where: { email: body.email } })
        if (user) {
            return NextResponse.json({ message: "User Already Exist" }, { status: 404 })
        }
        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.password, salt)
        // create new user in database
        const newUser = await prisma.user.create({
            data: {
                username: body.username,
                email: body.email,
                password: hashedPassword
            },
            select: {
                username: true,
                id: true,
                email: true,
                isAdmin: true,
            }
        })
        // generate token
        const jwtPayload : JWTPayload = {
            id: newUser.id,
            isAdmin: newUser.isAdmin,
            username: newUser.username
        }
        const token = generateJWT(jwtPayload)
        // send data to database
        return NextResponse.json({ ...newUser, token }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}