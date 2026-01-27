#!/bin/bash
# =============================================================================
# create-site.sh - Create a new Awesome Papers site using the core theme
# =============================================================================
# This script creates a new site that uses awesomepapers-core as a remote theme.
# The created site only contains site-specific content (publications, data).
#
# Usage: ./create-site.sh <domain> <full_name> [output_dir]
#
# Examples:
#   ./create-site.sh quantum "Quantum Computing" ~/Sites
#   ./create-site.sh cv "Computer Vision" .
#   ./create-site.sh robotics "Robotics" 
#
# Architecture:
#   awesomepapers-core (theme repo) - Shared layouts, CSS, JS, page templates
#   your-site (this creates)        - _publications, _data, site config
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Check arguments
if [ -z "$1" ] || [ -z "$2" ]; then
    echo -e "${RED}Error: Missing arguments${NC}"
    echo ""
    echo "Usage: $0 <domain> <full_name> [output_dir]"
    echo ""
    echo "Arguments:"
    echo "  domain      Short domain name (e.g., quantum, cv, robotics)"
    echo "  full_name   Full domain name (e.g., 'Quantum Computing')"
    echo "  output_dir  Output directory (default: current directory)"
    echo ""
    echo "Examples:"
    echo "  $0 quantum 'Quantum Computing' ~/Sites"
    echo "  $0 cv 'Computer Vision'"
    exit 1
fi

DOMAIN="$1"
FULL_NAME="$2"
OUTPUT_DIR="${3:-.}"

# Derived values
DOMAIN_LOWER=$(echo "$DOMAIN" | tr '[:upper:]' '[:lower:]')
DOMAIN_UPPER=$(echo "$DOMAIN" | tr '[:lower:]' '[:upper:]')
DOMAIN_TITLE=$(echo "$DOMAIN" | sed 's/.*/\u&/')
SITE_DIR="$OUTPUT_DIR/awesome-${DOMAIN_LOWER}-papers.github.io"

# Theme repository (change this to your org's theme repo)
THEME_REPO="awesome-llm-papers/awesomepapers-core"
THEME_VERSION="main"  # or @v1.0.0 for releases

echo -e "${BLUE}==================================================${NC}"
echo -e "${BLUE}Creating Awesome ${FULL_NAME} Papers Site${NC}"
echo -e "${BLUE}==================================================${NC}"
echo ""
echo -e "Domain:     ${GREEN}${DOMAIN_LOWER}${NC}"
echo -e "Full Name:  ${GREEN}${FULL_NAME}${NC}"
echo -e "Output:     ${GREEN}${SITE_DIR}${NC}"
echo -e "Theme:      ${CYAN}${THEME_REPO}@${THEME_VERSION}${NC}"
echo ""

# Check if directory exists
if [ -d "$SITE_DIR" ]; then
    echo -e "${RED}Error: Directory already exists: ${SITE_DIR}${NC}"
    echo "Please remove it or choose a different output directory."
    exit 1
fi

# Create site directory structure
echo -e "${YELLOW}Creating directory structure...${NC}"
mkdir -p "$SITE_DIR"
mkdir -p "$SITE_DIR/_publications"
mkdir -p "$SITE_DIR/_data"
mkdir -p "$SITE_DIR/assets/img"
mkdir -p "$SITE_DIR/.github/workflows"

# Create _config.yml
echo -e "${YELLOW}Creating _config.yml...${NC}"
cat > "$SITE_DIR/_config.yml" << EOF
# =============================================================================
# AWESOME ${DOMAIN_UPPER} PAPERS - SITE CONFIGURATION
# =============================================================================
# This site uses the awesomepapers-core remote theme.
# Only site-specific settings need to be configured here.
# =============================================================================

# Use the shared theme from GitHub
remote_theme: ${THEME_REPO}@${THEME_VERSION}

