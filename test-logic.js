const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
    console.log("--- 🕵️ PLACEMENT READINESS LOGIC VERIFICATION ---");

    try {
        // 1. Clean up
        await prisma.mockInterview.deleteMany({});
        await prisma.student.deleteMany({});

        // 2. Test Add Student
        console.log("1. Testing: Create Student Profile...");
        const student = await prisma.student.create({
            data: {
                name: "John Doe",
                email: "john@university.edu",
                atsScore: 85,
                readinessIndex: 0.92,
                skills: JSON.stringify({ dsa: 80, systemDesign: 70 })
            }
        });
        console.log("✅ Student created:", student.name);

        // 3. Test Recruiter Filtering (Simulate API)
        console.log("2. Testing: Recruiter Talent Search...");
        const filtered = await prisma.student.findMany({
            where: {
                atsScore: { gte: 80 }
            }
        });
        if (filtered.length > 0) {
            console.log("✅ PASSED: Filtered candidates found (Score >= 80)");
        } else {
            console.log("❌ FAILED: Filter logic failed");
        }

        // 4. Test Mock Interview Session
        console.log("3. Testing: Assessment Scoring...");
        const interview = await prisma.mockInterview.create({
            data: {
                studentId: student.id,
                score: 75,
                feedback: "Strong fundamentals, needs work on complexity analysis."
            }
        });
        console.log("✅ Interview recorded with score:", interview.score);

        // 5. Final verification of relational data
        const fullProfile = await prisma.student.findUnique({
            where: { id: student.id },
            include: { interviews: true }
        });
        console.log("4. Testing: Data Integrity...");
        if (fullProfile.interviews.length === 1) {
            console.log("✅ PASSED: Relational integrity verified");
        } else {
            console.log("❌ FAILED: Relationship link broken");
        }

    } catch (err) {
        console.error("❌ ERROR DURING VERIFICATION:", err);
    } finally {
        await prisma.$disconnect();
    }
}

test();
