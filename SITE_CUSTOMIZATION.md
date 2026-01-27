# Site Customization Guide

This site uses a centralized configuration system that makes it easy to adapt for any research domain or topic. All customizations are controlled through `_config.yml`.

## Quick Start

To create a new research papers site (e.g., "Awesome Quantum Computing Papers"):

1. Fork/clone this repository
2. Edit `_config.yml` with your domain settings
3. Replace domain-specific assets (hero image, favicon, etc.)
4. Update or clear the `_publications/` folder with your papers
5. Deploy!

## Configuration Sections

### 1. Site Identity

Basic site information that appears in browser tabs, SEO, and branding.

```yaml
title:               Awesome Quantum Papers
tagline:             'Curated Research on Quantum Computing'
description:         'A comprehensive collection of quantum computing research papers.'
url:                 https://awesome-quantum-papers.github.io
short_title:         Quantum Papers
logo:                '/assets/img/quantum-logo.png'  # optional
favicon:             '/public/favicon.ico'
```

### 2. Domain Configuration

Define your research field and related terminology.

```yaml
domain:
  name:              'Quantum Computing'
  short_name:        'QC'
  paper_term:        'papers'
  paper_term_singular: 'paper'
  
  # SEO keywords for your domain
  keywords:
    - quantum computing
    - quantum algorithms
    - qubits
    - quantum error correction
    - quantum supremacy
    - quantum machine learning
  
  # Hero image for landing page
  hero_image:        'quantum-hero.gif'
  hero_alt:          'Quantum computing visualization'
  hero_caption:      'Quantum computing advancement over time'
  
  # About text
  about_text: >
    This site is an open-access resource for quantum computing research,
    covering algorithms, hardware, error correction, and applications.
```

### 3. Theme Configuration

Customize colors and layout to match your domain's visual identity.

```yaml
theme:
  # Hyde theme color (0-f, see below for options)
  hyde_theme:        '06'  # Magenta for quantum
  
  # Layout: 'layout-reverse' (sidebar right) or '' (sidebar left)
  layout:            'layout-reverse'
  
  # Brand colors
  brand_color:       '#6B21A8'      # Purple
  brand_color_hover: '#581C87'
  accent_color:      '#A855F7'
  
  # Sidebar background
  sidebar_bg:        '#7C3AED'
  
  # Chat widget accent
  chat_accent:       '#8B5CF6'
```

**Hyde Theme Colors:**
- `00` - Red
- `01` - Orange
- `02` - Yellow
- `03` - Lime
- `04` - Cyan
- `05` - Blue
- `06` - Magenta
- `07` - Pink
- `08` - Brown
- `09` - Gray
- `0a` - Cyan Light
- `0b` - Green
- `0c` - Teal
- `0d` - Azure (default)
- `0e` - Purple
- `0f` - Rose

### 4. Content Configuration

Customize all text that appears throughout the site.

```yaml
content:
  # Sidebar ribbon
  ribbon_text:       'Submit a Quantum Computing Paper'
  ribbon_link:       '/contributing.html'
  
  # Search
  search_placeholder: 'Search quantum papers'
  
  # Navigation labels
  nav:
    all_papers:      'All Papers'
    papers_by_tag:   'Papers by Topic'
    paper_map:       'Research Landscape'
    topic_explorer:  'Topic Explorer'
    tools_explorer:  'Tools & Libraries'
    blog_explorer:   'Tutorials & Books'
    author_explorer: 'Research Groups'
    agentic_search:  'AI Assistant'
    digest:          '📬 Weekly Digest'
    rss_feed:        '📰 RSS Feed'
  
  # Digest/Newsletter
  digest:
    name:            'Quantum Research Digest'
    description:     'Weekly updates on quantum computing breakthroughs.'
    tagline:         'Your weekly guide to quantum research.'
  
  # Chat widget (also drives JavaScript config)
  chat:
    title:           'Quantum Papers Chat'
    subtitle:        'Ask about quantum research'
    launcher_tooltip: 'Chat about quantum papers'
    placeholder:     'Ask about quantum papers… (Enter to send)'
    bot_name:        'Quantum Papers AI Agent'
    # Example queries shown in chat welcome (domain-specific!)
    example_queries:
      - 'quantum error correction papers'
      - 'papers by John Preskill'
      - 'superconducting qubit architectures'
      - 'tag:algorithms author:"Peter Shor"'
      - 'quantum machine learning'
  
  # Contributing page
  contributing:
    heading:         'Submit a Paper'
    intro: >
      Help us build the most comprehensive quantum computing 
      research collection. Submit papers via the form below.
  
  # Footer
  footer:
    copyright_holder: 'Your Name'
    copyright_url:   'https://yoursite.com'
    contact_text:    'Contact us about this collection.'
  
  # Landing page
  landing:
    heading:         'Awesome Quantum Papers'
    subheading: >
      A curated collection of quantum computing research papers,
      covering algorithms, hardware, error correction, and more.
    cta_text:        'Subscribe Free'
    cta_description: >
      Join researchers getting weekly quantum computing highlights.
```