# -----------------------------------------------------------------------------
# SITE IDENTITY
# -----------------------------------------------------------------------------
title:               Awesome ${DOMAIN_TITLE} Papers
tagline:             'Curated Research on ${FULL_NAME}'
description:         'A comprehensive collection of ${DOMAIN_LOWER} research papers.'
url:                 https://awesome-${DOMAIN_LOWER}-papers.github.io
baseurl:             ''

short_title:         '${DOMAIN_TITLE} Papers'
logo:                ''
favicon:             '/assets/favicon.ico'

# -----------------------------------------------------------------------------
# DOMAIN CONFIGURATION
# -----------------------------------------------------------------------------
domain:
  name:              '${FULL_NAME}'
  short_name:        '${DOMAIN_UPPER}'
  paper_term:        'papers'
  paper_term_singular: 'paper'
  
  keywords:
    - ${DOMAIN_LOWER}
    - ${DOMAIN_LOWER} research
    - ${DOMAIN_LOWER} papers
    - machine learning
    - AI
  
  hero_image:        'assets/img/hero.gif'
  hero_alt:          '${FULL_NAME} research visualization'
  hero_caption:      'The evolution of ${DOMAIN_LOWER} research'
  
  about_text: >
    This site is an open-access resource for ${DOMAIN_LOWER} research,
    supporting literature discovery across key topics and applications.

# -----------------------------------------------------------------------------
# THEME CONFIGURATION
# -----------------------------------------------------------------------------
theme:
  # Hyde theme colors: 0=red, 1=orange, 2=yellow, 3=lime, 4=cyan, 5=blue,
  # 6=magenta, 7=pink, 8=brown, 9=gray, a=cyan-light, b=green, c=teal,
  # d=azure, e=purple, f=rose
  hyde_theme:        '0d'
  layout:            'layout-reverse'
  
  brand_color:       '#1a73e8'
  brand_color_hover: '#1557b0'
  accent_color:      '#3b82f6'
  sidebar_bg:        '#7da2b3'
  chat_accent:       '#0c5fce'

# -----------------------------------------------------------------------------
# CONTENT CONFIGURATION
# -----------------------------------------------------------------------------
content:
  ribbon_text:       'Submit a ${FULL_NAME} Paper'
  ribbon_link:       '/contributing.html'
  search_placeholder: 'Search ${DOMAIN_LOWER} papers'
  
  nav:
    all_papers:      'All Papers'
    papers_by_tag:   'Papers by Tag'
    paper_map:       '2D Map of Papers'
    topic_explorer:  'Topic Explorer'
    tools_explorer:  'Tools Explorer'
    blog_explorer:   'Blog & Book Explorer'
    author_explorer: 'Author Explorer'
    agentic_search:  'Agentic Search'
    digest:          '📬 Subscribe to Digest'
    rss_feed:        '📰 RSS Feed'
  
  digest:
    name:            '${DOMAIN_TITLE} Research Digest'
    description:     'Weekly ${DOMAIN_LOWER} research highlights.'
    tagline:         'A curated summary of ${DOMAIN_LOWER} advances.'
  
  chat:
    title:           '${DOMAIN_TITLE} Papers Chat'
    subtitle:        'Ask about ${DOMAIN_LOWER} research'
    launcher_tooltip: 'Chat about ${DOMAIN_LOWER} papers'
    placeholder:     'Ask about ${DOMAIN_LOWER} papers… (Enter to send)'
    bot_name:        '${DOMAIN_TITLE} Papers AI Agent'
    example_queries:
      - '${DOMAIN_LOWER} papers by author name'
      - 'recent ${DOMAIN_LOWER} papers'
      - 'tag:example'
      - '${DOMAIN_LOWER} survey papers'
  
  contributing:
    heading:         'Submit a Paper'
    intro: >
      Help build the most comprehensive ${DOMAIN_LOWER} research collection.
      Submit papers via the form below.
  
  footer:
    copyright_holder: 'Your Name'
    copyright_url:   'https://yoursite.com'
    contact_text:    'Contact us about this ${DOMAIN_LOWER} research collection.'
  
  landing:
    heading:         'Awesome ${DOMAIN_TITLE} Papers'
    subheading: >
      A curated collection of ${DOMAIN_LOWER} research papers,
      organized for systematic exploration and discovery.
    cta_text:        'Subscribe Free'
    cta_description: >
      Join researchers getting weekly ${DOMAIN_LOWER} highlights.

