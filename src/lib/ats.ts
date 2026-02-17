export function calculateATSScore(text: string): number {
    const keywords = ['react', 'next.js', 'typescript', 'dsa', 'algorithms', 'prisma', 'api', 'backend'];
    const lowerText = text.toLowerCase();

    let score = 50; // Base score

    keywords.forEach(keyword => {
        if (lowerText.includes(keyword)) {
            score += 5;
        }
    });

    // Length check
    if (text.length > 500) score += 10;

    return Math.min(score, 100);
}
