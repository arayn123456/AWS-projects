import { writeFileSync } from "node:fs";

const content = `0.059 0.435 0.420 rg
0 760 612 32 re f
1 1 1 rg
BT /F2 11 Tf 1 0 0 1 48 772 Tm (ARYAN MISHRA  |  JUNIOR DEVOPS ENGINEER) Tj ET
0.082 0.125 0.161 rg
BT /F2 22 Tf 1 0 0 1 48 722 Tm (Aryan Mishra) Tj ET
0.059 0.435 0.420 rg
BT /F1 12 Tf 1 0 0 1 48 702 Tm (Junior DevOps Engineer) Tj ET
0.36 0.42 0.46 rg
BT /F1 10 Tf 1 0 0 1 48 684 Tm (Cloud Enthusiast  |  AWS Learner) Tj ET
0.25 0.32 0.38 rg
BT /F1 10 Tf 1 0 0 1 48 662 Tm (Email  aryan.mishra.dev@gmail.com     Phone  +91 98765 43210) Tj ET
BT /F1 10 Tf 1 0 0 1 48 648 Tm (LinkedIn  linkedin.com/in/aryanmishra     GitHub  github.com/aryanmishra) Tj ET
0.82 0.85 0.86 rg
48 632 516 1 re f
0.082 0.125 0.161 rg
BT /F2 12 Tf 1 0 0 1 48 610 Tm (SUMMARY) Tj ET
0.2 0.27 0.32 rg
BT /F1 10 Tf 1 0 0 1 48 592 Tm (Fresher DevOps Engineer with hands-on experience in AWS, Linux, Git, Docker,) Tj ET
BT /F1 10 Tf 1 0 0 1 48 578 Tm (Kubernetes, Terraform, Jenkins, GitLab CI/CD, and Cloud Automation.) Tj ET
BT /F1 10 Tf 1 0 0 1 48 560 Tm (Strong interest in Infrastructure as Code, Cloud Computing, and DevOps practices.) Tj ET
0.082 0.125 0.161 rg
BT /F2 12 Tf 1 0 0 1 48 532 Tm (SKILLS) Tj ET
0.2 0.27 0.32 rg
BT /F1 10 Tf 1 0 0 1 48 514 Tm (Linux  |  AWS  |  Docker  |  Kubernetes  |  Terraform  |  Git and GitHub) Tj ET
BT /F1 10 Tf 1 0 0 1 48 500 Tm (Jenkins  |  GitLab CI/CD  |  Python  |  Shell Scripting  |  Networking) Tj ET
0.082 0.125 0.161 rg
BT /F2 12 Tf 1 0 0 1 48 472 Tm (PROJECTS) Tj ET
0.059 0.435 0.420 rg
BT /F2 11 Tf 1 0 0 1 48 452 Tm (CloudSentinel) Tj ET
0.2 0.27 0.32 rg
BT /F1 10 Tf 1 0 0 1 48 436 Tm (Cloud monitoring and automation. Signals, alert rules, and repeatable response steps.) Tj ET
0.059 0.435 0.420 rg
BT /F2 11 Tf 1 0 0 1 48 412 Tm (S3 to Lambda to RDS Automation) Tj ET
0.2 0.27 0.32 rg
BT /F1 10 Tf 1 0 0 1 48 396 Tm (An S3 upload triggers Lambda, which stores file metadata in RDS MySQL.) Tj ET
0.059 0.435 0.420 rg
BT /F2 11 Tf 1 0 0 1 48 372 Tm (Static Website Hosting using S3 and CloudFront) Tj ET
0.2 0.27 0.32 rg
BT /F1 10 Tf 1 0 0 1 48 356 Tm (Secure static hosting with global content delivery through CloudFront.) Tj ET
0.082 0.125 0.161 rg
BT /F2 12 Tf 1 0 0 1 48 328 Tm (PRACTICE) Tj ET
0.2 0.27 0.32 rg
BT /F1 10 Tf 1 0 0 1 48 310 Tm (DevOps Practice Labs  -  Jenkins, GitLab CI/CD, Docker, and Kubernetes.) Tj ET
BT /F1 10 Tf 1 0 0 1 48 294 Tm (AWS Hands-on Projects  -  S3, Lambda, RDS, CloudFront, and Terraform.) Tj ET
BT /F1 10 Tf 1 0 0 1 48 278 Tm (Linux Administration Practice  -  users, services, logs, networking, and shell.) Tj ET
0.082 0.125 0.161 rg
BT /F2 12 Tf 1 0 0 1 48 250 Tm (LEARNING) Tj ET
0.2 0.27 0.32 rg
BT /F1 10 Tf 1 0 0 1 48 232 Tm (AWS Cloud Learning  -  IAM, EC2, S3, VPC basics, Lambda, RDS, CloudFront.) Tj ET
BT /F1 10 Tf 1 0 0 1 48 216 Tm (DevOps Learning Journey  -  Linux, Git, containers, Terraform, and CI/CD.) Tj ET
0.55 0.6 0.64 rg
BT /F1 9 Tf 1 0 0 1 48 72 Tm (Learning paths in progress. Not issued vendor certificates.) Tj ET
`;

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Count 1 /Kids [3 0 R] >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>",
  `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}endstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [0];

objects.forEach((body, index) => {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
});

const xref = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;

writeFileSync(new URL("../public/Aryan-Mishra-Resume.pdf", import.meta.url), pdf, "latin1");