# -----------------------------------------------------------------------------
# AUTHOR/MAINTAINER
# -----------------------------------------------------------------------------
author:
  name:              'Your Name'
  url:               'https://yoursite.com'
  email:             ''
  twitter:           ''
  github:            ''

# -----------------------------------------------------------------------------
# EXTERNAL SERVICES
# -----------------------------------------------------------------------------
services:
  google_ads_id:     ''
  ardalio_id:        ''
  
  api:
    base:            'https://your-${DOMAIN_LOWER}-api.com'
    contribute:      'https://your-${DOMAIN_LOWER}-api.com/contribute'
    chat:            'https://your-${DOMAIN_LOWER}-api.com'
    subscribe:       ''
  
  support_url:       ''

# -----------------------------------------------------------------------------
# FEATURE FLAGS
# -----------------------------------------------------------------------------
features:
  chat_enabled:      true
  viz_enabled:       true
  digest_enabled:    true
  contributing_enabled: true
  rss_enabled:       true
  search_enabled:    true
  mathjax_enabled:   true
  new_badge_days:    7

# -----------------------------------------------------------------------------
# JEKYLL CONFIGURATION
# -----------------------------------------------------------------------------
collections:
  publications:
    output: true
    permalink: /:collection/:path/

plugins:
  - jekyll-remote-theme
  - jekyll-sitemap
  - jekyll-seo-tag
  - jekyll-feed

feed:
  collections:
    - publications

sass:
  style: compressed
EOF

# Create Gemfile
echo -e "${YELLOW}Creating Gemfile...${NC}"
cat > "$SITE_DIR/Gemfile" << 'EOF'
# frozen_string_literal: true

source "https://rubygems.org"

# GitHub Pages compatible gems
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-seo-tag", "~> 2.7"
  gem "jekyll-sitemap", "~> 1.4"
end

# Development
gem "webrick", "~> 1.7"
EOF

# Create index.md
echo -e "${YELLOW}Creating index.md...${NC}"
cat > "$SITE_DIR/index.md" << 'EOF'
---
layout: default
title: "A Comprehensive Overview of {{ site.domain.name }}: Curated Papers, Tools, and Visualizations"
description: "Explore curated {{ site.domain.paper_term }} on {{ site.domain.name }}, with summaries, author networks, topic maps, and tools."
permalink: /
---

<h1 style="font-size: 2em; margin-bottom: 0.3em;">{{ site.content.landing.heading | default: site.title }}</h1>
<p style="font-size: 1.2em;">
  {{ site.content.landing.subheading | default: 'A curated and continuously updated collection of scholarly research.' }}
</p>

{% if site.features.digest_enabled != false %}
<div style="background-color:#fafafa; border:1px solid #e5e7eb; border-radius:10px; padding:1em 1.25em; margin:1.5em 0; text-align:center; font-size:0.95em;">
  <strong style="font-weight:600; color:#1e293b;">📰 {{ site.content.digest.name | default: 'Research Digest' }}:</strong>
  {{ site.content.landing.cta_description | default: 'Join a growing community getting weekly research highlights.' }}
  <a href="/digest.html"
     style="display:inline-block; margin-left:0.6em; padding:0.35em 0.9em; border-radius:6px;
            background-color:{{ site.theme.accent_color | default: '#3b82f6' }}; color:white; font-weight:500; text-decoration:none;">
    {{ site.content.landing.cta_text | default: 'Subscribe Free' }}
  </a>
