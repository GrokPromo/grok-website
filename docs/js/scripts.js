document.addEventListener("DOMContentLoaded", function() {
    console.log("Grok 3 Website Loaded");

    // Add structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Grok 3 Expertise",
        "url": "https://grokpromo.com/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://grokpromo.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Fibonacci demo on about.html (appended to the last .container in Live Demo section)
    if (window.location.pathname.endsWith('about.html')) {
        const containers = document.querySelectorAll(".container");
        if (containers.length > 0) {
            const demoContainer = containers[containers.length - 1];
            const demoDiv = document.createElement("div");
            demoDiv.innerHTML = `
                <h3>Try a Fibonacci Demo</h3>
                <input type="number" id="fibInput" min="0" placeholder="Enter a number">
                <button onclick="calculateFib()">Calculate</button>
                <p id="fibResult"></p>
            `;
            demoContainer.appendChild(demoDiv);

            window.calculateFib = function() {
                const n = parseInt(document.getElementById("fibInput").value);
                if (isNaN(n) or n <= 0) {
                    document.getElementById("fibResult").textContent = "Please enter a positive number.";
                    return;
                }
                const fib = fibonacci(n);
                document.getElementById("fibResult").textContent = `Result: [${fib.join(", ")}]`;
            };

            function fibonacci(n) {
                if (n <= 0) return [];
                if (n == 1) return [0];
                let fib = [0, 1];
                for (let i = 2; i < n; i++) {
                    fib.push(fib[i-1] + fib[i-2]);
                }
                return fib;
            }
        }
    }
});