### 5. Author/Maintainer Info

```yaml
author:
  name:              'Your Name'
  url:               'https://yourwebsite.com'
  email:             'you@email.com'
  twitter:           'yourhandle'
  github:            'yourusername'
```

### 6. External Services

Configure analytics and API endpoints.

```yaml
services:
  google_ads_id:     ''  # Leave empty to disable
  ardalio_id:        ''  # Leave empty to disable
  
  api:
    base:            'https://your-api.com'      # Main API base URL
    contribute:      'https://your-api.com/contribute'
    chat:            'https://your-api.com'      # Chat API endpoint
    subscribe:       'https://your-api.com/subscribe'
  
  support_url:       'https://buymeacoffee.com/yourusername'
```

**Important:** The `api.base` and `api.chat` values are used by the JavaScript chat widget. Make sure to update these to your own backend endpoints.

### 7. Feature Flags

Enable or disable site features.

```yaml
features:
  chat_enabled:      true    # Floating chat widget
  viz_enabled:       true    # Visualizations (t-SNE, topic, author)
  digest_enabled:    true    # Newsletter subscription
  contributing_enabled: true # Paper submission form
  rss_enabled:       true    # RSS feed
  search_enabled:    true    # Search functionality
  mathjax_enabled:   true    # Math equation rendering
  new_badge_days:    7       # Days to show "NEW" badge
```

## Complete Example: Quantum Computing Site

Here's a complete `_config.yml` for a quantum computing papers site:

```yaml
# =============================================================================
# AWESOME QUANTUM COMPUTING PAPERS
# =============================================================================

# Site Identity
title:               Awesome Quantum Papers
tagline:             'Curated Research on Quantum Computing'
description:         'A comprehensive collection of quantum computing research.'
url:                 https://awesome-quantum-papers.github.io
baseurl:             ''
short_title:         Quantum Papers
logo:                ''
favicon:             '/public/favicon.ico'

# Domain Configuration
domain:
  name:              'Quantum Computing'
  short_name:        'QC'
  paper_term:        'papers'
  paper_term_singular: 'paper'
  keywords:
    - quantum computing
    - quantum algorithms
    - qubits
    - quantum gates
    - quantum error correction
    - quantum supremacy
    - quantum machine learning
    - quantum cryptography
  hero_image:        'quantum-hero.png'
  hero_alt:          'Quantum computing advancement visualization'
  hero_caption:      'The evolution of quantum computing capabilities'
  about_text: >
    This site is an open-access resource for quantum computing research,
    supporting literature discovery across algorithms, hardware, 
    error correction, and practical applications.

# Theme Configuration
theme:
  hyde_theme:        '0e'  # Purple
  layout:            'layout-reverse'
  brand_color:       '#7C3AED'
  brand_color_hover: '#6D28D9'
  accent_color:      '#A855F7'
  sidebar_bg:        '#5B21B6'
  chat_accent:       '#8B5CF6'

# Content Configuration
content:
  ribbon_text:       'Submit a Quantum Paper'
  ribbon_link:       '/contributing.html'
  search_placeholder: 'Search quantum research'
  nav:
    all_papers:      'All Papers'
    papers_by_tag:   'Papers by Topic'
    paper_map:       '2D Research Map'
    topic_explorer:  'Topic Explorer'
    tools_explorer:  'Quantum Tools'
    blog_explorer:   'Tutorials & Books'
    author_explorer: 'Research Groups'
    agentic_search:  'AI Assistant'
    digest:          '📬 Quantum Digest'
    rss_feed:        '📰 RSS Feed'
  digest:
    name:            'Quantum Research Digest'
    description:     'Weekly quantum computing research highlights.'
    tagline:         'A curated summary of quantum computing advances.'
  chat:
    title:           'Quantum Papers Chat'
    subtitle:        'Ask about quantum research'
    launcher_tooltip: 'Chat about quantum computing'
    placeholder:     'Ask about quantum papers… (Enter to send)'
    bot_name:        'Quantum Papers AI Agent'
    example_queries:
      - 'quantum error correction papers'
      - 'papers by John Preskill'
      - 'superconducting qubit architectures'
      - 'tag:algorithms author:"Peter Shor"'
      - 'quantum machine learning'
  contributing:
    heading:         'Submit a Paper'
    intro: >
      Help build the most comprehensive quantum computing research 
      collection. Your submissions reach thousands of researchers.
  footer:
    copyright_holder: 'Quantum Research Team'
    copyright_url:   'https://example.com'
    contact_text:    'Contact us about this quantum research collection.'
  landing:
    heading:         'Awesome Quantum Papers'
    subheading: >
      A curated collection of quantum computing research papers,
      organized for systematic exploration and discovery.
    cta_text:        'Get the Digest'
    cta_description: >
      Join researchers getting weekly highlights on quantum breakthroughs.

# Author Info
author:
  name:              'Your Name'
  url:               'https://yoursite.com'

# External Services
services:
  google_ads_id:     ''
  ardalio_id:        ''
  api:
    base:            'https://your-quantum-api.com'
    contribute:      'https://your-quantum-api.com/contribute'
    chat:            'https://your-quantum-api.com'
    subscribe:       ''
  support_url:       ''

# Feature Flags
features:
  chat_enabled:      true
  viz_enabled:       true
  digest_enabled:    true
  contributing_enabled: true
  rss_enabled:       true
  search_enabled:    true
  mathjax_enabled:   true
  new_badge_days:    7

# Jekyll Configuration (don't change unless needed)
collections:
  publications:
    output: true
    permalink: /:collection/:path/
plugins:
  - jekyll-sitemap
  - jekyll-seo-tag
  - jekyll-feed
feed:
  collections:
    - publications
sass:
  style: compressed
```

