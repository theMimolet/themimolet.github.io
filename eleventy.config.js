import fs from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";

const readYaml = (filePath) => yaml.load(fs.readFileSync(path.resolve(filePath), "utf8"));

export const config = {
	dir: {
		input: ".",
		output: "_site",
		includes: "_includes",
		layouts: "_layouts",
	},
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
};

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");

	eleventyConfig.addFilter("localizedDate", (date, language = "en") => {
		return new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-US", {
			day: "numeric",
			month: "long",
			year: "numeric",
			timeZone: "Europe/Paris",
		}).format(date);
	});

	eleventyConfig.addGlobalData("site", {
		title: "Mimolet",
		url: "https://themimolet.github.io",
		description: "Website of Mimolet, a student in software engineering and indie creation.",
		styles: "/assets/styles",
		images: "/assets/images",
		icons: "/assets/icons",
		scripts: "/assets/scripts",
	});
};
