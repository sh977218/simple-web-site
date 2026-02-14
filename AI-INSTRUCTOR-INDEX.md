# 📚 AI Instructor Files - Complete Index

**Generated: February 14, 2026**  
**Purpose**: Centralized AI guidelines for Angular component development in this NX workspace

---

## 📋 Overview

This workspace now includes comprehensive AI instructor files that specify three mandatory requirements for all Angular components:

1. **Change Detection**: `ChangeDetectionStrategy.OnPush` on every component
2. **Control Flow**: New Angular 17+ syntax (`@if`, `@for`, `@switch`)
3. **Styling**: Tailwind CSS utility classes only (no CSS files)

---

## 📂 File Structure

### Root Directory Files

| File | Purpose | Lines | Audience |
|------|---------|-------|----------|
| **AI-INSTRUCTOR.md** | Comprehensive master guide with detailed examples | ~400 | All agents |
| **AI-INSTRUCTOR-SUMMARY.md** | Overview of all instructor files | ~250 | Developers & managers |
| **QUICK-REFERENCE.md** | Quick checklist and common patterns | ~300 | Developers |
| **CLAUDE.md** | Updated with Claude-specific guidelines | ~100 | Claude AI |
| **AGENTS.md** | Updated with Angular guidelines for Nx | ~72 | All agents & Nx tools |

### Platform-Specific Files

```
.ai/
└── CURSOR-INSTRUCTOR.md          (~350 lines) - Cursor IDE specific guidance
    Focus: Real-world examples, migration patterns, file structure

.gemini/
└── INSTRUCTOR.md                 (~250 lines) - Google Gemini specific guidance
    Focus: Step-by-step patterns, Tailwind reference, component examples

.opencode/
├── INSTRUCTOR.md                 (~250 lines) - GitHub Copilot / OpenCode guidance
│   Focus: Quick reference, checklist format, common patterns
└── CODEIUM-INSTRUCTOR.md         (~280 lines) - Codeium AI specific guidance
    Focus: Standards, examples, implementation checklist
```

---

## 📖 Reading Guide

### For AI Assistants

1. **First visit**: Read your platform-specific file
   - Cursor users → `.ai/CURSOR-INSTRUCTOR.md`
   - Gemini users → `.gemini/INSTRUCTOR.md`
   - Copilot users → `.opencode/INSTRUCTOR.md`
   - Codeium users → `.opencode/CODEIUM-INSTRUCTOR.md`
   - Claude users → `CLAUDE.md`

2. **For details**: Refer to `AI-INSTRUCTOR.md`

3. **Quick lookup**: Use `QUICK-REFERENCE.md`

### For Developers

1. **Learn standards**: Read `AI-INSTRUCTOR.md`
2. **Quick check**: Use `QUICK-REFERENCE.md` before commit
3. **Overview**: Check `AI-INSTRUCTOR-SUMMARY.md`

### For Project Managers

- Check `AI-INSTRUCTOR-SUMMARY.md` for overview
- Review `QUICK-REFERENCE.md` for team standards
- Reference `AI-INSTRUCTOR.md` section 7 (Checklist) for validation

---

## 🎯 Three Core Requirements

All instructor files emphasize these **mandatory** requirements:

### Requirement 1: Change Detection Strategy
```typescript
@Component({
  // ... other config
  changeDetection: ChangeDetectionStrategy.OnPush
})
```
**Why**: Better performance, predictable behavior, required for large apps

### Requirement 2: Modern Control Flow Syntax
```angular
<!-- Angular 17+ Required -->
@if (condition) { ... }
@for (let item of items; track item.id) { ... }
@switch (value) { @case ('a') { ... } }

<!-- NOT ALLOWED -->
*ngIf="condition"
*ngFor="let item of items"
[ngSwitch]="value"
```
**Why**: Better readability, type safety, improved template syntax

