import { prisma } from "@/src/utils/connect";
import { NextResponse } from "next/server";

// get single page post
export const GET = async (req: Request, { params }: { params: { slug: string } }) => {
  const { slug } = params;

  try {
    // Check if the post with the specified slug exists.
    const existingPost = await prisma.post.findUnique({
      where: { slug },
    });

    if (!existingPost) {
      // Handle the case where the post does not exist.
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    // If the post exists, proceed with the update.
    const updatedPost = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return NextResponse.json({ post: updatedPost }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};

