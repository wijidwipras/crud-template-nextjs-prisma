import { NextResponse } from "next/server";

import prisma from "../../../../prisma/client";

export async function GET() {
    //get all posts
    const blogs = await prisma.blog.findMany();
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Data blogs fetched successfully",
        data: blogs,
      },
      {
        status: 200,
      }
    );
  }