const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 45, bottom: 45, left: 50, right: 50 },
});

const out = path.join(__dirname, '../public/Julian_Soto_CV_EN.pdf');
doc.pipe(fs.createWriteStream(out));

const RED = '#c0392b';
const BLACK = '#1a1a1a';
const GRAY = '#555555';
const WIDTH = 495; // usable width

// ── HEADER ──────────────────────────────────────────────────────────────
doc.fontSize(26).font('Helvetica-Bold').fillColor(BLACK).text('Julian Soto', { continued: false });

doc
  .fontSize(11)
  .font('Helvetica')
  .fillColor(RED)
  .text('Information Systems Engineer · Full-Stack Developer · AI/ML Engineer');

doc.moveDown(0.4);

// Contact row
doc
  .fontSize(9)
  .fillColor(BLACK)
  .text(
    '■ Quilmes, Buenos Aires, Argentina   ■ +54 9 11 3066 6369   ■ juliansoto-portfolio.vercel.app   ■ github.com/juliandeveloper05',
    { lineGap: 2 }
  );

doc.moveDown(0.5);
doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#cccccc').lineWidth(0.5).stroke();
doc.moveDown(0.6);

// ── SECTION HELPER ──────────────────────────────────────────────────────
function sectionTitle(title) {
  doc.fontSize(10).font('Helvetica-Bold').fillColor(RED).text(title.toUpperCase());
  doc.moveDown(0.15);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#cccccc').lineWidth(0.5).stroke();
  doc.moveDown(0.4);
}

function bullet(text) {
  const x = doc.x;
  doc
    .fontSize(9)
    .font('Helvetica')
    .fillColor(BLACK)
    .text('• ' + text, { indent: 10, width: WIDTH - 10, lineGap: 1 });
}

// ── PROFESSIONAL PROFILE ────────────────────────────────────────────────
sectionTitle('Professional Profile');
doc
  .fontSize(9)
  .font('Helvetica')
  .fillColor(BLACK)
  .text(
    'Full-stack engineer with 3+ years of experience in software development, systems integration, and AI/ML projects. ' +
      'Specialized at the intersection of software and hardware, with hands-on experience in Deep Learning applied to signal processing, ' +
      'industrial protocols (MQTT, serial), and external systems integration in Linux environments. ' +
      'End-to-end profile capable of contributing from backend architecture to React user interfaces.',
    { width: WIDTH, lineGap: 2 }
  );

doc.moveDown(0.7);

// ── TECHNICAL SKILLS ────────────────────────────────────────────────────
sectionTitle('Technical Skills');

const skills = [
  ['Languages', 'Python · TypeScript · JavaScript'],
  ['Frontend', 'React · Next.js · Tailwind CSS · Framer Motion'],
  ['AI / ML', 'PyTorch · TensorFlow · Deep Learning · Signal Processing · Computer Vision'],
  ['DevOps / Infra', 'Docker · Linux · Git · GitHub CLI · Node.js'],
  ['Hardware / IoT', 'MQTT · Serial Protocols · SW/HW Integration · Industrial Sensors'],
  ['Tools', 'Ableton Live · WebSocket · OSC · REST APIs · shadcn/ui'],
];

const labelWidth = 90;
skills.forEach(([label, value]) => {
  const startY = doc.y;
  doc.fontSize(9).font('Helvetica-Bold').fillColor(BLACK).text(label, 50, startY, { width: labelWidth, continued: false });
  doc.fontSize(9).font('Helvetica').fillColor(BLACK).text(value, 50 + labelWidth, startY, { width: WIDTH - labelWidth });
  doc.moveDown(0.2);
});

doc.moveDown(0.5);

// ── FEATURED PROJECTS ───────────────────────────────────────────────────
sectionTitle('Featured Projects');

// Project 1
doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('Dumu AI Bass Extraction');
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(GRAY).text('Personal project · Python · PyTorch · TensorFlow · Deep Learning');
doc.moveDown(0.2);
bullet('Implementation of neural network models for audio separation (bass extraction) using source separation.');
bullet('Model training and fine-tuning with PyTorch and TensorFlow on audio datasets.');
bullet('Complete pipeline: audio ingestion → inference → export. Public repository on GitHub.');
doc.fontSize(9).font('Helvetica').fillColor(BLACK).text('■ github.com/juliandeveloper05/Dumu-AI-Bass-Extraction', { indent: 10 });
doc.moveDown(0.6);

// Project 2
doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('YouTube ↔ Ableton Live Bridge (Chrome Extension)');
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(GRAY).text('Personal project · TypeScript · Node.js · WebSocket · OSC · Linux');
doc.moveDown(0.2);
bullet('Chrome extension that synchronizes YouTube playback with Ableton Live in real time.');
bullet('Communication via WebSocket from the browser to a Node.js bridge server, with OSC protocol translation.');
bullet('Audio routing with VB-Audio Virtual Cable in Linux environment.');
doc.moveDown(0.6);

// Project 3
doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('Personal Portfolio');
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(GRAY).text('Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · Vercel');
doc.moveDown(0.2);
bullet('Professional portfolio development with animations, dark mode, and modular architecture.');
bullet('Deployed on Vercel. Modern stack focused on performance and accessibility.');
doc.fontSize(9).font('Helvetica').fillColor(BLACK).text('■ juliansoto-portfolio.vercel.app', { indent: 10 });
doc.moveDown(0.7);

// ── EXPERIENCE ──────────────────────────────────────────────────────────
sectionTitle('Experience');

doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('Full-Stack Developer & AI/ML Engineer');
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(GRAY).text('Freelance / Personal Projects · 2021 – Present');
doc.moveDown(0.2);
bullet('Full-stack web application development with React, Next.js, and Python.');
bullet('Integration of Deep Learning models in audio signal processing pipelines.');
bullet('Hardware communication implementation via MQTT, serial protocols, and WebSocket.');
bullet('Work in Linux environments with Docker for service containerization.');
bullet('User interface development with React and TypeScript for end products.');
doc.moveDown(0.7);

// ── EDUCATION ───────────────────────────────────────────────────────────
sectionTitle('Education');

doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text("Bachelor's Degree in Computer Science · In Progress");
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(GRAY).text('Universidad Nacional de Quilmes (UNQui) · Quilmes, Argentina · 2022 – Present');
doc.moveDown(0.4);

doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('Sound Engineering (Técnico en Sonido)');
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(GRAY).text('Technical training in acoustics, audio signal processing and music production · Argentina');
doc.moveDown(0.4);

doc.fontSize(10).font('Helvetica-Bold').fillColor(BLACK).text('Business Administration High School Diploma');
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(GRAY).text('Miguel Cané High School · Buenos Aires, Argentina');
doc.moveDown(0.7);

// ── LANGUAGES ───────────────────────────────────────────────────────────
sectionTitle('Languages');

const langY = doc.y;
doc.fontSize(9).font('Helvetica-Bold').fillColor(BLACK).text('Spanish', 50, langY, { width: 80, continued: false });
doc.fontSize(9).font('Helvetica').fillColor(BLACK).text('Native', 130, langY, { width: 150 });
doc.fontSize(9).font('Helvetica-Bold').fillColor(BLACK).text('English', 300, langY, { width: 80, continued: false });
doc
  .fontSize(9)
  .font('Helvetica')
  .fillColor(BLACK)
  .text('Intermediate-Advanced (fluent technical reading)', 380, langY, { width: 165 });

doc.end();
console.log('Generated:', out);
