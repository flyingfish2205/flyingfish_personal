const { DateTime } = require("luxon");
const pugPlugin = require("@11ty/eleventy-plugin-pug");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pugPlugin);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
      format || "dd LLLL yyyy",
    );
  });

  eleventyConfig.addPassthroughCopy("src\\assets\\css");
  eleventyConfig.addPassthroughCopy("src\\assets\\js");
  eleventyConfig.addPassthroughCopy("src\\assets\\img");
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
  };
};







