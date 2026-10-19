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

## Airtable API Worker

Pages that use Airtable should retrieve data through the Cloudflare Worker. Keep the Airtable personal access token in the Worker only; never put it in frontend environment variables. A single read-only PAT can serve multiple pages and bases when it has access to each required base. Configure a separate base ID for each Airtable data source.

For local development, copy `workers/terms-api/.dev.vars.example` to `workers/terms-api/.dev.vars`, then set `AIRTABLE_PAT` and the base ID variables required by the pages you are working on. Set `PUBLIC_TERMS_API_URL` in the root `.env` to the Worker origin; use `http://localhost:8787` locally. Run `npm run terms-worker:dev` and `npm run dev` in separate terminals.

The local Worker caches Airtable responses for one week to reduce API calls during development. The deployed Worker uses a five-minute cache by default. Airtable changes appear after the cached response expires; to show an update immediately, delete or purge the corresponding cached Worker response.

To deploy, set `AIRTABLE_PAT` as a Cloudflare Worker secret and configure the base ID variables used by the implemented endpoints, then run `npm run terms-worker:deploy`.

The current implementation is the Terms and Conditions endpoint, `GET /api/terms-and-conditions`. It reads published records from the `Terms and Conditions` table in the base configured by `AIRTABLE_POLICIES_BASE_ID`, in display order. Other page endpoints can use their own base ID variables and data mappings.
