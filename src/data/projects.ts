import { ProjectType } from '../types/ProjectType'

export const projects: ProjectType[] = [
    {    
        id: "1",
        projectName: 'Badminton Social Manager',
        summary: 'The Badminton Socials Management App is a user-friendly CRUD application developed using the MERN stack.\n\n It serves as a tool for efficiently organizing and managing badminton social sessions.',
        image: { src: 'baddy-social-manager1.png', caption: 'Badminton Social Manager Login Page' }, 
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
        image: { src: 'the-mind-home-screen.png', caption: 'The Mind Login Page' }, 
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
        image: { src: 'pv.jpg', caption: 'Placeholder' }, 
        startDate: 'Jan 2020',
        endDate: 'Current',
        tags: ['Website', 'AWS', 'Cloud Resume'],
        githubURL: "google.com"
    },
    {    
        id: "4",
        projectName: 'Alogorithms and Data Structures',
        summary: 'Lorem Ipsum',
        image: { src: '', caption: '' }, 
        startDate: '',
        endDate: '',
        tags: [],
        demoURL: "google.com", 
        githubURL: "google.com"
    },
    {    
        id: "5",
        projectName: 'Automation Boilerplate',
        summary: 'Lorem Ipsum',
        image: { src: '', caption: '' }, 
        startDate: '',
        endDate: '',
        tags: [],
        demoURL: "google.com", 
        githubURL: "google.com"
    }
]