/**
 * Responds to an APP_HOME event in Google Chat.
 *
 * To support app home, you must configure your Chat app
 * to receive APP_HOME interaction events, Your Chat app
 * receives this event whenever a user clicks the Home tab
 * from a direct message with the Chat app.
 *
 * https://developers.google.com/workspace/chat/send-app-home-card-message#configure-chat-api
 */
function onAppHome () {
  return {
    'action': {
      'navigations': [
        {
          'pushCard': cardHome()
        }
      ]
    }
  }
}
