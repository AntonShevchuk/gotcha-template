/**
 * Handles POST HTTP requests and processes actions based on the "action" query parameter.
 * Dynamically invokes an action handler function if it exists.
 *
 * @param {Object} request The request object containing query parameters and POST data.
 * @param {Object} request.parameter The query parameters of the request.
 * @param {Object} request.postData The POST data sent with the request.
 * @param {string} request.postData.contents The content of the POST data in string format.
 * @return {HtmlOutput|TextOutput} Returns an HTML or JSON output.
 */
function doPost (request) {
  const action = request.pathInfo ? request.pathInfo : null

  Logger.log(`Web Request: doPost("${action}")`)

  if (!action) {
    return doError_(
      request, {
        code: '404',
        status: 'error',
        message: 'Sorry, we couldn\'t find the page you were looking for.'
      })
  }

  return do_(action, request)
}
