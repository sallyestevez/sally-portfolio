import EclipseSoundscapes from "./images/EclipseSoundscapes.png";

var projects = [
  {
    id: "ktown4u-redesign",
    title: "Ktown4u Redesign",
    completed: "Summer 2024",
    type: "Product Design",
    blurb: "Improving web users' experiences",
    projectText: [
      {
        type: "p",
        data: "placeholder",
      },
    ],
    image: {
      url: { EclipseSoundscapes },
      alt: "Eclipse Soundscapes screenshot",
    },
  },
  {
    id: "retail-horror-stories",
    title: "Retail Horror Stories: Black Friday Edition",
    completed: "Spring 2023",
    type: "Web Development",
    blurb: `A "Choose Your Own Adventure" game inspired by real retail workers' experiences during Black Friday.`,
    projectText: [
      {
        type: "p",
        data: "The player takes the role of a Walmart employee navigating different retail scenarios and making choices that impact the storyline.",
      },
      {
        type: "p",
        data: "The game was made with HTML, CSS, and JavaScript. There is also background music to enhance the gaming experience.",
      },
    ],
    image: {
      url: "../RetailHorrorStories.png",
      alt: "Retail Horror Stories screenshot",
    },
  },
  {
    id: "kirbys-corner",
    title: "Kirby's Corner",
    completed: "Spring 2023",
    type: "Web Development",
    blurb: "An interactive fanpage dedicated to the Kirby universe",
    projectText: [
      {
        type: "p",
        data: "This site features detailed information about Kirby games, characters, and lore, presented through a visually appealing and user-friendly interface.",
      },
      {
        type: "p",
        data: "The website was created using HTML, CSS, and JavaScript. To add on to the site's interactivity, I included a music player and a quiz.",
      },
      {
        type: "p",
        data: "I was in charge of everything related to the project, from planning to creation. The project was well-received at the IDM Senior Showcase.",
      },
    ],
    image: {
      url: "../KirbysCorner.png",
      alt: "Kirby's Corner screenshot",
    },
  },
  {
    id: "eclipse-soundscapes",
    title: "Eclipse Soundscapes",
    completed: "Winter 2022",
    type: "Product Design",
    blurb:
      "Enhancing the accessibility of a field researcher training page for older adults",
    projectText: [
      {
        type: "p",
        data: "My group and I gathered insights to improve usability by conducting user interviews with individuals aged 55 and older.",
      },
      {
        type: "p",
        data: "We optimized navigation, typography, and contrast ratios to create a user-friendly interface that complies with WCAG guidelines.",
      },
      {
        type: "p",
        data: "We created wireframes and used them to build a prototype in Figma.",
      },
    ],
    image: {
      url: "../EclipseSoundscapes.png",
      alt: "Eclipse Soundscapes screenshot",
    },
  },
  {
    id: "miiverse-revival",
    title: "Miiverse Revival",
    completed: "Fall 2022",
    type: "Web Development",
    blurb: `A "revival" of the now-defunct Nintendo social media site called Miiverse`,
    projectText: [
      {
        type: "p",
        data: "I wanted the user experience to feel as close to the original Miiverse as possible, so I replicated Miiverse's user interface.",
      },
      {
        type: "p",
        data: "Users can make their own accounts and create posts that are then displayed on the Activity Feed.",
      },
      {
        type: "p",
        data: "The website was created using HTML, CSS, React, and Firebase.",
      },
    ],
    image: {
      url: "../MiiverseRevival.png",
      alt: "Miiverse Revival screenshot",
    },
  },
  {
    id: "discord-file-compressor",
    title: "Discord File Compressor",
    completed: "Fall 2022",
    type: "Product Design",
    blurb: "An in-app compression feature for larger files on the Discord app",
    projectText: [
      {
        type: "p",
        data: "Discord does not allow users to send files larger than 8 MB. I proposed a Discord update that would include an in-app compression feature for larger files.",
      },
      {
        type: "p",
        data: "I conducted user interviews to determine what Discord users were interested in. I also researched competitors to see how their features differ from Discord's.",
      },
      {
        type: "p",
        data: "I created wireframes and used them to build a prototype in Figma.",
      },
    ],
    image: {
      url: "../DiscordFileCompressor.png",
      alt: "Discord File Compressor",
    },
  },
  {
    id: "visit-mira",
    title: "Visit Mira",
    completed: "Fall 2021",
    type: "Web Development",
    blurb: "We're stuck on a different planet - by choice",
    projectText: [
      {
        type: "p",
        data: `This is a "travel website" for the fictional planet Mira from the video game Xenoblade Chronicles X. There is a separate page for each region in the game (for a total of 5) and a home page.`,
      },
      {
        type: "p",
        data: "The website was created using HTML, CSS, and JavaScript. It also uses the Fancybox JavaScript library.",
      },
    ],
    image: {
      url: "../VisitMira.png",
      alt: "Visit Mira screenshot",
    },
  },
];

export default projects;
