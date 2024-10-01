import prisma from "@/utils/db";
import { updateArticleDTO } from "@/utils/types";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: string }
}

/**
 *  @method  GET
 *  @route   /api/articles/:id
 *  @desc    Get Single Article
 *  @access  public
*/
export async function GET(request: NextRequest, { params }: Props) {
    try {
        const article = await prisma.article.findUnique({ 
            where: { id: parseInt(params.id) }, 
            include: {
                // comments: true  ==> getting all comments without any order
                comments: {
                    include: {
                        user: {
                            select: {
                                username: true,
                                email: true,
                            }
                        },
                    },
                    orderBy: { createdAt: "desc" }
                }
            }
        })
        if (!article) {
            return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
        }
        return NextResponse.json(article, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}

/**
 *  @method  PUT
 *  @route   /api/articles/:id
 *  @desc    Update Single Article
 *  @access  private (only admin)
*/
export async function PUT(request: NextRequest, { params }: Props) {
    try {
        const user = verifyToken(request)
        if (user === null || user.isAdmin === false) {
            return NextResponse.json({
                message: "Only Admin, Access Denied!"
            }, { status: 403 })
        }

        const article = await prisma.article.findUnique({
            where: { id: parseInt(params.id) },
        });
        if (!article) {
            return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
        }
    
        const body = (await request.json()) as updateArticleDTO
        const updateArticle = await prisma.article.update({
            where: { id: parseInt(params.id) },
            data: {
                title: body.title,
                description: body.description,
            }
        })
        return NextResponse.json(updateArticle, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}

/**
 *  @method  DELETE
 *  @route   /api/articles/:id
 *  @desc    Delete Single Article
 *  @access  private (only admin)
*/
export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        const user = verifyToken(request)
        if (user === null || user.isAdmin === false) {
            return NextResponse.json({
                message: "Only Admin, Access Denied!"
            }, { status: 403 })
        }

        const article = await prisma.article.findUnique({
            where: { id: parseInt(params.id) },
            include: { comments: true }
        });
        if (!article) {
            return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
        }
    
        await prisma.article.delete({
            where: { id: parseInt(params.id) },
        })

        // Deleting comments that belong to this article
        const commentIds = article?.comments.map(comment => comment.id)
        await prisma.comment.deleteMany({
            where: { id: { in: commentIds } }
        })
        
        return NextResponse.json({ message: "Article Deleted" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}