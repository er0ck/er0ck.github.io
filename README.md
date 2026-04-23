# erict.net

Personal blog built with [Jekyll](https://jekyllrb.com/) and deployed to GitHub Pages at [erict.net](https://erict.net).

## Prerequisites

- Ruby (3.3 recommended)
- Bundler: `gem install bundler`

## Setup

Install dependencies:

```bash
bundle install
```

## Writing Posts

Posts live in `_posts/` and must follow Jekyll's naming convention:

```
YYYY-MM-DD-your-post-title.md
```

Each post needs front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
tags: tag1 tag2
permalink:
---
```

Drafts go in `_drafts/` and are excluded from builds by default. To preview drafts locally, pass `--drafts` to the serve command (see below).

## Building

To build the site into `_site/`:

```bash
bundle exec jekyll build
```

For a production build (sets `JEKYLL_ENV=production`, which enables Disqus comments):

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Serving Locally

To serve the site at `http://localhost:4000` with live reload:

```bash
bundle exec jekyll serve
```

To also render drafts from `_drafts/`:

```bash
bundle exec jekyll serve --drafts
```

To serve without live reload (faster startup):

```bash
bundle exec jekyll serve --no-watch
```

The `_site/` directory is regenerated on each build and is git-ignored.

## Using Obsidian

The repo doubles as an [Obsidian](https://obsidian.md/) vault. Open the root of this repo as your vault in Obsidian.

### Writing posts in Obsidian

Use the built-in template to start a new post. Open the command palette (`Cmd+P`) and run **Templates: Insert template**, then select the post template. This inserts the correct Jekyll front matter for you.

The template is stored in `_obsidian-templates/`. Create new post files directly in `_posts/` and name them `YYYY-MM-DD-your-title.md`.

### Image attachments

Obsidian is configured to save pasted or dragged images into `assets/images/`, which is where Jekyll expects static assets. Images will be available at `/assets/images/your-image.png` in posts.

### What Obsidian config files do

The `.obsidian/` directory stores your vault settings (workspace layout, enabled plugins, theme, etc.). It is git-tracked so the setup is reproducible, but it is excluded from Jekyll builds via `_config.yml`.

## Deployment (GitHub Actions)

Pushing to `master` automatically builds and deploys the site to GitHub Pages via the workflow in [.github/workflows/jekyll.yml](.github/workflows/jekyll.yml).

### What the workflow does

1. Checks out the repo
2. Sets up Ruby 3.3 with Bundler caching
3. Runs `bundle exec jekyll build` with `JEKYLL_ENV=production`
4. Uploads the built `_site/` as a Pages artifact
5. Deploys the artifact to GitHub Pages

### When it runs

- On every push to `master`
- Manually via **Actions > Build and deploy Jekyll site > Run workflow** in the GitHub UI

Only one deployment runs at a time. A new push to `master` while a deploy is in progress will queue behind it (it will not cancel the in-flight deploy).

### Custom domain

The `CNAME` file contains `erict.net`, which tells GitHub Pages to serve the site on the custom domain. Do not delete this file.
