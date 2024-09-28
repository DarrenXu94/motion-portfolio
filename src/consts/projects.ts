const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/*.{jpeg,jpg,png,gif}"
);

export const projects = [
  {
    name: "Civic lunch",
    preview: "https://lunch.darrenxu.com/",
    description: "Astro website with Notion API backend, hosted for free",
    link: "https://github.com/DarrenXu94/new-civic-lunch",
    imgLink: images["/src/assets/projects/civic-lunch.png"],
  },
  {
    name: "Civic lunch alpha",
    preview: "https://civic-lunch.darrenxu.com/",
    description: "A foodie's journey through lunch",
    link: "https://github.com/DarrenXu94/awake-template",
    imgLink: images["/src/assets/projects/civic-lunch-alpha.png"],
  },
  {
    name: "Wordle animal ripoff",
    preview: "https://animalle.darrenxu.com/",
    description: "A wordle ripoff with animals",
    link: "https://github.com/DarrenXu94/animalle",
    imgLink: images["/src/assets/projects/animalle.png"],
  },
  {
    name: "Cookbook using Notion API",
    preview: "https://cookbook.darrenxu.com/",
    description: "A cookbook site using the Notion API",
    link: "https://github.com/DarrenXu94/vue-cookbook",
    imgLink: images["/src/assets/projects/cookbook.png"],
  },
  {
    name: "Stocky timeline",
    preview: "https://www.stocky.darrenxu.com/",
    description: "A timeline of the Stocky sharehouse (RIP)",
    link: "https://github.com/DarrenXu94/vue-stocky",
    imgLink: images["/src/assets/projects/stocky.gif"],
  },
  {
    name: "Futsal scrape",
    preview: "https://futsal.darrenxu.com/",
    description: "Scraping a poorly built website for my own use",
    link: "https://github.com/DarrenXu94/astro-dribl",
    imgLink: images["/src/assets/projects/futsal-scrape.png"],
  },
  {
    name: "Public API Displayer",
    preview: "https://publicapi.darrenxu.com/",
    description: "A site with a list of public free to use APIs",
    link: "https://github.com/DarrenXu94/public-api-displayer",
    imgLink: images["/src/assets/projects/apis.png"],
  },
  {
    name: "Spritesheet Cropper",
    preview: "https://spritesheet-cropper.vercel.app/",
    description:
      "NextJS app that cuts a single spritesheet into individual images",
    link: "https://github.com/DarrenXu94/spritesheet-cropper",
    imgLink: images["/src/assets/projects/spritesheet.png"],
  },
  {
    name: "ThreeJS Portfolio",
    preview: "https://three.darrenxu.com/",
    description: "A demo site I made to test the skills I learn with ThreeJS",
    link: "https://github.com/DarrenXu94/portfolio-three",
    imgLink: images["/src/assets/projects/three-portfolio.gif"],
  },
  {
    name: "LottieWeb Scroll",
    preview: "https://lottietest.darrenxu.com/",
    description:
      "A demo site exploring LottieFiles, GSAP and scroll animations",
    link: "https://github.com/DarrenXu94/lottie-testing",
    imgLink: images["/src/assets/projects/lottie-scroll.gif"],
  },
  {
    name: "Framer Motion Page Transition",
    preview: "https://framer-transition.darrenxu.com/",
    description: "Framer Motion page transition swipe effect",
    link: "https://github.com/DarrenXu94/framer-page-transition",
    imgLink: images["/src/assets/projects/framer-page.gif"],
  },
  {
    name: "Video Play on Scroll",
    preview: "https://scroll.darrenxu.com/",
    description:
      "Scrolling example using GSAP and TweenMagic to play a video on scroll",
    link: "https://github.com/DarrenXu94/video-play-on-scroll",
    imgLink: images["/src/assets/projects/play-on-scroll.gif"],
  },
  {
    name: "Choccy Blog",
    preview: "https://choccy.darrenxu.com/",
    description:
      "Hear about my latest hard hitting choccy reviews. A Gatsby blog hosted on Netlify with custom React components and styling",
    link: "https://github.com/DarrenXu94/gatsby-starter-netlify-cms",
    imgLink: images["/src/assets/projects/choccy.png"],
  },
  {
    name: "Will it Cereal?",
    preview: "https://willitcereal.darrenxu.com/",
    description:
      "A fun blog where I see what food goes well as a cereal. Another Gatsby blog using the same tools as the Choccy Blog",
    link: "https://github.com/DarrenXu94/will-it-cereal",
    imgLink: images["/src/assets/projects/will-it-cereal.png"],
  },
  {
    name: "DBScan Visualisation",
    description: "CanvasJS representation of the DBScan algorithm",
    preview: "https://darrenxu94.github.io/dbscan-visualiser/",
    link: "https://github.com/DarrenXu94/dbscan-visualiser",
    imgLink: images["/src/assets/projects/db-scan.png"],
  },

  {
    name: "Beam Game",
    preview: "https://darrenxu94.github.io/Beam/",
    description: "A p5js game created for a fun side project",
    link: "https://github.com/DarrenXu94/Beam",
    imgLink: images["/src/assets/projects/beam.gif"],
  },
  {
    name: "Web developer roadmap",
    preview: "https://roadmapdxu.netlify.app/",
    description:
      "Explore a comprehensive web developer roadmap that lists essential technologies, outlining their basic functions and roles in web development. Perfect for beginners and professionals looking to stay updated.",
    link: "https://github.com/DarrenXu94/roadmap",
    imgLink: images["/src/assets/projects/roadmap.png"],
  },
];
