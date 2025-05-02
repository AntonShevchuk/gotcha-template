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

  Logger.log(request)

  if (!action) {
    return doError_(
      request, {
        code: '404',
        status: 'error',
        message: 'Sorry, we couldn\'t find the page you were looking for.'
      })
  }

  try {
    const data = JSON.parse(request.postData.contents)
    // Construct the function name
    const functionName = `do${action.charAt(0).toUpperCase() + action.slice(1)}_`

    // Check if the function exists in the global scope
    if (typeof this[functionName] === 'function') {
      // Assuming the called function returns
      // ContentService or HtmlService output
      return this[functionName](request, data)
    } else {
      Logger.log(`Error: Function "${functionName}" not found.`)
      // Return an error response
      return doError_(
        request, {
          code: '404',
          status: 'error',
          message: 'Sorry, we couldn\'t find the page you were looking for.'
        })
    }
  } catch (error) {
    Logger.log(error)
    // Return an error response
    // Return an error response
    return doError_(
      request, {
        code: '500',
        status: 'error',
        message: 'We\'re sorry, but something went wrong on our end (Internal Server Error).'
      })
  }
}
