/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const redirects = async () => {
    return [
      {
        source: "/products",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#features",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  };
  return {
    reactStrictMode: true,
    env: {
      // social media links
      url: "https://alguero.tk",
      github: "https://github.com/alguerocode",
      instagram: "https://instagram.com/alhashmis246",
      facebook: "https://www.facebook.com/salah.alhashmi.52",
      discord:
        "https://discord.com/channels/879049803043053589/879049803550572645",

      // counts sections info
      projects_count: "+100",
      clients_count: "1",
      docs_count: "1",
      coding_years_count: "2.5",

      // contact section info
      email: "not found",
      call: "+none none",
      location: "Oman Muscat",

      // backend API section info
      backend_url: isProd ? "https://api.alguero.tk" : "http://localhost:8080",

      //github states image URL
      language_states:
        "https://github-readme-stats.vercel.app/api/top-langs?username=alguerocode&show_icons=true&locale=en&layout=compact",
      github_states:
        "https://github-readme-stats.vercel.app/api?username=alguerocode&show_icons=true&locale=en",
      streak_states:
        "https://github-readme-streak-stats.herokuapp.com/?user=alguerocode&",
      project_categories:[
        {
          category:"reactJS",
          count:12
        },
        {
          category:"javascript",
          count: 7
        },
        {
          category:"html",
          count:18
        },
        {
          category:"css",
          count:14
        },
        {
          category:"nodeJS",
          count:4
        },
        {
          category:"postgreSQL",
          count:2
        },
        {
          category:"expressJS",
          count:4
        },
        {
          category:"redux",
          count:5
        },
        {
          category:"bootstrap",
          count:1
        },
        {
          category:"mongoDB",
          count:2
        },
        {
          category:"nextJS",
          count:1
        },
        {
          category:"JWT",
          count:1
        },
        {
          category:"DSA",
          count:1
        },
        {
          category:"fun projects",
          count:14
        },
        {
          category:"boilerplate",
          count:2
        },
        {
          category:"npm packages",
          count:1
        },
        {
          category:"readme",
          count:1
        },
      ]
    },
    redirects,
    // image optimization
    images: { 
      domains: [
        "https://github-readme-stats.vercel.app/api/top-langs?username=alguerocode&show_icons=true&locale=en&layout=compact",
        "https://github-readme-stats.vercel.app/api?username=alguerocode&show_icons=true&locale=en",
        "https://github-readme-streak-stats.herokuapp.com/?user=alguerocode&",
      ],
    },
  };
};
