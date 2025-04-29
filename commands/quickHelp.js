/**
 * Responds to a quick command in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function quickHelp(event) {
  return {
    privateMessageViewer: event.user,
    text: [
      'Template for Google Chat Bot',
      'To change this text, edit the file `commands/quickHelp.js`',
    ].join('\n')
  };
}
