const format = require('date-fns/format')

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

    return {
        markdownTemplateEngine: 'njk',
        
        dir: {
            input: './src',
            output: './build'
        }
    }
}