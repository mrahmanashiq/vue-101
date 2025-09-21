# Git Setup and Version Control Guide

## 📋 Initial Setup

### 1. Initialize Git Repository
```bash
cd f:\dev\Vue\LMS\eduhub-lms
git init
```

### 2. Create .gitignore
```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Temporary folders
tmp/
temp/
```

### 3. Initial Commit Structure
```bash
git add .
git commit -m "Initial commit: EduHub LMS Phase 1 - Vue.js Basics"
```

## 🌿 Branch Strategy

### Main Branches
- `main` - Production ready code
- `develop` - Development branch for new features

### Feature Branches
- `phase-1-basics` ✅ (Current)
- `phase-2-components` 
- `phase-3-advanced-components`
- `phase-4-forms-http`
- `phase-5-routing`
- `phase-6-state-management`
- `phase-7-authentication`
- `phase-8-production`

## 📝 Commit Message Convention

### Format
```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(phase1): add course search functionality
fix(ui): resolve responsive design issues on mobile
docs(readme): update installation instructions
style(css): improve card hover animations
refactor(components): extract reusable button component
```

## 🚀 Workflow for Each Phase

### Starting a New Phase
```bash
# Create new branch from main
git checkout main
git pull origin main
git checkout -b phase-2-components

# Work on features...
git add .
git commit -m "feat(phase2): implement course card component"

# Push to remote
git push -u origin phase-2-components
```

### Merging Phase to Main
```bash
# Switch to main
git checkout main
git pull origin main

# Merge phase branch
git merge phase-2-components

# Tag the release
git tag -a v1.2.0 -m "Phase 2: Components Architecture Complete"

# Push to remote
git push origin main
git push origin --tags
```

## 📦 Release Versioning

### Version Format: `v{major}.{minor}.{patch}`

- **Major**: New phase with significant changes
- **Minor**: New features within a phase  
- **Patch**: Bug fixes and minor improvements

### Phase Versions
- `v1.0.0` - Phase 1: Vue.js Basics
- `v2.0.0` - Phase 2: Components & Props  
- `v3.0.0` - Phase 3: Advanced Components
- `v4.0.0` - Phase 4: Forms & HTTP
- `v5.0.0` - Phase 5: Routing
- `v6.0.0` - Phase 6: State Management
- `v7.0.0` - Phase 7: Authentication
- `v8.0.0` - Phase 8: Production Ready

## 🔄 Deployment Integration

### GitHub Actions (Future)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
    tags: [ 'v*' ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Netlify
        uses: netlify/actions/build@master
        with:
          publish-dir: ./
```

### Netlify Deployment
1. Connect GitHub repository
2. Set build command: `npm run build` (for later phases)
3. Set publish directory: `dist/` (for later phases)
4. Auto-deploy on push to main

## 📊 Progress Tracking

### GitHub Issues Template
```markdown
## Phase X Feature Implementation

### Description
Brief description of the feature

### Acceptance Criteria
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

### Vue.js Concepts Used
- [ ] Concept 1
- [ ] Concept 2

### Phase
Phase X: [Phase Name]

### Priority
High/Medium/Low
```

### Project Board Columns
1. **Backlog** - Future features
2. **Todo** - Ready to start
3. **In Progress** - Currently working
4. **Review** - Code review needed
5. **Done** - Completed features

## 🏷️ Git Commands Quick Reference

```bash
# Clone repository
git clone <repository-url>

# Check status
git status

# Add files
git add .
git add <filename>

# Commit changes
git commit -m "commit message"

# Push changes
git push origin <branch-name>

# Pull latest changes
git pull origin <branch-name>

# Create new branch
git checkout -b <new-branch-name>

# Switch branch
git checkout <branch-name>

# Merge branch
git merge <branch-name>

# View commit history
git log --oneline

# Create tag
git tag -a v1.0.0 -m "Version 1.0.0"

# Push tags
git push origin --tags
```

## 🌐 Remote Repository Setup

### GitHub Repository
1. Create new repository: `eduhub-lms`
2. Add description: "Progressive Vue.js Learning Management System"
3. Add topics: `vuejs`, `lms`, `education`, `frontend`, `javascript`

### Connect Local to Remote
```bash
git remote add origin https://github.com/yourusername/eduhub-lms.git
git branch -M main
git push -u origin main
```

---

**Ready to version control your Vue.js learning journey!** 🎯
