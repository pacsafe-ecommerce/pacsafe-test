# Pacsafe Online Store 2.0 Migration - Testing Environment

## Table of Contents

- [Pacsafe Online Store 2.0 Migration - Testing Environment](#pacsafe-online-store-20-migration---testing-environment)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Development Environment](#development-environment)
    - [1. Required Tools](#1-required-tools)
    - [2. Recommended Code Editors](#2-recommended-code-editors)
  - [Project Setup](#project-setup)
  - [Code Standards](#code-standards)
  - [Development Workflow](#development-workflow)
  - [Testing \& QA](#testing--qa)
  - [Deployment Process](#deployment-process)
  - [Version Control](#version-control)
  - [Communication \& Documentation](#communication--documentation)
  - [Security Best Practices](#security-best-practices)

## Introduction

This document serves as the **Standard Operating Procedures (SOPs)** for developers working on Shopify projects. It ensures consistency, efficiency, and high-quality code delivery across all projects.

## Development Environment

### 1. Required Tools

- **Node.js** (Latest LTS version)
- **Git & GitHub**
- **Shopify CLI**
- **Vite** for asset bundling
- **Tailwind CSS** for styling
- **PostCSS & Autoprefixer**
- **ClickUp** for project management

### 2. Recommended Code Editors

- **VS Code** (with Shopify Liquid extension)
- **JetBrains WebStorm**

## Project Setup

1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start development server:
   ```sh
   npm run dev
   ```
4. Connect to Shopify Theme:
   ```sh
   shopify theme serve
   ```

## Code Standards

- Follow **Prettier** & **ESLint** rules.
- Use **BEM methodology** for CSS naming.
- Maintain consistent **Liquid templating** practices.
- Use **modular JavaScript** with ES6+ syntax.
- Ensure **accessibility (WCAG 2.1)** compliance.

## Development Workflow

1. **Pull latest changes** from `main` branch.
2. **Create a new branch** based on task:
   ```sh
   git checkout -b feature/task-name
   ```
3. Develop & test changes locally.
4. **Commit messages must follow standards:**
   ```sh
   git commit -m "[feature] Implement XYZ functionality"
   ```
5. Push changes to the remote branch.
6. **Submit a Pull Request (PR) for review.**
7. Merge after approval.

## Testing & QA

- Run **automated tests** before PR submission.
- Perform **browser testing** (Chrome, Firefox, Safari, Edge).
- Use Shopify's **theme check tool**:
  ```sh
  shopify theme check
  ```

## Deployment Process

1. Merge to `staging` branch.
2. Deploy to **staging environment**.
3. QA & client approval.
4. Deploy to **production** using Shopify CLI:
   ```sh
   shopiayman theme push --allow-live
   ```

## Version Control

- Follow **Git Flow** methodology.
- Keep `main` branch **protected**.
- Use **Pull Requests (PRs)** for all changes.
- **Rebase** before merging to avoid conflicts.

## Communication & Documentation

- Use **ClickUp** for task management.
- Document **all major changes** in the repo’s `README.md`.
- Maintain an **internal knowledge base (Notion/Confluence)**.

## Security Best Practices

- Store **API keys in environment variables**.
- Implement **role-based access control** for Shopify admin.
- Regularly **audit third-party apps** for security.

---

This SOP ensures a streamlined workflow for Shopify development, maintaining **efficiency, security, and collaboration**. 🚀
