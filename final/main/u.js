const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Serve static files (CSS, images)
app.use(express.static(__dirname));

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve all HTML pages
['main','ca','h','p','s','u'].forEach(p => {
    app.get(`/${p}.html`, (req,res)=> res.sendFile(path.join(__dirname, `${p}.html`)));
});

// Default route -> Utah page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'u.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, destination, message } = req.body;

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmation</title>
            <link rel="stylesheet" href="main.css">
        </head>
        <body>
            <header>
                <h1>Form Submission Confirmation</h1>
            </header>
            <nav>
                <div class="statement">My Travel</div>
                <ul class="nav">
                    <li><a href="main.html">Home</a></li>
                    <li><a href="ca.html">Cambodia</a></li>
                    <li><a href="h.html">Hawaii</a></li>
                    <li><a href="p.html">Philippines</a></li>
                    <li><a href="s.html">Singapore</a></li>
                    <li><a href="u.html" class="active">Utah</a></li>
                </ul>
            </nav>
            <main class="container">
                <h2>Thank you, ${name}!</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Destination Interested In:</strong> ${destination}</p>
                <p><strong>Message:</strong> ${message}</p>
                <a href="/u.html">Go back to form</a>
            </main>
            <footer>
                <p>&copy;2025 Dang Ngoc Anh Do copy right reserved</p>
            </footer>
        </body>
        </html>
    `);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
