import { createArticleDTO } from "@/utils/types";
import { createArticleSchema } from "@/utils/validationSchema";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 *  @method  POST
 *  @route   ~/api/articles
 *  @desc    Create New Article
 *  @access  public
 */
export async function POST(request: NextRequest) {
  try {
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
