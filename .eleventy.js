const format = require('date-fns/format')
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const markdownIt = require("markdown-it")

module.exports = function (config) {
    config.addPassthroughCopy({ './src/static/img/': 'static/img/' })
    config.addPassthroughCopy({ './src/static/fonts/': 'static/fonts/' })

    config.addWatchTarget('./tailwind.config.js')
    config.addWatchTarget('./static/css/tailwind.css')

    // Merge data instead of overriding
    config.setDataDeepMerge(true);

    // add date filter for human readability
    config.addFilter('date', function (date, dateFormat) {
        return format(date, dateFormat)
    })

    config.addPlugin(eleventyNavigationPlugin)
    config.setLibrary("md", markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }))

    return {
        markdownTemplateEngine: 'njk',
        
        dir: {
            input: './src',
            output: './build'
        }
    }
}