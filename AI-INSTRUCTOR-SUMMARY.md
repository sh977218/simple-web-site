# AI Instructor Files - Complete Summary

This document provides an overview of all AI instructor files created for this NX workspace. These files specify guidelines for Angular component development with the following requirements:

## Three Core Requirements for All Angular Components

### 1. Change Detection Strategy
✅ **MUST HAVE**: `changeDetection: ChangeDetectionStrategy.OnPush` on every component

### 2. Modern Control Flow Syntax
✅ **MUST USE**: `@if`, `@for`, `@switch` (Angular 17+)  
❌ **NEVER USE**: `*ngIf`, `*ngFor`, `[ngSwitch]`

### 3. Tailwind CSS Only
✅ **MUST USE**: Tailwind utility classes in templates  
❌ **NEVER CREATE**: CSS/SCSS files for components

---

## Instructor Files by AI Platform

### 🔴 Main Instructor
- **File**: `AI-INSTRUCTOR.md` (root directory)
- **Purpose**: Comprehensive master guide with detailed examples and best practices
- **Audience**: All AI agents/assistants
- **Size**: Detailed (~400 lines)

### 🟣 Claude
- **Files**: 
  - `CLAUDE.md` (updated with instructor guidelines)
  - Location: Workspace root
- **Purpose**: Specific guidelines for Claude AI
- **Status**: Integrated into existing file

### 🟢 Gemini
- **File**: `.gemini/INSTRUCTOR.md`
- **Purpose**: Specific guidelines for Google Gemini AI
- **Length**: Focused and practical
- **Key**: Uses `contextFileName: "INSTRUCTOR.md"` pattern

### 🔵 GitHub Copilot / OpenCode
- **File**: `.opencode/INSTRUCTOR.md`
- **Purpose**: Guidelines for GitHub Copilot in VS Code
- **Format**: Quick reference with checklist

### 🟠 Codeium
- **File**: `.opencode/CODEIUM-INSTRUCTOR.md`
- **Purpose**: Specific guidelines for Codeium AI
- **Format**: Organized with sections and examples

### 🟡 Cursor IDE
- **File**: `.ai/CURSOR-INSTRUCTOR.md`
- **Purpose**: Specific guidelines for Cursor IDE's AI
- **Format**: Real-world examples and migration guide

### 📋 General Agents/Nx
- **Files**: 
  - `AGENTS.md` (updated with instructor guidelines)
  - Location: Workspace root
- **Purpose**: General guidelines for all agents working with Nx
- **Status**: Integrated into existing file

---

## File Locations Quick Reference

```
nx-workspace/
├── AI-INSTRUCTOR.md                 ← Main comprehensive guide
├── AGENTS.md                        ← Updated with Angular guidelines
├── CLAUDE.md                        ← Updated with Claude-specific guidelines
├── .ai/
│   └── CURSOR-INSTRUCTOR.md         ← Cursor IDE specific
├── .gemini/
│   └── INSTRUCTOR.md                ← Gemini specific
└── .opencode/
    ├── INSTRUCTOR.md                ← OpenCode/Copilot specific
    └── CODEIUM-INSTRUCTOR.md        ← Codeium specific
```

---

## How to Use These Instructor Files

### For AI Agents:
1. Read the specific instructor file for your platform (e.g., `.gemini/INSTRUCTOR.md` for Gemini)
2. Keep the file as context when working on Angular components
3. Refer to `AI-INSTRUCTOR.md` for comprehensive details and examples

### For Developers:
1. Review `AI-INSTRUCTOR.md` to understand the project standards
2. Share the relevant platform-specific file with your AI assistant
3. Use the checklist before committing Angular code

### For Project Maintainers:
1. All instructor files reference the three core requirements
2. Guidelines are consistent across all platforms
3. Update all files if standards change (especially `AI-INSTRUCTOR.md`)

---

## Content Summary

All instructor files cover:

| Topic | Coverage |
|-------|----------|
| Change Detection | `ChangeDetectionStrategy.OnPush` - REQUIRED |
| Control Flow | `@if`, `@for`, `@switch` - Angular 17+ syntax only |
| Styling | Tailwind classes ONLY - no CSS/SCSS files |
| State Management | Signals and Observables patterns |
| Examples | Complete working components |
| Checklists | Pre-commit validation steps |
| Migration Guide | Converting old code to new standards |

---

## Key Points (Copy to AI Context)

```
ANGULAR COMPONENT REQUIREMENTS FOR THIS PROJECT:

1. ChangeDetectionStrategy.OnPush
   - Required on EVERY component
   - No exceptions
   
2. Control Flow Syntax
   - Use: @if, @for, @switch
   - Never: *ngIf, *ngFor, [ngSwitch]
   - Every @for loop must have track function
   
3. Styling with Tailwind
   - All styles in template with Tailwind classes
   - Never create .css or .scss files
   - Never use styleUrls property
```

---

## Platform Integration Notes

### Gemini
Uses `.gemini/settings.json` with `contextFileName: "INSTRUCTOR.md"` pattern

### OpenCode/Copilot
Uses VS Code settings - recommend adding `.opencode/INSTRUCTOR.md` to workspace settings

### Claude
Uses `CLAUDE.md` which is integrated at workspace root

### Cursor
Uses `.ai/` directory for MCP integration

### Codeium
Integrated through VS Code extension settings

---

## Version Information

- **Created**: February 14, 2026
- **Angular Version**: 21+
- **Tailwind Version**: 4.x
- **Node**: Check `.nvmrc`
- **Package Manager**: npm (check `package.json`)

---

## Maintenance

To update all instructor files:
1. Modify `AI-INSTRUCTOR.md` first (master source)
2. Update platform-specific files to match
3. Keep the three core requirements consistent
4. Test with actual AI agents before deploying

---

## Related Files

- `package.json` - Project dependencies
- `nx.json` - NX workspace configuration
- `tsconfig.base.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration

---

## Quick Access Commands

```bash
# View main instructor
cat AI-INSTRUCTOR.md

# View platform-specific instructions
cat CLAUDE.md              # Claude guidelines
cat .gemini/INSTRUCTOR.md  # Gemini guidelines
cat .opencode/INSTRUCTOR.md # OpenCode/Copilot guidelines
cat .ai/CURSOR-INSTRUCTOR.md # Cursor IDE guidelines
```

---

## Support

For questions about standards:
1. Check `AI-INSTRUCTOR.md` for comprehensive details
2. Review the platform-specific file for your AI
3. Check component examples in the `apps/ui/src/app` directory for real-world usage
4. Refer to `AGENTS.md` for Nx-specific guidelines

---

**All instructor files are active and should be used by AI agents when working on this project.**

