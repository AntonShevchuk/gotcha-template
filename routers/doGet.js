/**
 * Handles HTTP GET requests and processes actions based on the "action" query parameter.
 * Dynamically invokes an action handler function if it exists.
 *
 * @param {Object} request The event object containing information about the HTTP request.
 * @return {HtmlOutput|TextOutput} Returns an HTML or JSON output.
 */
function doGet (request) {
  const action = request.pathInfo ? request.pathInfo : 'index'

  Logger.log(`Web Request: doGet("${action}")`)

  return do_(action, request)
}
