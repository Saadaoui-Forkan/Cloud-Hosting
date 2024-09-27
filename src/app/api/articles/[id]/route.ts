import prisma from "@/utils/db";
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
        const article = await prisma.article.findUnique({ where: { id: parseInt(params.id) } })
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