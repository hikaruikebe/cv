import { AmazonAdsLogo, UTokyoLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hikaru Ikebe",
  initials: "HI",
  location: "New York, NY, USA",
  locationLink:
    "https://www.google.com/maps/place/Columbia+University/@40.8223066,-73.975332,14z/data=!4m10!1m2!2m1!1scolumbia+university!3m6!1s0x89c2f63e96d30dc9:0x577933f947e52750!8m2!3d40.8075355!4d-73.9625727!15sChNjb2x1bWJpYSB1bml2ZXJzaXR5WhUiE2NvbHVtYmlhIHVuaXZlcnNpdHmSAQp1bml2ZXJzaXR5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5TY2pjdFVEZG5SUkFC4AEA!16zL20vMDF3NW0?entry=ttu",
  about:
    "Aspiring Software/ML Engineer focused on building products that make an impact on our world.",
  summary:
    "As a new grad Software/ML Engineer, I aspire to design and develop projects that make an impact on our world. I like to take ownership of my projects but am always open to feedback so that I can absorb and learn as much as possible. I thrive in a collaborative environment where we all work towards a common goal as a team.",
  // "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "hikaru.ikebe@columbia.edu",
    tel: "+15089485798",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hikaruikebe",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hikaruikebe/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Columbia University in the City of New York",
      degree: "Master of Science, Computer Science",
      start: "2021",
      end: "2023",
    },
    {
      school: "The University of Texas at Austin",
      degree: "Bachelor of Science, Biomedical Engineering",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Amazon",
      // link: "https://parabol.co",
      badges: ["Hybrid"],
      title: "Software Development Engineer Intern",
      logo: AmazonAdsLogo,
      start: "2023",
      end: "2023",
      description:
        "Developed a data pipeline for advertisement technologies that successfully ingests over 100 million Amazon user IDs in the US market. Collaborated with senior engineers and product manager to future-proof product and pushed project to production. Technologies: AWS, Python, TypeScript, SQL, Spark",
    },
    {
      company: "Amazon",
      // link: "https://clevertech.biz",
      badges: ["Hybrid"],
      title: "Software Development Engineer Intern",
      logo: AmazonAdsLogo,
      start: "2022",
      end: "2022",
      description:
        "Constructed cache pipeline to process data for users opting out of targeted advertisements. Architected a system that successfully reads 1 million QPS and writes 15 QPS in US and European markets. Technologies: AWS, Java, TypeScript",
      // "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "The University of Tokyo",
      // link: "https://bsgroup.eu/",
      badges: ["Hybrid"],
      title: "Machine Learning Research Assistant",
      logo: UTokyoLogo,
      start: "2020",
      end: "2021",
      description:
        "Research Convolutional Neural Networks (CNN) and Binary Neural Networks (BNN) and its viability on edge devices. Improved accuracy of vanilla BNN by 0.8% while reducing computation parameters by 73% on CIFAR-10 image dataset. Technologies: Python, PyTorch, TensorFlow",
      // "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
  ],
  skills: [
    "Python",
    "Java",
    "TypeScript",
    "SQL",
    "UNIX",
    "Go",
    "C",
    "Amazon Web Services (AWS)",
    "Git",
    "Spark",
    "NumPy",
    "Pandas",
    "OpenCV",
    "PyTorch",
    "TensorFlow",
    "MongoDB",
    "CUDA",
  ],
  projects: [
    {
      title: "GoParkMe",
      techStack: [
        "School Project",
        "AWS",
        "CI/CD",
        "Python",
        "Computer Vision",
      ],
      description:
        "Fullstack web app that navigates clients to vacant parking spots, which are detected using live CCTV and Mask-RCNN (computer vision AI) techniques",
      // logo: ConsultlyLogo,
      link: {
        label: "GoParkMe",
        href: "https://github.com/goparkme22/goParkMe/",
      },
    },
    {
      title: "Photo Album Web Application",
      techStack: [
        "School Project",
        "AWS",
        "CI/CD",
        "Python",
        "JavaScript",
        "Computer Vision",
      ],
      description:
        "Photo album web app that allows users to upload and search photos using text and voice commands using CV and NLP techniques",
      // logo: MonitoLogo,
      link: {
        label: "PhotoAlbumWebApplication",
        href: "https://github.com/jordenjoe/cloud-a2/",
      },
    },
    {
      title: "NYC Restaurant Recommender",
      techStack: ["School Project", "AWS", "Python"],
      description:
        "Chatbot that uses Yelp API data to recommend restaurants to users based on their preferences.",
      // logo: JarockiMeLogo,
      link: {
        label: "RestaurantRecommender",
        href: "https://github.com/jordenjoe/cloud-a1/",
      },
    },
    {
      title: "Self Driving Car",
      techStack: ["Side Project", "JavaScript"],
      description:
        "Project for me to study and build neural networks in a non-Python language from scratch. The agent learns how to drive a car through traffic over time.",
      // logo: Minimal,
      link: {
        label: "SelfDrivingCar",
        href: "https://github.com/hikaruikebe/self-driving-car/",
      },
    },
    {
      title: "Smart Snake",
      techStack: ["Side Project", "Python", "PyTorch"],
      description:
        "Project for me to study reinforcement learning and deep Q-learning. The agent learns how to play the game Snake using these two ML methods.",
      // logo: Minimal,
      link: {
        label: "SmartSnake",
        href: "https://github.com/hikaruikebe/snake/",
      },
    },
    {
      title: "Cryptopoly: Hoya Hack 2022 Build-a-Game Track Winner",
      techStack: ["Hackathon", "JavaScript", "HTML/CSS"],
      description:
        "Cryptocurrency-themed Monopoly web app multiplayer game. Property prices are based on real-time crypto prices.",
      // logo: Minimal,
      link: {
        label: "Cryptopoly",
        href: "https://github.com/Hoya2022/Cryptopoly/",
      },
    },
  ],
} as const;
