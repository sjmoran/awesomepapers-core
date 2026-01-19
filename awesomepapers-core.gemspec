# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "awesomepapers-core"
  spec.version       = "1.0.0"
  spec.authors       = ["Sean Moran"]
  spec.email         = [""]

  spec.summary       = "A Jekyll theme for curated academic paper collection sites"
  spec.description   = "Shared layouts, includes, and assets for Awesome Papers sites. Supports customization via _config.yml for any research domain."
  spec.homepage      = "https://github.com/awesome-llm-papers/awesomepapers-core"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  # Files to include in the gem
  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(layouts|includes|sass|data)|assets|LICENSE|README)}i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.9", "< 5.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.7"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"

  spec.add_development_dependency "bundler", "~> 2.0"
end
