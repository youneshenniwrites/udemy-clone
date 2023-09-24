import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: HttpStatusCode.Unauthorized,
      });
    }

    const values = await req.json();

    const course = await db.course.update({
      where: {
        id: params.courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", {
      status: HttpStatusCode.InternalServerError,
    });
  }
}
