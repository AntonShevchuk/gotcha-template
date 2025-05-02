/**
 * Includes the content of an HTML file for use in HTML output.
 *
 * @param {string} filename - The name of the HTML file to include.
 * @return {string} The content of the specified HTML file as a string.
 */
function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();
}
