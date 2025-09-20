
````markdown
# Scaffolding a Next.js Project

## Objective
The objective of this exercise is to understand the essence of creating a Next.js project using CLI tools like `npx`, specifically with `create-next-app`. There are multiple ways to initialize a project using this tool, and in this exercise, we will explore two approaches:

1. Using `npx create-next-app@latest` interactively, which provides multiple prompts to help set up your initial project.
2. Being familiar with the available options ahead of time and providing them directly. This is the approach we will use in this setup.

---

## Instructions

1. **Open Visual Studio Code**  
   Start a new VSCode instance and open the terminal via `Terminal -> New Terminal`.

2. **Navigate to your project directory**  
   ```bash
   cd path/to/your/projects
````

3. **Create a new Next.js project with TypeScript**
   ⚠️ **Important:** Make sure to use two regular dashes `--` in the command, not a special dash.

   ```bash
   npx create-next-app@latest alx-project-0x00 --typescript
   ```

4. **Select the following options when prompted**

   * ESLint: **Yes**
   * Tailwind CSS: **Yes**
   * Import alias: **Yes**
   * `/src` directory: **No**
   * App Router: **No**

5. **Start the application**

   ```bash
   npm run dev -- -p 3000
   ```

   This will start your development server on port 3000.

---

## Repository

* **GitHub Repository:** [alx-project-0x00-setup](https://github.com/anaol216/alx-project-0x00-setup)
* **Project Directory:** `alx-project-0x00`
* **Main File:** `README.md`

---

## Summary

By completing this exercise, you should be able to:

* Use `npx create-next-app` to scaffold a Next.js project.
* Understand the difference between interactive prompts and pre-defined options.
* Set up a TypeScript project with ESLint, Tailwind CSS, and import aliases.
* Start a Next.js development server successfully.

```
