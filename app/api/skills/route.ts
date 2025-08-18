import { db } from "@/db/db";
import { Skills, User } from "@/models/model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await db();

    const {name} = await req.json();

    if (!name) {
      return NextResponse.json(
        { error: "Skill name is required" },
        { status: 400 }
      );
    }

    const userId = process.env.NEXT_PUBLIC_USERID; 
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const skill = await Skills.create({ name ,userId});

    await User.findByIdAndUpdate(
      userId,
      { $push: { skills: skill._id } },
      { new: true }
    ).populate("skills");

    return NextResponse.json(
      { message: "Skill added and user updated", skill },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
