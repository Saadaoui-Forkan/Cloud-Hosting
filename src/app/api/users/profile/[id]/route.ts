import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { UpdateProfileDTO } from "@/utils/types";
import { verifyToken } from "@/utils/verifyToken";
import bcrypt from "bcryptjs"

interface Props {
  params: { id: string };
}

/**
 *  @method  DELETE
 *  @route   /api/users/profile/:id
 *  @desc    Delete User Profile
 *  @access  private (Only User Himself)
*/
export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(params.id) },
        });
        if (!user) {
            return NextResponse.json({ message: "User Not Found" }, { status: 404 });
        }
        
        const userFromToken = verifyToken(request)
        if (userFromToken !== null && userFromToken.id === user.id) {
            await prisma.user.delete({ where: { id: parseInt(params.id) } });
            return NextResponse.json(
                { message: "Your Profile Has Been Deleted" },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { message: "Forbidden!" },
            { status: 403 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Internal Server Error",
            },
            { status: 500 }
        );
    }
}

/**
 *  @method  PUT
 *  @route   /api/users/profile/:id
 *  @desc    Update User Profile
 *  @access  private (Only User Himself)
*/
export async function PUT(request: NextRequest, { params }: Props) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(params.id) },
        });
        if (!user) {
            return NextResponse.json({ message: "User Not Found" }, { status: 404 });
        }
        
        const userFromToken = verifyToken(request)
        if (userFromToken === null || userFromToken.id !== user.id) {
            return NextResponse.json({ message: "Access Denied!" }, { status: 403 });
        }

        const body = await request.json() as UpdateProfileDTO
        if (body.password) {
            if (body.password.length < 6) {
                return NextResponse.json(
                    {message: "The Password must contain at least 6 characters."},
                    {status: 400}
                )
            }
            const salt = await bcrypt.genSalt(10)
            body.password = await bcrypt.hash(body.password, salt)
        }
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(params.id) },
            data: {
                username: body.username,
                email: body.email,
                password: body.password,
            }
        })

        return NextResponse.json(updatedUser, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}

/**
 *  @method  GET
 *  @route   /api/users/profile/:id
 *  @desc    Get User Profile
 *  @access  private (Only User Himself)
*/
export async function GET(request: NextRequest, { params }: Props) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(params.id) },
            select: {
                id: true,
                email: true,
                username: true,
                createdAt: true,
            }
        });
        if (!user) {
            return NextResponse.json({ message: "User Not Found" }, { status: 404 });
        }
        
        const userFromToken = verifyToken(request)
        if (userFromToken === null || userFromToken.id !== user.id) {
            return NextResponse.json({ message: "Access Denied!" }, { status: 403 });
        }

        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}