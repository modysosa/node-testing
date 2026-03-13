module.exports = {
  proxy: "http://localhost:3000",
  port: 3001,
  files: ["views/**/*.ejs", "public/**/*.*"],
  open: false,
  notify: false,
};
