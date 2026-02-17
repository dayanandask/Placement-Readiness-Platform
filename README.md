# 🎓 Placement Readiness Platform - v2.0
**Part of the KodeNest B2B CareerTech Platform**

A comprehensive B2B SaaS platform for student competency tracking, ATS readiness simulation, and recruiter-side talent discovery.

---

## 🚀 Key Features
- **Student Skill Heatmap**: Visual progress tracking across DSA, Core CS, and Aptitude.
- **ATS Readiness Score**: Resume analysis based on keyword density and industrial metrics.
- **Mock Interview Engine**: Time-bound assessment simulations with feedback logging.
- **Recruiter Pipeline**: Advanced filtering system to discover top-ready talent.

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Strict B2B Design)
- **ORM**: Prisma (SQLite)
- **Utils**: Lucide-React, Recharts (Radar/Bar charts)

## 🎨 Design Standards (Strict B2B)
- **Background**: `#F7F6F3` (Off-White)
- **Accent**: `#8B0000` (Deep Red)
- **Typography**: Playfair Display (Headings), Inter (Body)
- **Spacing**: 8/16/24/40/64px scale only.

## ⚙️ Installation & Setup
1. **Clone & Install**:
   ```bash
   npm install
   ```
2. **Database Push**:
   ```bash
   npx prisma db push
   ```
3. **Run Dev Server**:
   ```bash
   npm run dev
   ```
4. **Logic Verification**:
   ```bash
   node test-logic.js
   ```

## 🔨 Testing & Verification
Refer to `BREAK_TESTING.md` for the full functional verification checklist. 
Run `node verify-ui.js` to check for UI design compliance.
