---
layout: null
---
// Auto-generated site configuration for JavaScript
// This file is built by Jekyll from _config.yml
window.SITE_CONFIG = {
  // Site identity
  title: {{ site.title | jsonify }},
  shortTitle: {{ site.short_title | default: site.title | jsonify }},
  
  // Domain configuration
  domain: {
    name: {{ site.domain.name | jsonify }},
    shortName: {{ site.domain.short_name | jsonify }},
    paperTerm: {{ site.domain.paper_term | default: "papers" | jsonify }},
    paperTermSingular: {{ site.domain.paper_term_singular | default: "paper" | jsonify }}
  },
  
  // API endpoints
  api: {
    base: {{ site.services.api.chat | default: "" | jsonify }},
    contribute: {{ site.services.api.contribute | default: "" | jsonify }},
    subscribe: {{ site.services.api.subscribe | default: "" | jsonify }}
  },
  
  // Chat widget configuration
  chat: {
    enabled: {{ site.features.chat_enabled | default: true }},
    botName: {{ site.content.chat.bot_name | default: site.title | append: " AI Agent" | jsonify }},
    title: {{ site.content.chat.title | default: "Paper Search Chat" | jsonify }},
    subtitle: {{ site.content.chat.subtitle | default: "Ask about papers" | jsonify }},
    placeholder: {{ site.content.chat.placeholder | default: "Ask about papers…" | jsonify }},
    launcherTooltip: {{ site.content.chat.launcher_tooltip | default: "Chat about papers" | jsonify }},
    
    // Example queries for the chat welcome message
    // These should be domain-specific
    exampleQueries: {{ site.content.chat.example_queries | default: site.chat_example_queries | jsonify }}
  },
  
  // Feature flags
  features: {
    chatEnabled: {{ site.features.chat_enabled | default: true }},
    vizEnabled: {{ site.features.viz_enabled | default: true }},
    digestEnabled: {{ site.features.digest_enabled | default: true }},
    searchEnabled: {{ site.features.search_enabled | default: true }},
    newBadgeDays: {{ site.features.new_badge_days | default: 7 }}
  },
  
  // Theme colors (for JS components that need them)
  theme: {
    brandColor: {{ site.theme.brand_color | default: "#1a73e8" | jsonify }},
    accentColor: {{ site.theme.accent_color | default: "#3b82f6" | jsonify }},
    chatAccent: {{ site.theme.chat_accent | default: "#0c5fce" | jsonify }}
  }
};
