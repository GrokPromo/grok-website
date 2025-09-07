document.addEventListener("DOMContentLoaded", function() {
    console.log("Grok 3 Website Loaded");
});

// Add structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Grok 3 Expertise",
    "url": "https://yourusername.github.io/grok-website/",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://yourusername.github.io/grok-website/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);