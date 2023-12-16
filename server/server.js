// // const express = require('express');
// // const nodemailer = require('nodemailer');
// // const bodyParser = require('body-parser');
// // const cors = require("cors");
// // const app = express();

// // app.use(bodyParser.json());
// // app.use(cors());
// // app.use(express.json({ limit: "25mb" }));
// // app.use(express.urlencoded({ limit: "25mb" }));
// // app.use((req, res, next) => {
// //   res.setHeader("Access-Control-Allow-Origin", "*");
// //   next();
// // });
// // app.post('/api/send-email', (req, res) => {
// //   const { name, email, message } = req.body;

// //   const transporter = nodemailer.createTransport({
// //     service: "gmail",
// //     auth: {
// //       user: 'eliraniracha@gmail.com',
// //       pass: 'Alirani1710',
// //     },
// //   });

// //   const mailOptions = {
// //     from: 'eliraniracha@gmail.com',
// //     to: 'rachaelirani63@gmail.com',
// //     subject: 'Email From My Portfolio',
// //     text: `Name: ${name}\nMessage: ${message}`,
// //   };

// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.error(error);
// //       res.status(500).send('Failed to send email');
// //     } else {
// //       console.log('Email sent: ' + info.response);
// //       res.status(200).send('Email sent successfully');
// //     }
// //   });
// // });

// // app.listen(3000, () => {
// //   console.log('Server is running on port 3000');
// // });

// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require("cors");
// const app = express();

// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: "25mb" }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.post('/api/send-email', (req, res) => {
//   // const { name, email, message } = req.body;

//   // if (!name || !email || !message) {
//   //   return res.status(400).json({ error: "Missing required fields in the request" });
//   // }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: '***********@gmail.com',
//       pass: '************',
//     },
//   });

//   const mailOptions = {
//     from: 'eliraniracha@gmail.com',
//     to: 'rachaelirani63@gmail.com',
//     subject: 'Email From My Portfolio',
//     text: `Message: hello `,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: "Failed to send email" });
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).json({ message: "Email sent successfully" });
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// Your code here
// !!!!!!!!!!!!! don't touch !!!!!!!!!!!!!!!
// "type": "module",
//  "start": "node server.js",
//  "start": "react-scripts start",
// !!!!!!!!!!!!! don't touch !!!!!!!!!!!!!!!
import express from "express";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/submit", (req, res) => {
  console.log(req.body);
});
/////

app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, 'src', 'index.js'));
  res.sendFile(__dirname + "/public/index.html");
  // res.sendFile(path.join(__dirname, 'src', 'index.js'));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
