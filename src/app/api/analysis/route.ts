import { type NextRequest } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    // Create the analysis using the form values
    const createdAnalysis = await prisma.analysis.create({
      data: {
        imageUrl: res.imageurl,
        description: res.description,
        pair: res.pair,
      },
    });
    return Response.json({ res } ,{status: 201});
  } catch (error) {
    return Response.json({ error } ,{status: 500});
  }
  
}
