import { ARTICLES_PER_PAGE } from "@/utils/constants";
import prisma from "@/utils/db";
import { createArticleDTO } from "@/utils/types";
import { createArticleSchema } from "@/utils/validationSchema";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

/**
 *  @method  GET
 *  @route   /api/articles
 *  @desc    Get All Articles
 *  @access  public
*/
export async function GET(request: NextRequest) {
    try {
        const pageNumber = request.nextUrl.searchParams.get("pageNumber") || "1"
        
        const articles = await prisma.article.findMany({
            skip: ARTICLES_PER_PAGE * (parseInt(pageNumber) - 1),
            take: ARTICLES_PER_PAGE,
            orderBy: {
                createdAt: "desc", 
            }
        })
        return NextResponse.json(articles, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}

/**
 *  @method  POST
 *  @route   /api/articles
 *  @desc    Create New Article
 *  @access  private (only admin)
*/
export async function POST(request: NextRequest) {
    try {
        const user = verifyToken(request)
        if (user === null || user.isAdmin === false) {
            return NextResponse.json({
                message: "Only Admin, Access Denied!"
            }, { status: 403 })
        }
        
        const body = (await request.json()) as createArticleDTO;
        const validation = createArticleSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            );
        }
        const newArticle = await prisma.article.create({
            data: {
                title: body.title,
                description: body.description,
            },
        });
        return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}
