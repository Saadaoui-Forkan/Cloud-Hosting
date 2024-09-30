import prisma from "@/utils/db";
import { UpdateCommentDTO } from "@/utils/types";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: string }
}

/**
 *  @method  PUT
 *  @route   /api/comments/:id
 *  @desc    Update A Comment
 *  @access  private (Only The Comment Owner)
*/
export async function PUT(request: NextRequest, { params }: Props) {
    try {
        const comment = await prisma.comment.findUnique(
            { where: { id: parseInt(params.id) } }
        )
        if (!comment) {
            return NextResponse.json({ message: "Comment Not Found" }, { status: 404 });
        }

        const user = verifyToken(request)
        if (user === null || user.id !== comment.userId) {
            return NextResponse.json({ message: "Access Denied!" }, { status: 403 });
        }

        const body = await request.json() as UpdateCommentDTO
        const updatedComment = await prisma.comment.update(
            { where : { id: parseInt(params.id) } ,
            data: { text: body.text }
        })

        return NextResponse.json(updatedComment, { status: 200 })
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
 *  @method  DELETE
 *  @route   /api/comments/:id
 *  @desc    DElete A Comment
 *  @access  private (Only The Admin Or Comment Owner)
*/
export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        const comment = await prisma.comment.findUnique(
            { where: { id: parseInt(params.id) } }
        )
        if (!comment) {
            return NextResponse.json({ message: "Comment Not Found" }, { status: 404 });
        }

        const user = verifyToken(request)
        if (user === null) {
            return NextResponse.json({ message: "No Token Provided! Access Denied!" }, { status: 401 });
        }

        if (user.isAdmin === true || user.id !== comment.userId) {
            await prisma.comment.delete(
                { where: { id: parseInt(params.id) } }
            )
            return NextResponse.json(
                { message: "Comment Deleted Successfully" }, 
                { status: 200 }
            );
        }

        return NextResponse.json(
            { message: "Not Allowed, Access Denied!" }, 
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