</div>
{% endif %}

{% if site.domain.hero_image %}
<p style="text-align: center; margin-top: 2em;">
  <img src="{{ site.baseurl }}/{{ site.domain.hero_image }}" alt="{{ site.domain.hero_alt | default: 'Research visualization' }}"
       width="720" style="max-width: 95%; border-radius: 10px;"/>
  {% if site.domain.hero_caption %}
  <br><em>{{ site.domain.hero_caption }}</em>
  {% endif %}
</p>
{% endif %}

<h3 style="margin-top: 3em;">About This Project</h3>
<p>
{{ site.domain.about_text | default: 'This site is an open-access scholarly resource.' }} 
For more detailed browsing, visit the <a href="{% link papers.html %}">full paper index</a>.
</p>

{% if site.features.contributing_enabled != false %}
<h3>Contribute to the Collection</h3>
<p>
The field of {{ site.domain.name | downcase }} research is advancing rapidly. 
Contributions of new {{ site.domain.paper_term }}, tools, or topic suggestions are welcome via our 
<a href="contributing.html">submission page</a>.
</p>
{% endif %}

<hr>
<p style="font-size: 0.9em;">
  Copyright © <a href="{{ site.content.footer.copyright_url | default: '#' }}">{{ site.content.footer.copyright_holder | default: site.author.name }}</a> {{ site.time | date: '%Y' }}.
  Please see the <a href="privacy.html">Privacy Notice</a> and <a href="disclaimer.html">Disclaimer</a>.
</p>
EOF

# Create README.md
echo -e "${YELLOW}Creating README.md...${NC}"
cat > "$SITE_DIR/README.md" << EOF
# Awesome ${FULL_NAME} Papers

A curated collection of research papers on ${FULL_NAME}.

