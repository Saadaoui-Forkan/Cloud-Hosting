import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 *  @method  GET
 *  @route   /api/users/logout
 *  @desc    Logout User
 *  @access  private
*/
export async function GET(request: NextRequest) {
    try {
        cookies().delete('jwtToken')
        return NextResponse.json(
            { message: "Logout" },
            { status: 200 }
          );
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 })
    }
}