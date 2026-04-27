import toDo_URL from "../../assets/todo.png";
import weaterapp_URL from "../../assets/preview.jpg"
import airtel_URl from "../../assets/airtel.png"
import paste_app from "../../assets/paste-app.png";
import e_commerce_site from "../../assets/desktop-preview.jpg"
import social_app from "../../assets/social-media-application.png";
import feedback_app from "../../assets/feedback.jpeg";

export const data = [
  {
    id: 0,
    name: "Social Media Application",
    img: social_app,
    link: "https://github.com/asia272/full-stack-social-media-application",
    site: "https://full-stack-social-media-application.vercel.app/",
    type: "fullstack",
  },

  {
    id: 2,
    name: "Feedback Fusion application",
    img: feedback_app,
    link: "https://github.com/asia272/NextJS_POSTGRES_Clerk_FullStack_Project",
    site: "https://next-js-postgres-clerk-full-stack-p.vercel.app/",
    type: "fullstack",
  },
  {
    id: 3,
    name: "Weather App",
    img: weaterapp_URL,
    link: "https://github.com/asia272/weather-app",
    site: "https://weather-app-six-mocha-2yljnsbf39.vercel.app/",
    type: "frontend",
  },
  {
    id: 4,
    name: "Todo App",
    img: toDo_URL,
    site: "https://frontend-mentor-mauve.vercel.app/react-projects/intermediate/todo-app/",
    link: "https://github.com/asia272/Frontend-Mentor/tree/main/react-projects/intermediate/todo-app",
    type: "frontend",
  },
  {
    id: 5,
    name: "Paste App",
    img: paste_app,
    link: "https://github.com/asia272/React-Paste-App",
    site: "https://paste-app-pearl.vercel.app/",
    type: "frontend",
  },

  {
    id: 6,
    name: "E-commerce Page",
    img: e_commerce_site,
    site: "https://frontend-mentor-mauve.vercel.app/react-projects/intermediate/e-commerce-product-page/#",
    link: "https://github.com/asia272/Frontend-Mentor/tree/main/react-projects/intermediate/e-commerce-product-page",
    type: "frontend",
  },
  {
    id: 7,
    name: "Airtel website",
    img: airtel_URl,
    link: "https://github.com/asia272/Airtel-clone",
    site: "https://asia272.github.io/Airtel-clone/",
    type: "frontend",
  },
];
export const projectBtn = [
    {
        btn: "all"
    },
    {
        btn: "frontend",
    },
    {
        btn: "fullstack"
    }
]
