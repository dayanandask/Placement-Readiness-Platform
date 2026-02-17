import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const minScore = parseInt(searchParams.get('minScore') || '0');

    const students = await prisma.student.findMany({
        where: {
            atsScore: { gte: minScore }
        },
        include: { interviews: true },
        orderBy: { readinessIndex: 'desc' }
    });

    return NextResponse.json(students);
}

export async function POST(req: Request) {
    const body = await req.json();
    const student = await prisma.student.create({
        data: body
    });
    return NextResponse.json(student);
}
