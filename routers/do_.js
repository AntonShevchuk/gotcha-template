/**
 * Handles HTTP GET requests and processes actions based on the "action" query parameter.
 * Dynamically invokes an action handler function if it exists.
 *
 * @param {String} action The action to perform.
 * @param {Object} request The event object containing information about the HTTP request.
 * @return {HtmlOutput|TextOutput} Returns an HTML or JSON output.
 */
function do_ (action, request) {
  try {
    // Construct the function name
    const functionName = `do${action.charAt(0).toUpperCase() + action.slice(1)}_`

    // Check if the function exists in the global scope
    if (typeof this[functionName] === 'function') {
      // Assuming the called function returns
      // ContentService or HtmlService output
      return this[functionName](request)
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
    Logger.log(error.message)
    // Return an error response
    return doError_(
      request, {
        code: '500',
        status: 'error',
        message: 'We\'re sorry, but something went wrong on our end (Internal Server Error).'
      })
  }
}
