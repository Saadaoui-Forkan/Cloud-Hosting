import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWTPayload } from "@/utils/types";

interface Props {
  params: { id: string };
}

/**
 *  @method  DELETE
 *  @route   /api/profile/:id
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

        const authToken = request.headers.get('authToken') as string
        const userFromToken = jwt.verify(authToken, process.env.JWT_TOKEN as string) as JWTPayload
        if (userFromToken.id === user.id) {
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
