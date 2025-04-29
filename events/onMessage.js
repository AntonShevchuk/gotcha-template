/**
 * Responds to a MESSAGE event in Google Chat.
 *
 * @param {Object} event The event object from Google Chat, containing details
 *     about the app command interaction.  It includes information like the
 *     command ID and the user who triggered it.
 */
function onMessage (event) {

  // Checks for the presence of event.message.slashCommand
  if (event.message.slashCommand) {
    // The ID for your slash command
    switch (event.message.slashCommand.commandId) {
      case ABOUT_COMMAND_ID:
        return slashAbout(event)
    }
  }

  // If the Chat app doesn't detect a slash command
  const name = (event.space.type === 'DM') ? 'You' : event.user.displayName

  return { 'text': `${name} said "${event.message.text}"` }
}
