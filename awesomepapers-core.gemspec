# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "awesomepapers-core"
  spec.version       = "1.0.0"
  spec.authors       = ["Sean Moran"]
  spec.email         = [""]

  spec.summary       = "A Jekyll theme for curated academic paper collection sites"
  spec.description   = <<~DESC
    Shared layouts, includes, and assets for Awesome Papers sites.
    Supports full customization via _config.yml for any research domain.
    
    Features:
    - Responsive paper search and filtering
    - Topic/tag exploration pages
    - Author visualization
    - t-SNE paper map
    - AI chat integration
    - Email digest subscription
    - Dark mode support
  DESC
  spec.homepage      = "https://github.com/awesome-llm-papers/awesomepapers-core"
  spec.license       = "MIT"

  spec.metadata = {
    "plugin_type"           => "theme",
    "homepage_uri"          => spec.homepage,
    "source_code_uri"       => spec.homepage,
    "bug_tracker_uri"       => "#{spec.homepage}/issues",
    "changelog_uri"         => "#{spec.homepage}/blob/main/CHANGELOG.md",
    "documentation_uri"     => "#{spec.homepage}#readme"
  }

  spec.required_ruby_version = ">= 2.7.0"

  # Files to include in the gem
  # This includes all theme assets that sites will inherit
  spec.files = Dir[
    "_layouts/**/*",
    "_includes/**/*",
    "_data/**/*",
    "assets/**/*",
    "pages/**/*",
    "etc/**/*",
    "LICENSE",
    "README.md",
    "CHANGELOG.md"
  ].reject { |f| File.directory?(f) }

  # Post-install message
  spec.post_install_message = <<~MSG
    Thanks for installing awesomepapers-core!
    
    Quick start:
      1. Add to _config.yml: remote_theme: awesome-llm-papers/awesomepapers-core@main
      2. Configure your domain settings
      3. Add papers to _publications/
      4. Run: bundle exec jekyll serve
    
    Docs: https://github.com/awesome-llm-papers/awesomepapers-core
  MSG

  # Runtime dependencies
  spec.add_runtime_dependency "jekyll", ">= 3.9", "< 5.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.7"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-remote-theme", "~> 0.4"

  # Development dependencies
  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 13.0"
end
