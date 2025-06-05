/**
 * Handles requests to fetch and serve the error HTML file or JSON response.
 *
 * @param {Object} request - The incoming HTTP request object.
 * @param {Object} data - The data object to be sent in the response.
 * @return {Object} The evaluated HTML output or JSON response.
 */
function doError_(request, data = {}) {
    const isJSON = request.postData?.type === 'application/json'

    if (isJSON) {
        return jsonOutput(data)
    } else {
        return htmlOutput('html/error', data)
    }
}