## Additional Domain Examples

### Bioinformatics

```yaml
domain:
  name:              'Bioinformatics'
  short_name:        'Bioinf'
  keywords:
    - bioinformatics
    - computational biology
    - genomics
    - proteomics
    - sequence analysis
    - structural biology
theme:
  hyde_theme:        '0b'  # Green
  brand_color:       '#059669'
  sidebar_bg:        '#047857'
```

### Computer Vision

```yaml
domain:
  name:              'Computer Vision'
  short_name:        'CV'
  keywords:
    - computer vision
    - image recognition
    - object detection
    - semantic segmentation
    - image generation
    - visual transformers
theme:
  hyde_theme:        '04'  # Cyan
  brand_color:       '#0891B2'
  sidebar_bg:        '#0E7490'
```

### Robotics

```yaml
domain:
  name:              'Robotics'
  short_name:        'Robotics'
  keywords:
    - robotics
    - robot learning
    - manipulation
    - motion planning
    - autonomous systems
    - robot perception
theme:
  hyde_theme:        '01'  # Orange
  brand_color:       '#EA580C'
  sidebar_bg:        '#C2410C'
```

## Migrating from an Existing Site

If you're adapting this from an existing LLM papers site:

1. **Back up your `_publications/` folder** - these are your paper markdown files
2. **Back up your `_data/taxonomy.yml`** - this contains paper categorization
3. **Back up any custom assets** in `assets/` and `public/`
4. Update `_config.yml` with your new domain settings
5. Test locally with `jekyll serve`
6. Deploy when ready

## Tips

- **Colors**: Use tools like [Coolors](https://coolors.co) to generate matching color palettes
- **Hero images**: Use domain-relevant visualizations (1200x600px recommended)
- **Keywords**: Research your domain's most searched terms for better SEO
- **Testing**: Always test locally before deploying: `bundle exec jekyll serve`

## JavaScript Configuration

The site automatically generates a JavaScript configuration file (`/public/js/site-config.js`) from your `_config.yml`. This file is used by:

- **alp-chat.js** - Chat widget (API endpoint, bot name, example queries, placeholder text)
- **papers-worker.js** - Paper indexing (NEW badge threshold)

The config is exposed as `window.SITE_CONFIG` and includes:

```javascript
window.SITE_CONFIG = {
  title: "...",
  domain: { name: "...", paperTerm: "papers", ... },
  api: { base: "...", contribute: "...", ... },
  chat: { botName: "...", exampleQueries: [...], placeholder: "...", ... },
  features: { newBadgeDays: 7, ... },
  theme: { brandColor: "...", ... }
};
```

**Key chat configuration options:**

```yaml
content:
  chat:
    bot_name:        'Your Site AI Agent'     # Name shown in chat
    placeholder:     'Ask about papers…'      # Input placeholder
    example_queries:                          # Domain-specific examples
      - 'papers by Famous Author'
      - 'topic:specific-tag'
      - 'your domain example query'
```

These example queries are crucial for user onboarding - make them domain-specific!

