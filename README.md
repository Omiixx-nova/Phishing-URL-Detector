# Phishing URL Detector

A simple web application to detect potential phishing URLs using basic pattern checks.

## 🚀 Features

* Detects common phishing patterns:

  * '@' symbol in URL
  * IP address instead of domain
  * Suspicious keywords (login-, secure-, etc.)
* Safe output rendering using `textContent`
* Clean and minimal UI
* Fully client-side (no backend required)

## 📁 Project Structure

```
phishing-url-detector/
│
├── index.html    # App structure
├── styles.css    # Styling
└── script.js     # Logic and detection
```

## 🛠️ How to Use

1. Open `index.html` in your browser
2. Enter a URL in the input field
3. Click "Check URL"
4. View the result

## 🔐 Security Notes

* Uses `textContent` instead of `innerHTML` to prevent XSS attacks
* No external libraries used

## ⚠️ Limitations

* This is a basic heuristic tool, not a full security solution
* Cannot detect advanced phishing techniques
* Does not verify SSL certificates or domain reputation

## 💡 Future Improvements

* Integrate real-time phishing APIs (Google Safe Browsing)
* Add URL parsing for deeper analysis
* Display risk score instead of simple warning
* Browser extension version

## 📜 License

Free for educational and personal use.
