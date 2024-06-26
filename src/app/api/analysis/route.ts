import { ZodError, z } from "zod";
import { type NextRequest } from "next/server";
import prisma from "../../../../prisma/client";
import { analysisSchema } from "@/validationSchema/analysisSchema";

export async function GET(request: NextRequest) {
  try {
    const analysis = await prisma.analysis.findMany({
      take: 2,
      orderBy: {
        createdAt: "desc",
      },
    });
    return Response.json({ res: analysis }, { status: 200 });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Validate the request data
    const parsedData = await analysisSchema.parseAsync(await request.json());

    // Create the analysis using the validated data
    const createdAnalysis = await prisma.analysis.create({
      data: parsedData,
    });

    return Response.json({ res: parsedData }, { status: 201 });
  } catch (error: any) {
    if (error instanceof ZodError) {
      // Handle Zod validation errors
      return Response.json({ error: error.issues }, { status: 400 });
    } else {
      // Handle other errors
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
}
