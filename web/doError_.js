/**
 * Handles requests to fetch and serve the error HTML file.
 *
 * @param {Object} request - The incoming HTTP request object.
 * @param {Object} data - The
 * @return {Object} The evaluated HTML output to be served.
 */
function doError_(request, data = {}) {
    const isJSON = request.postData.type === 'application/json'

    if (isJSON) {
        return jsonOutput(data)
    } else {
        return htmlOutput('html/error', data)
    }
}