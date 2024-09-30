import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

/**
 *  @method  GET
 *  @route   /api/articles/search?searchText=value
 *  @desc    Get Articles By Search Text
 *  @access  public
*/
export async function GET(request: NextRequest) {
    try {
        const searchText = request.nextUrl.searchParams.get('searchText')
        let articles;
        if (searchText) {
            articles = await prisma.article.findMany({
                where: {
                    title: {
                        // equals ==> searchText === value
                        // startsWith ===> searchText starts with value
                        contains: searchText,
                        mode: "insensitive"
                    }
                }
            })
        } else {
            articles = await prisma.article.findMany({ take: 6 })
        }

        return NextResponse.json(articles, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}