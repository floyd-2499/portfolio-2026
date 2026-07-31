import { AiFillDatabase } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { RiBrushAiFill } from "react-icons/ri";

export const skillSets = [
    {
        key: 1,
        category: "UI/UX Design",
        icon: <RiBrushAiFill />,
        skills: [
            {
                key: 1.1,
                name: "Figma",
                percent: 95,
                description: "Designed wireframes, mockups & interactive prototypes"
            },
            {
                key: 1.2,
                name: "UI Design",
                percent: 85,
                description: "Creating intuitive and visually appealing interfaces"
            },
            {
                key: 1.3,
                name: "UX Design",
                percent: 85,
                description: "User-centered design and usability principles"
            },
            {
                key: 1.4,
                name: "Wireframing",
                percent: 80,
                description: "Planned page structure and user flow using low/high-fidelity wireframes"
            },
            {
                key: 1.5,
                name: "Prototyping",
                percent: 80,
                description: "Built interactive, testable UI flows in Figma"
            },
            {
                key: 1.6,
                name: "Design Systems",
                percent: 80,
                description: "Built reusable components and followed consistent styling"
            },
            {
                key: 1.7,
                name: "Responsive Design (UI)",
                percent: 90,
                description: "Created layouts that adapt smoothly to all screen sizes"
            },
        ]
    },
    {
        key: 2,
        category: "Frontend Development",
        icon: <FaCode />,
        skills: [
            {
                key: 2.1,
                name: "React",
                percent: 90,
                description: "Component architecture, hooks, and context API."
            },
            {
                key: 2.2,
                name: "Next.js",
                percent: 80,
                description: "Server-side rendering, static generation, API routes"
            },
            {
                key: 2.3,
                name: "Typescript",
                percent: 80,
                description: "Type safety and enhanced developer experience"
            },
            {
                key: 2.4,
                name: "JavaScript",
                percent: 80,
                description: "ES6+, DOM manipulation, async programming"
            },
            {
                key: 2.5,
                name: "SCSS",
                percent: 90,
                description: "Organized styling using variables, mixins, and modular architecture"
            },
            {
                key: 2.6,
                name: "Tailwind CSS",
                percent: 70,
                description: "Utility-first responsive UI design with custom themes"
            },
            {
                key: 2.7,
                name: "Redux Saga/Toolkit",
                percent: 80,
                description: "API requests, state management, and managing complex asynchronous logic"
            },
            {
                key: 2.8,
                name: "Responsive Design",
                percent: 90,
                description: "Mobile-first design using breakpoints & Tailwind"
            },
            {
                key: 2.9,
                name: "Framer Motion",
                percent: 90,
                description: "Smooth animations and transitions in React apps"
            },
        ]
    },
    {
        key: 3,
        category: "Backend Development",
        icon: <AiFillDatabase />,
        skills: [
            {
                key: 3.1,
                name: "Postman",
                percent: 70,
                description: "Tested, debugged, and documented REST APIs during development"
            },
            {
                key: 3.2,
                name: "Python",
                percent: 25,
                description: "Basic scripting knowledge; experimented with automation and small projects using AI"
            },
            {
                key: 3.3,
                name: "Node.js",
                percent: 40,
                description: "Exploring server-side capabilities like API routes and data fetching"
            },
            {
                key: 3.4,
                name: "MongoDB",
                percent: 50,
                description: "Basic understanding of NoSQL structure and CRUD operations"
            },
        ]
    },
    {
        key: 4,
        category: "Creative Tools & Extras",
        icon: <BsTools />,
        skills: [
            {
                key: 4.1,
                name: "SVG Animation",
                percent: 70,
                description: "Created lightweight UI animations using SVGs"
            },
            {
                key: 4.2,
                name: "Figma",
                percent: 85,
                description: "Designed produc prototypes, package layouts, invitaions, posters & banners"
            },
            {
                key: 4.3,
                name: "Canva",
                percent: 80,
                description: "Built thumbnails, posters, and brand graphics for quick visuals"
            },
            {
                key: 4.4,
                name: "DaVinci Resolve",
                percent: 50,
                description: "Edited videos with multi-track timelines, transitions, and color grading"
            },
            {
                key: 4.5,
                name: "FL Studio",
                percent: 50,
                description: "Experimented with beat creation and audio composition for music projects"
            },
            {
                key: 4.6,
                name: "Adobe Animate (Free)",
                percent: 40,
                description: "Designed character animations and synced voiceover for fun projects"
            },
        ]
    },
]