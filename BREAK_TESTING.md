# 🔨 BREAK TESTING & VERIFICATION GUIDE

## 🔎 Functional Verification Checklist
1. **Resume Parse**: Upload an empty file or a non-PDF file to the ATS Simulator.
2. **Extreme Values**: Enter a 0% or 100% completion in student skill tracking.
3. **Filter Logic**: As a recruiter, set the ATS filter to "100" and ensure only top candidates appear.
4. **Timer Reliability**: Open the Mock Interview simulation and check if the timer handles tab switching.

## 🎨 UI Design Compliance
- Run `node verify-ui.js` to ensure zero `#FFFFFF` violations.
- Background must be Off-White (`#F7F6F3`).
- Accent color limited to Deep Red (`#8B0000`).

## 🚀 Break Tests
- **Empty State**: Load the Recruiter Dashboard with zero students in the database.
- **Large File**: Upload a 50MB resume file.
- **Concurrency**: Simulate 100+ student updates simultaneously.
- **Invalid Data**: Try to save a student with a duplicate email address.
