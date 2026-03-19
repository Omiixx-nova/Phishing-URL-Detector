// Get DOM elements
const urlInput = document.getElementById("urlInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

/**
 * Check if URL contains an IP address instead of domain
 */
function hasIPAddress(url) {
    // Regex to match IPv4 address
    const ipPattern = /^(http(s)?:\/\/)?(\d{1,3}\.){3}\d{1,3}/;
    return ipPattern.test(url);
}

/**
 * Check for suspicious keywords in domain/subdomain
 */
function hasSuspiciousWords(url) {
    const suspiciousPatterns = ["login-", "secure-", "verify-", "account-"];
    return suspiciousPatterns.some(pattern => url.toLowerCase().includes(pattern));
}

/**
 * Main phishing detection logic
 */
function checkPhishing(url) {
    let warnings = [];

    // Rule 1: '@' symbol in URL
    if (url.includes("@")) {
        warnings.push("Contains '@' symbol");
    }

    // Rule 2: IP address instead of domain
    if (hasIPAddress(url)) {
        warnings.push("Uses IP address instead of domain");
    }

    // Rule 3: Suspicious subdomains/keywords
    if (hasSuspiciousWords(url)) {
        warnings.push("Contains suspicious words (login-, secure-, etc.)");
    }

    return warnings;
}

/**
 * Event listener for button click
 */
checkBtn.addEventListener("click", () => {
    const url = urlInput.value.trim();

    if (url === "") {
        result.textContent = "Please enter a URL.";
        return;
    }

    const warnings = checkPhishing(url);

    // Display result safely using textContent (prevents XSS)
    if (warnings.length === 0) {
        result.textContent = "✅ This URL looks safe.";
        result.style.color = "green";
    } else {
        result.textContent = "⚠️ Potential phishing detected: " + warnings.join(", ");
        result.style.color = "red";
    }
});