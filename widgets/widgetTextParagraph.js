/**
 * Creates a widget Text Paragraph configuration object.
 *
 * https://developers.google.com/workspace/chat/api/reference/rest/v1/cards#textparagraph
 * https://developers.google.com/workspace/chat/add-text-image-card-dialog#add-paragraph
 *
 * @param {string} text - The text content for the text paragraph.
 * @param {number} [maxLines=0] - The maximum number of lines to display. Defaults to 0, which means no limit.
 * @return {Object} The configuration object with text and maxLines properties for the widget text paragraph.
 */
function widgetTextParagraph(text, maxLines = 0) {
  return {
    textParagraph: {
      text,
      maxLines
    }
  };
}