🔗 **Live Site:** [awesome-${DOMAIN_LOWER}-papers.github.io](https://awesome-${DOMAIN_LOWER}-papers.github.io)

## About

This repository contains the site-specific content for Awesome ${FULL_NAME} Papers:

- **\`_publications/\`** - Research paper entries
- **\`_data/taxonomy.yml\`** - Tag taxonomy
- **\`assets/img/\`** - Site images

The site uses the [awesomepapers-core](https://github.com/${THEME_REPO}) Jekyll theme.

## Local Development

\`\`\`bash
bundle install
bundle exec jekyll serve
# Open http://localhost:4000
\`\`\`

## Adding Papers

Create markdown files in \`_publications/\`:

\`\`\`markdown
---
layout: publication
title: "Paper Title"
authors: "Author One, Author Two"
venue: "Conference Name"
year: 2024
tags:
  - tag1
  - tag2
paper_url: "https://arxiv.org/abs/..."
code_url: "https://github.com/..."
abstract: |
  Paper abstract...
---
\`\`\`

Or use the [online submission form](https://awesome-${DOMAIN_LOWER}-papers.github.io/contributing.html).

## License

MIT License
EOF

# Create taxonomy.yml
echo -e "${YELLOW}Creating _data/taxonomy.yml...${NC}"
cat > "$SITE_DIR/_data/taxonomy.yml" << EOF
# =============================================================================
# TAG TAXONOMY
# =============================================================================
# Define your paper categories and tags here.
# Format:
#   category_name:
#     - tag1
#     - tag2
# =============================================================================

core_topics:
  - fundamentals
  - theory
  - applications

methods:
  - neural-networks
  - optimization
  - learning

applications:
  - industry
  - research
  - tools
EOF

# Create .gitignore
echo -e "${YELLOW}Creating .gitignore...${NC}"
cat > "$SITE_DIR/.gitignore" << 'EOF'
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
vendor/
.bundle/
Gemfile.lock
*.swp
*.swo
.DS_Store
EOF

# Create GitHub Actions workflow for deployment
echo -e "${YELLOW}Creating GitHub Actions workflow...${NC}"
cat > "$SITE_DIR/.github/workflows/pages.yml" << 'EOF'
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Jekyll
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
EOF

# Create placeholder for hero image
echo -e "${YELLOW}Creating placeholder files...${NC}"
cat > "$SITE_DIR/assets/img/README.md" << EOF
# Site Images

Place your site-specific images here:

- \`hero.gif\` or \`hero.png\` - Hero image for landing page (recommended: 1200x600px)
- \`favicon.ico\` - Site favicon (also place in assets/)
- \`newsletter-preview.gif\` - Preview for digest signup page

The hero image path is configured in \`_config.yml\` under \`domain.hero_image\`.
EOF

# Create example publication
echo -e "${YELLOW}Creating example publication...${NC}"
cat > "$SITE_DIR/_publications/_example.markdown" << EOF
---
# =============================================================================
# EXAMPLE PUBLICATION (rename and customize)
# =============================================================================
# Delete this file after creating your first real publication.
# File naming convention: {year}{firstword}.markdown
# Example: 2024attention.markdown
# =============================================================================
layout: publication
title: "Example Paper Title: A Comprehensive Study"
authors: "Author One, Author Two, Author Three"
venue: "International Conference on ${FULL_NAME}"
year: 2024
tags:
  - fundamentals
  - example
paper_url: "https://arxiv.org/abs/0000.00000"
code_url: "https://github.com/example/repo"
abstract: |
  This is an example abstract. Replace this with your paper's actual abstract.
  The abstract can span multiple lines and supports basic formatting.
  
  Key contributions:
  - First contribution
  - Second contribution
  - Third contribution
---

Additional notes about this paper can go here. This section is optional.
EOF

echo ""
echo -e "${GREEN}==================================================${NC}"
echo -e "${GREEN}Site created successfully!${NC}"
echo -e "${GREEN}==================================================${NC}"
echo ""
echo -e "Your new site uses the ${CYAN}awesomepapers-core${NC} theme."
echo -e "The theme provides: layouts, CSS, JS, and page templates."
echo -e "Your site contains: publications, data, and configuration."
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo ""
echo -e "  1. ${BLUE}cd ${SITE_DIR}${NC}"
echo ""
echo -e "  2. Edit ${BLUE}_config.yml${NC} to customize:"
echo -e "     - Update author information"
echo -e "     - Add your keywords"
echo -e "     - Set API endpoints (if using chat/subscribe)"
echo -e "     - Choose theme colors (hyde_theme: 00-0f)"
echo -e "     - Add example queries for chat"
echo ""
echo -e "  3. Add a hero image to ${BLUE}assets/img/hero.gif${NC}"
echo ""
echo -e "  4. Edit ${BLUE}_data/taxonomy.yml${NC} with your tags"
echo ""
echo -e "  5. Add papers to ${BLUE}_publications/${NC}"
echo -e "     (Delete _example.markdown when done)"
echo ""
echo -e "  6. Test locally:"
echo -e "     ${BLUE}bundle install${NC}"
echo -e "     ${BLUE}bundle exec jekyll serve${NC}"
echo ""
echo -e "  7. Create GitHub repository and push:"
echo -e "     ${BLUE}git init${NC}"
echo -e "     ${BLUE}git add .${NC}"
echo -e "     ${BLUE}git commit -m 'Initial commit'${NC}"
echo -e "     ${BLUE}gh repo create awesome-${DOMAIN_LOWER}-papers.github.io --public${NC}"
echo -e "     ${BLUE}git push -u origin main${NC}"
echo ""
echo -e "  8. Enable GitHub Pages:"
echo -e "     Settings → Pages → Source: GitHub Actions"
echo ""
echo -e "${CYAN}Documentation:${NC}"
echo -e "  Theme: https://github.com/${THEME_REPO}"
echo ""
