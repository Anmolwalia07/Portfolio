import {db} from "@/db/db";
import { User } from "@/models/model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await db();
    const users = await User.findOne()
      .populate("skills") 
      .populate({
        path: "projects",
        populate: {
          path: "technologies",
        },
      });

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Internal Server error" }), {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  await db();
  const body = await req.json();
  const {name,email}=body;
  if(!name||!email){
    return NextResponse.json({message:"Input details missing"},{status:400})
  }
  try{
   const newUser = await User.create({name,email});
    const user= await newUser.save()
   return NextResponse.json({newUser,user},{status:200});
  }catch(err){
    console.log(err)
   return NextResponse.json({message:"Internal Server Err"},{status:400});
  }
}