### Requirement 3: Tailwind CSS Only
```html
<!-- Template with Tailwind -->
<div class="p-4 bg-white rounded-lg shadow-md">Content</div>

<!-- NOT ALLOWED -->
<style>div { padding: 1rem; ... }</style>
<!-- NO .css files -->
```
**Why**: Consistency, faster development, smaller bundle size, no CSS-in-JS overhead

---

## 📊 Content Breakdown

### AI-INSTRUCTOR.md (Main Guide)
- Sections: 11 comprehensive sections
- Includes: Code examples, before/after comparisons, best practices
- Coverage: All three requirements with detailed explanations
- Examples: Complete working components with explanations

### Platform-Specific Files
Each platform-specific file includes:
- ✅ The three core requirements
- ✅ Code examples for that platform
- ✅ Common patterns and quick reference
- ✅ Implementation checklist
- ✅ Real-world working examples

### QUICK-REFERENCE.md
- Format: Cheat sheet / one-page reference
- Contains: Common patterns, migration guide, do's and don'ts
- Use when: Need quick answers or pre-commit verification

---

## 🔍 Cross-References

Each file references the others appropriately:

```
AI-INSTRUCTOR.md (Master) ←→ QUICK-REFERENCE.md (Cheat sheet)
                 ↓
    CLAUDE.md, AGENTS.md, Platform-specific files
                 ↓
          AI-INSTRUCTOR-SUMMARY.md (Overview)
```

---

## 🚀 How to Use

### Scenario 1: AI Assistant Starting on Component
1. Read platform-specific instructor file
2. Bookmark `QUICK-REFERENCE.md`
3. Refer to `AI-INSTRUCTOR.md` for detailed patterns

### Scenario 2: Developer Before Committing Code
1. Check `QUICK-REFERENCE.md` checklist
2. Verify all three requirements are met
3. Review examples in `AI-INSTRUCTOR.md` if needed

### Scenario 3: Team Onboarding
1. Share `AI-INSTRUCTOR-SUMMARY.md` overview
2. Provide `QUICK-REFERENCE.md` to developers
3. Point AI assistants to platform-specific files

### Scenario 4: Code Review
1. Use checklist from `QUICK-REFERENCE.md`
2. Refer to `AI-INSTRUCTOR.md` examples for guidance
3. Verify all three requirements are present

---

## 📝 File Details

### AI-INSTRUCTOR.md
**Sections:**
1. Angular Component Specifications (Control Flow)
2. Change Detection Strategy
3. Styling Guidelines (Tailwind)
4. Project Structure Guidelines
5. General Code Standards
6. Testing Guidelines
7. NX Workspace Integration
8. File Naming Conventions
9. Checklist for Component Creation
10. Complete Examples
11. Important Notes for AI Agents

### CLAUDE.md
**Sections:**
- Critical Requirements (Control Flow, Change Detection, Styling)
- When Creating Components
- When Modifying Components
- State Management Best Practices
- Nx Workspace Guidelines
- Reference Files

### AGENTS.md
**Sections:**
- General Nx Guidelines
- Scaffolding & Generators
- When to use nx_docs
- Angular Component Guidelines (NEW)
- Critical Requirements (NEW)

### QUICK-REFERENCE.md
**Sections:**
- Three Non-Negotiable Requirements
- Component Checklist
- Common Tailwind Patterns
- Migration: Old → New
- State Management
- Complete Component Template
- Do's and Don'ts Table
- Real World Example
- Where to Find Full Guidelines

### Platform-Specific Files
All include:
- Angular Component Critical Requirements
- Code examples
- Common Patterns
- Implementation Examples
- Checklists
- Links to main documentation

---

## 🎓 Learning Path

**For Someone New to the Project:**

1. Read `AI-INSTRUCTOR-SUMMARY.md` (5 min) - Get the overview
2. Review `QUICK-REFERENCE.md` (10 min) - Learn the requirements
3. Study `AI-INSTRUCTOR.md` examples (20 min) - See real components
4. Use `QUICK-REFERENCE.md` checklist (ongoing) - Verify your code

