import { ProjectType } from '../types/ProjectType'

export const projects: ProjectType[] = [
    {    
        id: "1",
        projectName: 'Badminton Social Manager',
        summary: 'The Badminton Socials Management App is a user-friendly CRUD application developed using the MERN stack.\n\n It serves as a tool for efficiently organizing and managing badminton social sessions.',
        image: { src: '', caption: '' }, 
        startDate: 'Jan 2020',
        endDate: 'Jan 2021',
        tags: ['EC2', 'MongoDB' ,  'CRUD', 'Social', 'AWS'],
        demoURL: "google.com", 
        githubURL: "google.com"
    }, 
    {    
        id: "2",
        projectName: 'The Mind Card Game',
        summary: 'Online version of "The Mind" Card Game \n\n Developed as a side project during the Covid lockdowns, this virtual rendition of Wolfgang Warsch\'s renowned card game brings the thrill of synchronous gameplay via the use of SocketIO and DynamoDB',
        image: { src: '', caption: '' }, 
        startDate: 'Jan 2021',
        endDate: 'Jan 2021',
        tags: ['EC2', 'Real Time' ,  'Socket.IO', 'Game', 'AWS'],
        demoURL: "google.com", 
        githubURL: "google.com"
    }, 
    {    
        id: "3",
        projectName: 'postmanpat.dev',
        summary: 'As part of the Cloud Resume Challenge, I designed and developed a personal website showcasing my skills, projects, and professional experience.\n\n This project served as a comprehensive demonstration of my expertise in various areas of AWS architecture and cloud technologies.',
        image: { src: '', caption: 'Placeholder' }, 
        startDate: 'Jan 2020',
        endDate: 'Current',
        tags: ['Website', 'AWS', 'Cloud Resume'],
        githubURL: "google.com"
    },
    {    
        id: "4",
        projectName: 'Alogorithms and Data Structures',
        summary: 'A collection of completed coding challenges from Edabit, Leetcode, and HackerRank. Challenges contain my own interpretation of various algorithms and data structures including Stacks, HahsMaps, Dyanmic Programming, DFS, BFS, Pathfinding Algorithms and many more.',
        image: { src: '', caption: '' }, 
        startDate: 'Jan 2020',
        endDate: 'Current',
        tags: ['Algorithms', 'Data Structures', 'Python', 'JavaScript', 'Competitive Programming'],
        demoURL: "google.com", 
        githubURL: "google.com"
    },
    {    
        id: "5",
        projectName: 'Enterprise Level Automation Framework',
        summary: 'Enterprise level Automation Framework including: \n\n UI testing with Selenium Python. Using similiar Java and C# object oriented programming structure (Page Object Models and POJO\'s) adapted for Python.\n\nEnterprise wide intergation and microservices testing using Python\'s Request module and AWS boto3.',
        image: { src: '', caption: '' }, 
        startDate: 'Jun 2023',
        endDate: 'Jan 2024',
        tags: ['Automation', 'Python', 'Behave', 'POJO', 'POM', 'AWS', 'boto3'],
        demoURL: "", 
        githubURL: "google.com"
    }, 
    {    
        id: "6",
        projectName: 'Selenium Java Automation Framework',
        summary: 'Automation Framework using Selenium Java and TestNG for UI test automation of a simple online retailer website',
        image: { src: '', caption: '' }, 
        startDate: 'Oct 2022',
        endDate: 'Dec 2022',
        tags: ['Automation', 'Java', 'TestNG', 'POJO', 'POM'],
        demoURL: "", 
        githubURL: "google.com"
    }
]