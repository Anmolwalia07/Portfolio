import { db } from "@/db/db";
import { Project, User, Technologies } from "@/models/model";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
  try {
    await db();
    const userId = process.env.NEXT_PUBLIC_USERID 
    const projects = await Project.find({userId})
      .populate("technologies")

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    await db();
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const techs = formData.getAll("technologies") as string[];
    const liveLink=formData.get("liveLink") as string;
    const gitHubLink=formData.get("gitHubLink") as string;
    const userId = process.env.NEXT_PUBLIC_USERID 

    if (!title || !description || !userId || !liveLink || !gitHubLink) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const project = await Project.create({
      title,
      description,
      userId,
      liveLink,
      gitHubLink
    });

    const createdTechs = await Promise.all(
      techs.map((tech) =>
        Technologies.create({ name: tech, projectId: project._id })
      )
    );

    project.technologies = createdTechs.map((t) => t._id);
    await project.save();

    await User.findByIdAndUpdate(userId, { $push: { projects: project._id } });

    return NextResponse.json(
      { message: "Project created successfully", project },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error)
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
