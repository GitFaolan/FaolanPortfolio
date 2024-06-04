module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Faolán Brazil',
    // Main Site Title
    title: `Faolán Brazil | UX Researcher / Interaction Designer`,
    // Description that goes under your name in main bio
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    // github: `https://github.com/ryanfitzgerald`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/faolanb/`,
    // Content of the About Me section
    about: `I am a driven and creative individual with a diverse skill set and broad experience across multiple fields. I have seasoned practical experience in Product program management and my academic background in HCI and UX is robust. I have a profound interest in gaming, technology, and a good ol’ story. I believe these elements can all become catalysts for positive change. My commitment lies in mastering new technologies, tackling intricate challenges, and employing both logical reasoning and innovative thinking to enhance user experiences and foster growth.

    Passionate about cutting-edge technologies like AI, Mixed Reality, and Social Networking, I advocate for using technology to enhance quality of life and create bold opportunities. With a track record of successfully leading teams and bringing ambitious ideas to fruition, I rely on my creativity and storytelling passion to drive innovation and make a meaningful impact on the world.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Can Virtual Reality Encourage Empathy for Autism?',
        description:
          'lorem ipsum',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Multimodal device',
        description:
        'lorem ipsum',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Whale Research',
        description:
          'Lorem ipsum',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'F. Brazil Reinforcements',
        description: 'IT Systems Assistant Manager, July 2023 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Pocket Worlds',
        description: 'Jr. Product Manager, January 2022 - October 2022',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Pocket Worlds',
        description: 'Quality Assurance, May 2021 - January 2022',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'UX Research',
        description:
          'Data Analysis, SPSS, Ethnography, User Persona, Surveys, Focus Groups, Observational Studies, Diary Entries, Affinity Diagramming',
      },
      {
        name: 'Computer Science',
        description: 'Python, HTML, CSS, JavaScript, C#, Swift, SQL, Numpy, Pandas, r, Decision Trees, OOP, Unity Game Engine, Hardware & Software Acumen',
      },
      {
        name: 'Other',
        description:
          'AGILE Methodology, SAAS, eCommerce, B2B, B2C, AI, XR, UX Design, UX Writing, System Design, User Empathy',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
