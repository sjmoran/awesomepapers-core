# Awesome Papers Theme Architecture

This document describes the multi-site architecture using a shared Jekyll remote theme.

## Repository Split

The codebase has been split into two directories:

### 1. `awesomepapers-core/` - Reusable Theme (Ruby Gem)

Contains all shared, reusable components:

```
awesomepapers-core/
├── _layouts/              # Page layouts (default, page, publication)
├── _includes/             # Components (head, sidebar)
├── _data/
│   └── defaults.yml       # Default configuration values
├── assets/
│   ├── css/              # Hyde, Poole, Lanyon stylesheets
│   ├── js/               # Chat, search, site-config
│   ├── favicon.ico
│   └── opensearchdescription.xml
├── pages/                 # Reusable page templates
│   ├── papers.html       # Paper search/listing
│   ├── tags.html         # Tag explorer
│   ├── contributing.markdown
│   ├── digest.markdown
│   ├── author-viz.html
│   ├── topic-viz.html
│   ├── tsne-viz.html
│   └── ...
├── etc/                   # Build/utility scripts
├── awesomepapers-core.gemspec
├── Gemfile
├── LICENSE
├── README.md
└── CHANGELOG.md
```

### 2. `awesome-llm-papers/` - Site-Specific Content

Contains content specific to the LLM papers site:

```
awesome-llm-papers/
├── _config.yml            # Site configuration
├── _publications/         # Paper entries (3000+ files)
├── _data/
│   └── taxonomy.yml       # LLM-specific tag taxonomy
├── assets/
│   └── img/
│       ├── llm-tree.gif   # Hero image
│       └── newsletter-preview.gif
├── paper-index.json       # Paper metadata index
├── paper-abstracts.json   # Paper abstracts
├── github_topics.csv      # GitHub topics data
├── high_signal_blogs.csv  # Blog data
├── index.md               # Landing page
├── Gemfile
├── README.md
├── CITATION.cff
└── .github/workflows/pages.yml
```

## Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    awesomepapers-core                           │
│                    (Theme Repository)                           │
├─────────────────────────────────────────────────────────────────┤
│  _layouts/          → default.html, page.html, publication.html │
│  _includes/         → head.html, sidebar.html, footer.html      │
│  _sass/             → Shared SCSS/CSS                           │
│  assets/            → Shared JS, CSS, images                    │
│  _config_defaults/  → Default config values                     │
│  *.gemspec          → Ruby gem specification                    │
└─────────────────────────────────────────────────────────────────┘
           │                    │                    │
           ▼                    ▼                    ▼
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│ awesome-llm-     │ │ awesome-quantum- │ │ awesome-cv-      │
│ papers.github.io │ │ papers.github.io │ │ papers.github.io │
├──────────────────┤ ├──────────────────┤ ├──────────────────┤
│ _config.yml      │ │ _config.yml      │ │ _config.yml      │
│ _publications/   │ │ _publications/   │ │ _publications/   │
│ _data/           │ │ _data/           │ │ _data/           │
│ index.md         │ │ index.md         │ │ index.md         │
│ (overrides)      │ │ (overrides)      │ │ (overrides)      │
└──────────────────┘ └──────────────────┘ └──────────────────┘
```

## Repository Structure

### 1. Core Theme Repository (`awesomepapers-core`)

```
awesomepapers-core/
├── _layouts/
│   ├── default.html
│   ├── page.html
│   └── publication.html
├── _includes/
│   ├── head.html
│   ├── sidebar.html
│   └── scripts.html
├── _sass/
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _sidebar.scss
│   ├── _papers.scss
│   └── _chat.scss
├── assets/
│   ├── css/
│   │   └── main.scss       (imports from _sass)
│   └── js/
│       ├── site-config.js  (Jekyll-generated)
│       ├── alp-chat.js
│       └── papers-worker.js
├── _data/
│   └── defaults.yml        (default config values)
├── Gemfile
├── awesomepapers-core.gemspec
├── README.md
└── LICENSE
```

### 2. Domain Site Repository (e.g., `awesome-llm-papers.github.io`)

```
awesome-llm-papers.github.io/
├── _config.yml             (domain-specific config)
├── _publications/          (domain papers)
│   ├── 2024deepseek.markdown
│   └── ...
├── _data/
│   └── taxonomy.yml        (domain taxonomy)
├── index.md                (can override or use theme's)
├── papers.html             (optional override)
├── assets/
│   └── img/
│       └── hero.gif        (domain hero image)
├── Gemfile
└── README.md
```

## Setup Instructions

### Step 1: Create the Core Theme Repository

1. Create a new repository: `awesomepapers-core`
2. Copy shared files from current repo:
   - `_layouts/`
   - `_includes/`
   - `public/css/` → `assets/css/`
   - `public/js/` → `assets/js/`

3. Create the gemspec (see below)
4. Push to GitHub

### Step 2: Configure Each Domain Site

In each domain site's `_config.yml`:

```yaml
# Use the remote theme
remote_theme: your-org/awesomepapers-core@main

# Or for versioned releases:
# remote_theme: your-org/awesomepapers-core@v1.2.0

# Domain-specific configuration
title: Awesome Quantum Papers
# ... rest of domain config
```

In each domain site's `Gemfile`:

```ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-remote-theme"
```

### Step 3: GitHub Pages Settings

Enable GitHub Pages in each site repository settings:
- Source: Deploy from branch (main)
- The `jekyll-remote-theme` plugin will fetch the theme automatically

## How Updates Work

### Updating All Sites at Once

1. Make changes in `awesomepapers-core`
2. Commit and push (or create a release tag)
3. Sites using `@main` update automatically on next build
4. Sites using `@v1.x.x` update when you bump the version

### Triggering Rebuilds

Sites rebuild when:
- You push to the site repo
- You manually trigger a rebuild in GitHub Actions
- You use a webhook or scheduled action

To auto-update sites when core changes:
1. Set up a GitHub Action in core that dispatches to site repos
2. Or use a scheduled rebuild in each site repo

## File Override Rules

Jekyll remote themes follow these override rules:

1. **Site files take precedence** over theme files
2. To override a theme file, create the same file path in your site

Example: To customize the sidebar for one site:
```
# In your site repo, create:
_includes/sidebar.html    # This overrides the theme's sidebar
```

## Configuration Inheritance

The theme provides default values that sites can override:

```yaml
# In theme's _data/defaults.yml
features:
  chat_enabled: true
  viz_enabled: true
  new_badge_days: 7

# In site's _config.yml (overrides defaults)
features:
  chat_enabled: false  # Disable chat for this site
```

## Migration Checklist

### From Current Monolithic Repo to Theme Architecture

- [ ] Create `awesomepapers-core` repository
- [ ] Move shared files to core:
  - [ ] `_layouts/*`
  - [ ] `_includes/*`
  - [ ] `public/css/*` → `assets/css/`
  - [ ] `public/js/*` → `assets/js/`
- [ ] Create gemspec in core
- [ ] Update current repo to use remote theme
- [ ] Remove duplicated shared files from site repo
- [ ] Test locally with `bundle exec jekyll serve`
- [ ] Deploy and verify

### Creating a New Domain Site

- [ ] Create new repo: `awesome-{domain}-papers.github.io`
- [ ] Copy site template files
- [ ] Update `_config.yml` with domain settings
- [ ] Add domain-specific content (`_publications/`, images)
- [ ] Enable GitHub Pages
- [ ] Configure custom domain (optional)

## Local Development

### Working on the Theme

```bash
cd awesomepapers-core
bundle install
bundle exec jekyll serve
```

### Working on a Site (with local theme changes)

```bash
# In site repo, temporarily override remote_theme in _config.yml:
# theme: awesomepapers-core

# Or use the --config flag:
bundle exec jekyll serve --config _config.yml,_config_dev.yml
```

Create `_config_dev.yml`:
```yaml
theme: /path/to/local/awesomepapers-core
```

## Versioning Strategy

### Semantic Versioning

- **Major** (v2.0.0): Breaking changes to config schema or layouts
- **Minor** (v1.1.0): New features, backward compatible
- **Patch** (v1.0.1): Bug fixes

### Release Process

1. Update version in `awesomepapers-core.gemspec`
2. Update CHANGELOG.md
3. Create a git tag: `git tag v1.2.0`
4. Push tag: `git push origin v1.2.0`
5. Sites update by changing `@v1.1.0` to `@v1.2.0`

## Troubleshooting

### Theme Not Loading

1. Check `remote_theme` syntax: `owner/repo@ref`
2. Ensure `jekyll-remote-theme` is in Gemfile
3. Check GitHub Actions build logs

### Styles Not Applying

1. Verify `assets/css/main.scss` has front matter (`---`)
2. Check that `_sass` imports are correct
3. Clear browser cache

### JavaScript Not Working

1. Ensure `assets/js/site-config.js` has Jekyll front matter
2. Check browser console for errors
3. Verify script paths in `_includes/head.html`
