const express = require('express');
const app = express()
const nodemailer = require('nodemailer');
require('dotenv').config()


//
//
//
//

// const http = require("http")
// const path = require("path")
// const fs = require("fs")
// const server = http.createServer((req, res) => {
//     // Build file path dynamic
//     let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url)

//     // Extension of file
//     let extensionName = path.extname(filePath)

//     // Initial content type
//     let contentType = "text/html"

//     // Check ext and set content type
//     switch (extensionName) {
//         case ".js":
//             contentType = "text/javascript";
//             break;
//         case ".css":
//             contentType = "text/css";
//             break;
//         case ".json":
//             contentType = "application/json";
//             break;
//         case ".png":
//             contentType = "image/png";
//             break;
//         case ".jpg":
//             contentType = "image/jpg";
//             break;
//     }
//     if (contentType == "text/html" && extensionName == "") filePath += ".html";
//     // log the filePath
//     console.log(filePath);
//     // Read file
//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             if (err.code == "ENOENT") {
//                 // Page not found
//                 fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
//                     res.writeHead(404, { "Content-Type": "text/html" });
//                     res.end(content, "utf8");
//                 });
//             } else {
//                 // Some server error
//                 res.writeHead(500)
//                 res.end(`Server Error: ${err.code}`);
//             }
//         } else {
//             // Success
//             res.writeHead(200, { "Content-Type": contentType })
//             res.end(content, "utf8")
//         }
//     })
// })

//
//
//
//

const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.static('public'));
app.use(express.json())

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/contact.html')
// })


/* -------------------------- Home -------------------------- */
app.get("/", (request, response) => {
    response.sendFile("/index.html");
});

/* -------------------------- Menu Pages -------------------------- */
app.get("/websites", (request, response) => {
    response.sendFile(__dirname + "/public/websites.html");
});

app.get("/webapps", (request, response) => {
    response.sendFile(__dirname + "/public/webapps.html");
});

app.get("/email-signature-generator", (request, response) => {
    response.sendFile(__dirname + "/public/email-signature-generator.html");
});

app.get("/qr-code-generator", (request, response) => {
    response.sendFile(__dirname + "/public/qr-code-generator.html");
});

app.get("/logos", (request, response) => {
    response.sendFile(__dirname + "/public/logos.html");
});

app.get("/testimonials", (request, response) => {
    response.sendFile(__dirname + "/public/testimonials.html");
});

app.get("/contact", (request, response) => {
    response.sendFile(__dirname + "/public/contact.html");
});

app.get("/project-progress", (request, response) => {
    response.sendFile(__dirname + "/public/project-progress.html");
});

app.get("/jbc-info", (request, response) => {
    response.sendFile(__dirname + "/public/jbc-info.html");
});

app.get("/jbc-video", (request, response) => {
    response.sendFile(__dirname + "/public/jbc-video.html");
});

app.get("/intake-form", (request, response) => {
    response.sendFile(__dirname + "/public/intake-form.html");
});

/* -------------------------- Contact Form -------------------------- */
app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SECRET_ID,
            pass: process.env.SECRET_KEY,
        }
    })
    const mailOptions = {
        from: 'req.body.email',
        to: process.env.SECRET_ID,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: `Message from Dash Interactive Contact Form
        
        ${req.body.message}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log(`Email sent: ${info.response}`)
            res.send('success')
        }
    })
})

/* -------------------------- 404 -------------------------- */
app.use((request, response, next) => {
    response.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})