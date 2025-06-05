/**
 * Converts the input data into a JSON string and returns it as a text output
 * with the proper JSON MIME type.
 *
 * https://developers.google.com/apps-script/reference/content/text-output
 * https://developers.google.com/apps-script/guides/content#serving_json_from_scripts
 *
 * @param {Object} data The input data to be converted to a JSON string.
 * @return {TextOutput} A text output containing the JSON string
 * with a MIME type of JSON.
 */
function jsonOutput(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}