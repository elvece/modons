const format = require('date-fns/format')

module.exports = function (config) {
    config.addPassthroughCopy({ './src/_includes/style.css': 'style.css' })
    // add `date` filter
    config.addFilter('date', function (date, dateFormat) {
        return format(date, dateFormat)
    })
    return {
        markdownTemplateEngine: 'njk',
        dir: {
            input: './src',
            output: './build'
        }
    }
}