/**
 * Responds to a REMOVED_FROM_SPACE event in Google Chat.
 *
 * @param {Object} event The event object from Google Chat, containing details
 *     about the app command interaction.  It includes information like the
 *     command ID and the user who triggered it.
 */
function onRemoveFromSpace(event) {
  console.info('Bot removed from ',
      (event.space.name ? event.space.name : 'this chat'));
}
