/**
 * Handles GET requests to fetch and serve the index HTML file.
 *
 * @param {Object} request - The incoming HTTP GET request object.
 * @return {Object} The evaluated HTML output to be served.
 */
function doIndex_(request) {
    return htmlOutput('html/index')
}