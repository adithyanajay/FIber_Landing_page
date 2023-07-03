import { allSizes, code, time, user_1, user_2, user_3 } from "../Assets"

export const navlinks = [
    {
        id: 1,
        name: "Community",
        type: "link"
    },
    {
        id: 2,
        name: "Pricing",
        type: "link"
    },
    {
        id: 3,
        name: "Features",
        type: "link"
    },
    {
        id: 4,
        name: "Sign In",
        type: "btn",
        color: false
    },
    {
        id: 5,
        name: "Sign Up",
        type: "btn",
        color: true
    },
]

export const checklist = [
    {
        content: "No credit card required"
    },
    {
        content: "10 free templates"
    }
]

export const features = [
    {
        img: time,
        heading: "Build in minutes",
        content: "With a selection of premade templates, you can build out a portfolio in less than 10 minutes."
    },
    {
        img: code,
        heading: "Add custom CSS",
        content: "Customize your personal portfolio even more with the ability to add your own custom CSS styles."
    },
    {
        img: allSizes,
        heading: "Responsive",
        content: "All Fiber templates are fully responsive to ensure the experience is seemless across all devices."
    }
]

export const testimonials = [
    {
        img: user_1,
        name: "Sarah Andrews",
        revenue: "$100k in revenue",
        content: "Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.",
        button: "View Sarah's Portfolio"
    },
    {
        img: user_2,
        name: "Mathew Higgins",
        revenue: "$20k in revenue",
        content: "I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!",
        button: "View Mathew's Portfolio"
    },
    {
        img: user_3,
        name: "Janice Dave",
        revenue: "$30k in revenue",
        content: "I only just started freelancing this year and I have already made more than I ever mad in my full-time job. The templates are just so amazing.",
        button: "View Janice's Portfolio"
    },
]

export const footer_links = [
    {
        name: "Sitemap",
        links: ["Homepage", "Pricing", "Testimonials", "Features"]
    },
    {
        name: "Resources",
        links: ["Support", "Contact", "FAQ"]
    },
    {
        name: "Company",
        links: ["About", "Customers", "Blog"]
    },
    {
        name: "Portfolios",
        links: ["Sarah Andrews", "Mathew Higgins", "Janice Dave"]
    }
]