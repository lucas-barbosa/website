/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const redirects = async () =>{
    return [
      {
        source: "/products",
        destination:"/services",
        permanent: true
      },
      {
        source:"/about",
        destination:"/#features",
        permanent: true
      },
      {
        source:"/blogs",
        destination:"/docs",
        permanent: true
      },
      {
        source:"/home",
        destination:"/",
        permanent: true
      }
    ]
  }
  return {
    reactStrictMode: true,
    env: {
      // social media links
      url: "https://alguero.tk",
      github: "https://github.com/alguerocode",
      instagram: "https://instagram.com/alhashmis246",
      facebook: "https://www.facebook.com/salah.alhashmi.52",
      discord: "https://discord.com/channels/879049803043053589/879049803550572645",

      // counts sections info
      projects_count: "+100",
      clients_count: "1",
      docs_count: "1",
      coding_years_count: "2",

      // contact section info
      email: "not found",
      call: "+none none",
      location: "Oman Muscat",

      // backend section info
      backend_url:isProd ? "https://api.alguero.tk" : "http://localhost:8080"
    },
    redirects
  };
};
