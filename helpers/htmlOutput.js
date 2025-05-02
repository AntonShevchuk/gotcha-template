/**
 * Renders a template file with the provided data and returns the evaluated HTML output.
 *
 * @param {string} filename - The name of the HTML template file to be rendered.
 * @param {Object} data - The data object to bind to the template for rendering.
 * @return {HtmlOutput} The evaluated HTML output generated from the template and data.
 */
function htmlOutput(filename, data = {}) {
  let template = HtmlService.createTemplateFromFile(filename)
  template.data = data
  return template.evaluate()
}