import { FaAws, FaNetworkWired } from "react-icons/fa";
import {
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGnubash,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiPython,
  SiTerraform,
} from "react-icons/si";

/**
 * Replace the contact links, email, and phone before publishing.
 * Project repository URLs are placeholders until the real repos are public.
 */
export const profile = {
  name: "Aryan Mishra",
  role: "Junior DevOps Engineer",
  tags: ["Cloud Enthusiast", "AWS Learner"],
  headline: "Junior DevOps Engineer",
  subheading:
    "Passionate about AWS, Linux, Docker, Kubernetes, Terraform, CI/CD, and Cloud Automation.",
  email: "aryan.mishra.dev@gmail.com",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  linkedin: "https://www.linkedin.com/in/aryanmishra",
  github: "https://github.com/aryanmishra",
  githubHandle: "aryanmishra",
  resume: "/Aryan-Mishra-Resume.pdf",
};

export const about = {
  lead: "Fresher DevOps Engineer with hands-on experience in AWS, Linux, Git, Docker, Kubernetes, Terraform, Jenkins, GitLab CI/CD, and Cloud Automation.",
  focus:
    "Strong interest in Infrastructure as Code, Cloud Computing, and DevOps practices.",
  pillars: [
    {
      title: "Infrastructure as Code",
      text: "Describing cloud resources in Terraform so environments stay repeatable and reviewable.",
    },
    {
      title: "Cloud Computing",
      text: "Learning AWS services hands-on, from storage and compute to serverless and delivery.",
    },
    {
      title: "DevOps practices",
      text: "Connecting Git, pipelines, containers, and automation into a clear delivery flow.",
    },
  ],
};

export const skills = [
  { name: "Linux", icon: SiLinux },
  { name: "AWS", icon: FaAws, brand: "#FF9900" },
  { name: "Docker", icon: SiDocker, brand: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, brand: "#326CE5" },
  { name: "Terraform", icon: SiTerraform, brand: "#7B42BC" },
  { name: "Git & GitHub", icon: SiGithub },
  { name: "Jenkins", icon: SiJenkins, brand: "#D33833" },
  { name: "GitLab CI/CD", icon: SiGitlab, brand: "#E24329" },
  { name: "Python", icon: SiPython, brand: "#3776AB" },
  { name: "Shell Scripting", icon: SiGnubash },
  { name: "Networking", icon: FaNetworkWired },
];

export const projects = [
  {
    title: "CloudSentinel",
    summary: "Cloud monitoring and automation project.",
    architecture: ["Signals", "Rules", "Alerts", "Automation"],
    architectureNote:
      "Collectors watch cloud health, rules evaluate thresholds, and automation runs a repeatable response.",
    features: [
      "Tracks resource health and key operational signals",
      "Raises alerts when a defined threshold is crossed",
      "Pairs monitoring with small automation steps",
    ],
    stack: ["AWS", "Linux", "Python", "Terraform"],
    github: "https://github.com/aryanmishra/cloudsentinel",
  },
  {
    title: "S3 → Lambda → RDS Automation",
    summary: "An AWS upload flow that records file metadata in MySQL.",
    architecture: ["S3 upload", "Event", "Lambda", "RDS MySQL"],
    architectureNote:
      "A file uploaded to S3 triggers Lambda. Lambda writes the file metadata into RDS MySQL.",
    features: [
      "S3 event notification starts the workflow",
      "Lambda reads the upload event and prepares metadata",
      "RDS MySQL stores the record for later lookup",
    ],
    stack: ["Amazon S3", "AWS Lambda", "RDS", "MySQL"],
    github: "https://github.com/aryanmishra/s3-lambda-rds",
  },
  {
    title: "Static Website Hosting using S3 + CloudFront",
    summary: "Secure static hosting with global content delivery.",
    architecture: ["S3 origin", "CloudFront", "HTTPS", "Edge cache"],
    architectureNote:
      "The site lives in S3 and is served worldwide through CloudFront, with caching at the edge.",
    features: [
      "Static website hosted from an S3 origin",
      "Global delivery through CloudFront",
      "HTTPS in front of the origin for a safer public site",
    ],
    stack: ["Amazon S3", "CloudFront", "IAM", "DNS"],
    github: "https://github.com/aryanmishra/s3-cloudfront-site",
  },
];

export const experience = [
  {
    title: "DevOps Practice Labs",
    text: "Practiced the delivery path from Git to running containers: pipelines in Jenkins and GitLab CI/CD, images with Docker, and deployments on Kubernetes.",
  },
  {
    title: "AWS Hands-on Projects",
    text: "Built small cloud workflows with S3, Lambda, RDS, and CloudFront, and used Terraform to describe infrastructure instead of clicking through the console.",
  },
  {
    title: "Linux Administration Practice",
    text: "Worked through users, permissions, services, logs, networking basics, and shell scripts used to automate everyday administration tasks.",
  },
];

export const certifications = [
  {
    title: "AWS Cloud Learning",
    text: "Hands-on study of core AWS building blocks: IAM, EC2, S3, VPC basics, Lambda, RDS, and CloudFront.",
    status: "In progress",
  },
  {
    title: "DevOps Learning Journey",
    text: "A practice path across Linux, Git, Docker, Kubernetes, Terraform, Jenkins, and GitLab CI/CD.",
    status: "In progress",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const pipeline = [
  { label: "Git", icon: SiGit },
  { label: "Jenkins", icon: SiJenkins },
  { label: "Docker", icon: SiDocker },
  { label: "K8s", icon: SiKubernetes },
  { label: "AWS", icon: FaAws },
];
