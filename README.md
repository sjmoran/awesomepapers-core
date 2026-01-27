# Awesome Papers Core Theme

A Jekyll theme for building curated academic paper collection websites. This theme provides shared layouts, components, and assets that can be customized for any research domain.

## Features

- 📚 **Paper Search & Filtering** - Full-text search with sorting by year, citations, GitHub stars, Hugging Face likes
- 🏷️ **Tag Explorer** - Browse papers by topic/tag with nested taxonomy support
- 👥 **Author Visualization** - Interactive author network and statistics
- 🗺️ **Paper Map** - t-SNE visualization of paper embeddings
- 💬 **AI Chat Integration** - Conversational search powered by LLMs
- 📬 **Email Digest** - Subscription system for weekly/daily updates
- 🎨 **Fully Customizable** - All text, colors, and features configurable via `_config.yml`
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

## Installation

### As a GitHub Pages Remote Theme (Recommended)

Add to your site's `_config.yml`:

```yaml
remote_theme: awesome-llm-papers/awesomepapers-core@main
# Or for a specific version:
# remote_theme: awesome-llm-papers/awesomepapers-core@v1.0.0
```

Add to your `Gemfile`:

```ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-seo-tag", "~> 2.7"
  gem "jekyll-sitemap", "~> 1.4"
end

gem "webrick", "~> 1.7"
```

### As a Ruby Gem

Add to your `Gemfile`:

```ruby
gem "awesomepapers-core", "~> 1.0"
```

And in your `_config.yml`:

```yaml
theme: awesomepapers-core
```

## Quick Start

1. Create a new repository for your papers site
2. Add the theme configuration (see above)
3. Create your `_config.yml` with domain-specific settings
4. Add papers to `_publications/` directory
5. Deploy to GitHub Pages

## Configuration

All customization is done through `_config.yml`. See the [Site Customization Guide](SITE_CUSTOMIZATION.md) for full documentation.

### Minimal Configuration

```yaml
remote_theme: awesome-llm-papers/awesomepapers-core@main

title: Awesome Quantum Papers
tagline: 'Curated Research on Quantum Computing'
url: https://awesome-quantum-papers.github.io

domain:
  name: 'Quantum Computing'
  short_name: 'QC'

theme:
  hyde_theme: '0e'  # Purple
  brand_color: '#7c3aed'
```

### Full Configuration Reference

```yaml
# Site Identity
title:               Awesome {Domain} Papers
tagline:             'Curated Research on {Domain}'
description:         'A comprehensive collection of {domain} research papers.'
url:                 https://awesome-{domain}-papers.github.io
short_title:         '{Domain} Papers'

# Domain Configuration
domain:
  name:              '{Domain Full Name}'
  short_name:        '{DOM}'
  paper_term:        'papers'
  paper_term_singular: 'paper'
  keywords: [...]
  hero_image:        'assets/img/hero.gif'
  about_text: >
    Description of your research domain...

# Theme Configuration
theme:
  hyde_theme:        '0d'  # See color options below
  layout:            'layout-reverse'
  brand_color:       '#1a73e8'
  brand_color_hover: '#1557b0'
  accent_color:      '#3b82f6'
  sidebar_bg:        '#7da2b3'
  chat_accent:       '#0c5fce'

# Content Configuration
content:
  ribbon_text:       'Submit a Paper'
  ribbon_link:       '/contributing.html'
  search_placeholder: 'Search papers'
  nav: { ... }
  digest: { ... }
  chat: { ... }
  contributing: { ... }
  footer: { ... }
  landing: { ... }

# External Services
services:
  api:
    base:            'https://your-api.com'
    contribute:      'https://your-api.com/contribute'
    chat:            'https://your-api.com'
    subscribe:       'https://your-api.com/subscribe'

# Feature Flags
features:
  chat_enabled:      true
  viz_enabled:       true
  digest_enabled:    true
  contributing_enabled: true
  new_badge_days:    7
```

### Hyde Theme Colors

| Code | Color |
|------|-------|
| `00` | Red |
| `01` | Orange |
| `02` | Yellow |
| `03` | Lime |
| `04` | Cyan |
| `05` | Blue |
| `06` | Magenta |
| `07` | Pink |
| `08` | Brown |
| `09` | Gray |
| `0a` | Cyan Light |
| `0b` | Green |
| `0c` | Teal |
| `0d` | Azure (default) |
| `0e` | Purple |
| `0f` | Rose |

## Directory Structure

### Theme (this repository)

```
awesomepapers-core/
├── _layouts/           # Page layouts
│   ├── default.html    # Base layout with sidebar, chat
│   ├── page.html       # Standard page layout
│   └── publication.html # Individual paper layout
├── _includes/          # Reusable components
│   ├── head.html       # HTML head with meta, CSS
│   └── sidebar.html    # Navigation sidebar
├── _data/              # Default data
│   └── defaults.yml    # Default configuration values
├── assets/
│   ├── css/           # Stylesheets
│   └── js/            # JavaScript
├── pages/             # Reusable page templates
│   ├── papers.html    # Paper listing/search
│   ├── tags.html      # Tag explorer
│   ├── digest.markdown # Newsletter signup
│   └── ...
└── etc/               # Build/utility scripts
```

### Your Site

```
your-papers-site/
├── _config.yml         # Site configuration
├── _publications/      # Your papers (markdown files)
├── _data/
│   └── taxonomy.yml    # Your tag taxonomy
├── assets/
│   └── img/
│       └── hero.gif    # Your hero image
├── index.md            # Landing page (optional override)
├── Gemfile
└── README.md
```

## Adding Papers

Create markdown files in `_publications/`:

```markdown
---
layout: publication
title: "Your Paper Title"
authors: "Author One, Author Two, Author Three"
venue: "Conference/Journal Name"
year: 2024
tags:
  - tag1
  - tag2
paper_url: "https://arxiv.org/abs/..."
code_url: "https://github.com/..."
abstract: |
  Your paper abstract goes here...
---

Optional additional content about the paper.
```

## Customization

### Overriding Theme Files

To override any theme file, create the same file path in your site:

```
# Override sidebar
_includes/sidebar.html

# Override paper layout
_layouts/publication.html

# Override CSS
assets/css/custom.css
```

### Adding Custom Pages

Create markdown or HTML files in your site root. They'll use the theme's layouts.

### Custom JavaScript

Add scripts to `assets/js/` and include them in your `_includes/head.html` override.

## Development

### Local Development

```bash
git clone https://github.com/awesome-llm-papers/awesomepapers-core.git
cd awesomepapers-core
bundle install
bundle exec jekyll serve
```

### Testing with a Site

In your test site's `Gemfile`:

```ruby
gem "awesomepapers-core", path: "../awesomepapers-core"
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Related Projects

- [awesome-llm-papers.github.io](https://awesome-llm-papers.github.io) - LLM research papers
- [Hyde theme](https://github.com/poole/hyde) - Base theme inspiration
