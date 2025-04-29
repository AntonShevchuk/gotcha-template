/**
 * Responds to a MESSAGE event with a Slash command in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function slashAbout(event) {
  return {
    'privateMessageViewer': event.user,
    'text': [
      'Template for Google Chat Bot',
      'To change this text, edit the file "commands/slashAbout.js"',
      'Available commands:',
      '*/about* — Return short description',
    ].join('\n')
  };
}
