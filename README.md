# Awesome Papers Core Theme

A Jekyll remote theme for curated academic paper collection sites.

## Overview

This is the shared theme repository for Awesome Papers sites. It provides:

- **Layouts**: `default.html`, `page.html`, `publication.html`
- **Includes**: `head.html`, `sidebar.html`
- **Assets**: CSS (poole, hyde, lanyon, syntax) and JavaScript (chat, papers-worker, site-config)

## Usage

### In Your Domain Site

Add to your `_config.yml`:

```yaml
remote_theme: awesome-llm-papers/awesomepapers-core@main

# Or for versioned releases:
# remote_theme: awesome-llm-papers/awesomepapers-core@v1.0.0
```

Add to your `Gemfile`:

```ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-remote-theme"
```

### Local Development

To work on the theme itself:

```bash
cd awesomepapers-core
bundle install
bundle exec jekyll serve
```

## File Structure

```
awesomepapers-core/
├── _layouts/
│   ├── default.html
│   ├── page.html
│   └── publication.html
├── _includes/
│   ├── head.html
│   └── sidebar.html
├── assets/
│   ├── css/
│   │   ├── poole.css
│   │   ├── hyde.css
│   │   ├── lanyon.css
│   │   └── syntax.css
│   └── js/
│       ├── site-config.js
│       ├── alp-chat.js
│       └── papers-worker.js
├── _data/
│   └── defaults.yml
├── Gemfile
├── awesomepapers-core.gemspec
├── LICENSE
└── README.md
```

## Configuration

Domain sites override these defaults in their `_config.yml`. See the main documentation for available configuration options.

## License

MIT License
