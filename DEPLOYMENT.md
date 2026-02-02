# Deployment Guide

This project is ready to be deployed to popular static hosting providers like Vercel and Netlify. Configuration files (`vercel.json` and `netlify.toml`) have been added to handle Single Page Application (SPA) routing.

## Option 1: Vercel (Recommended)

Vercel is optimized for frontend frameworks and offers a seamless deployment experience.

### Steps:
1.  **Push to GitHub**: Ensure your project is pushed to a GitHub repository.
2.  **Sign up/Login**: Go to [vercel.com](https://vercel.com) and sign up with GitHub.
3.  **Add New Project**:
    *   Click **"Add New..."** -> **"Project"**.
    *   Import your `zk-rehab-sphere` repository.
4.  **Configure**:
    *   **Framework Preset**: Select **Vite**.
    *   **Root Directory**: Ensure it's set to the root (default).
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default).
5.  **Deploy**: Click **"Deploy"**.

Vercel will detect the `vercel.json` file and automatically configure routing.

## Option 2: Netlify

Netlify is another excellent option for static site hosting.

### Steps:
1.  **Push to GitHub**: Ensure your project is pushed to a GitHub repository.
2.  **Sign up/Login**: Go to [netlify.com](https://netlify.com) and sign up with GitHub.
3.  **Add New Site**:
    *   Click **"Add new site"** -> **"Import from existing project"**.
    *   Select **GitHub**.
    *   Authorize and pick your `zk-rehab-sphere` repository.
4.  **Configure**:
    *   **Build command**: `npm run build`.
    *   **Publish directory**: `dist`.
5.  **Deploy**: Click **"Deploy site"**.

Netlify will detect the `netlify.toml` file and automatically configure routing.

## Manual Build (for other providers)

If you are using a different provider (e.g., GitHub Pages, AWS S3):

1.  Run `npm run build` locally.
2.  The output will be in the `dist` folder.
3.  Upload the contents of the `dist` folder to your web server.
4.  *Note: You may need to configure your server to redirect all requests to `index.html` for routing to work.*
