# 🍒 Welcome to CherryOnTech's v3.0 Website

We are a tech squad! We support each other as we learn and grow in our tech careers. We got the idea from [Mo Hampton](https://twitter.com/MoxieHampton)'s [JuneteenthConf](https://www.juneteenthconf.com/) talk, "[Breaking into Tech](https://www.youtube.com/watch?v=2N5fI5j-IIs)." Learn more about us in an upcoming blog post!

## 💻 Tech Stack

This website is built using [Astro](https://astro.build/), a static site generator that allows different frameworks to be used. We are using [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/) specifically in this Astro project.

## ⚙️ Installation

- Node.js version v22.12.0 or higher is required.
- npm is included with Node.js. If you do not have npm installed, install Node.js from the official website: https://nodejs.org/

1. Clone the repo: `git clone https://github.com/cherryontech/website-v3.0.git`
2. Go to the source folder: `cd website-v3.0`
3. Install dependencies: `npm install`
4. Run the website locally: `npm run dev`
5. Visit localhost at http://localhost:4321/

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
