import { ProfileType } from "../types/ProfileType"

export const profile: ProfileType = {
  firstName: "Patrick",
  lastName: "Vuong",
  image: { src: "pv.jpg", caption: "Patrick Vuong" },
  position: "QA Automation Lead | Software Developer",
  summary:
    "Hi there! My name is Pat. I am a passionate software developer and automation engineer with a strong focus on cloud technologies and a proven track record of success in establishing robust frameworks and test strategies. Currently working as a QA automation lead in the financial sector.\n\nI thrive on solving complex problems and enjoy building innovative applications to address critical business challenges. In addition to working on projects, I like to do daily coding challenges testing the application of different algorithms and data structures to different challenges. I keep an updated list of these challenges and my solutions on my GitHub page which feature my own interpretation of various algorithms and data structures coded in Python and JavaScript. Outside of IT, I am an avid sports fan, I follow tennis and basketball and play badminton competitively.\n\nI am always eager to collaborate with like-minded professionals, learn from diverse perspectives, and contribute to projects that make a tangible impact. If you are looking for a dedicated automation engineer/software developer with a passion for cloud technologies, problem-solving expertise, and a drive for innovation, let's connect and explore potential opportunities.",
  tags: ["JavaScript", "Java", "Python", "AWS", "ISTQB"],
  location: "Melbourne, Australia",
  resumeLink: "",
  certifications: [
    {
      image: {
        src: "aws-certified-solutions-architect-associate.png",
        caption: "AWS Solutions Architect",
      },
      link: "https://www.credly.com/badges/80ae0cd0-73e3-4a9e-bd0b-7a444b3710b2/public_url",
    },
    {
      image: {
        src: "aws-certified-developer-associate.png",
        caption: "AWS Developers Associate",
      },
      link: "https://www.credly.com/badges/9d5f0150-65d8-466a-82af-2182d62ad8a7/public_url",
    },
    {
      image: {
        src: "aws-certified-cloud-practitioner.png",
        caption: "AWS Cloud Practitioner",
      },
      link: "https://www.credly.com/badges/76a6c475-4f30-4e90-9151-fd6904d52702/public_url",
    },
    {
      image: { src: "istqb_foundation.png", caption: "ISTQB Foundation Level" },
      link: "https://postmanpatdev.s3.ap-southeast-2.amazonaws.com/docs/21-CTFL-195221-12.pdf",
    },
    {
      image: {
        src: "isqi_agile_essentials.png",
        caption: "iSQI Agile Essentials",
      },
      link: "https://postmanpatdev.s3.ap-southeast-2.amazonaws.com/docs/21-CAEFL-194181-25.pdf",
    },
  ],
}
