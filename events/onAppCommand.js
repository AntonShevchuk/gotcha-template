/**
 * Handles the APP_COMMAND event type. This function is triggered when a user
 * interacts with a quick command within the Google Chat app.  It responds
 * based on the command ID.
 *
 * @param {Object} event The event object from Google Chat, containing details
 *     about the app command interaction.  It includes information like the
 *     command ID and the user who triggered it.
 */
function onAppCommand(event) {
  // Executes the quick command logic based on its ID.
  // Command IDs are set in the Google Chat API configuration.
  switch (event.appCommandMetadata.appCommandId) {
    case HELP_COMMAND_ID:
      return quickHelp(event)
  }
}
