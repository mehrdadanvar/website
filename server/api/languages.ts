export default defineEventHandler(async (event) => {
  return {
    languages: [
      { name: "JavaScript", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "R", icon: "r" },
      { name: "HTML", icon: "nodejs" },
      { name: "CSS", icon: "css" },
    ],
  };
});