**For an AI Assistant:**

1. Read platform-specific file (10 min) - Learn the requirements
2. Bookmark `QUICK-REFERENCE.md` - Quick lookup
3. Reference `AI-INSTRUCTOR.md` - For examples and patterns

---

## 📌 Important Notes

### Mandatory Requirements
- ✅ **NO EXCEPTIONS**: All three requirements apply to every component
- ✅ **Consistency**: Files are synchronized in requirements
- ✅ **Active**: All files are active and should be used

### File Governance
- Master source: `AI-INSTRUCTOR.md`
- Platform files: Derived from master source
- Updates: Modify master first, then sync to platform files
- Maintenance: Keep all files synchronized on major updates

### Angular Version Context
- Angular: 21+ (modern features available)
- Tailwind: 4.x (latest utilities)
- Node: Check `.nvmrc`
- Package Manager: npm (see `package.json`)

---

## 🔗 Quick Links to Files

**Master Guides:**
- `AI-INSTRUCTOR.md` - Full comprehensive guide
- `QUICK-REFERENCE.md` - One-page cheat sheet

**Workspace Integration:**
- `AGENTS.md` - Nx and general guidelines
- `CLAUDE.md` - Claude AI guidelines

**Platform-Specific:**
- `.ai/CURSOR-INSTRUCTOR.md` - Cursor IDE
- `.gemini/INSTRUCTOR.md` - Google Gemini
- `.opencode/INSTRUCTOR.md` - GitHub Copilot
- `.opencode/CODEIUM-INSTRUCTOR.md` - Codeium

**Overview:**
- `AI-INSTRUCTOR-SUMMARY.md` - File overview
- `AI-INSTRUCTOR-INDEX.md` - This file

---

## ❓ FAQ

**Q: Which file should I read first?**
A: Your platform-specific file. Find it in the structure above.

**Q: What if my platform isn't listed?**
A: Use `QUICK-REFERENCE.md` or `AI-INSTRUCTOR.md` directly.

**Q: Are these requirements optional?**
A: No. All three requirements are mandatory with no exceptions.

**Q: What if I find conflicting advice?**
A: Refer to `AI-INSTRUCTOR.md` as the source of truth.

**Q: Can I use `*ngIf` instead of `@if`?**
A: No. The new syntax is mandatory.

**Q: Do I really need to avoid all CSS files?**
A: Yes. All styling goes in templates with Tailwind.

---

## 📞 Support

**For questions about:**
- **Standards**: See `AI-INSTRUCTOR.md`
- **Specific examples**: See `QUICK-REFERENCE.md`
- **Your platform**: See your platform-specific file
- **Overview**: See `AI-INSTRUCTOR-SUMMARY.md`

---

## 📈 Metrics

| Metric | Value |
|--------|-------|
| Total files created | 8 |
| Total lines of guidance | ~3,000+ |
| Platform-specific guides | 5 |
| Code examples included | 30+ |
| Checklists provided | 5+ |
| Coverage areas | 11 |

---

## 🏁 Getting Started

1. **Bookmark this file** for future reference
2. **Read your platform file** if you're an AI assistant
3. **Save QUICK-REFERENCE.md** for quick lookups
4. **Review AI-INSTRUCTOR.md** for comprehensive details
5. **Share with your team** as needed

---

**Status**: ✅ All files active and ready for use  
**Last Updated**: February 14, 2026  
**Version**: 1.0  
**Maintenance**: Keep synchronized with `AI-INSTRUCTOR.md`

---

## Next Steps

- Share `QUICK-REFERENCE.md` with development team
- Point all AI assistants to their platform-specific files
- Use checklist in `QUICK-REFERENCE.md` for code reviews
- Refer to `AI-INSTRUCTOR.md` examples for training

