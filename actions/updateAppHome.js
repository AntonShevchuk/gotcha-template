/**
 * Updates the home app.
 * Called from elsewhere (i.e., on button press).
 *
 * @param {Object} event The event object from Google Chat, containing details
 *     about the app command interaction.  It includes information like the
 *     command ID and the user who triggered it.
 * @return {Object}
 */
function updateAppHome(event) {
  return {
    render_actions: {
      action: {
        navigations: [
          {
            updateCard: cardHome()
          }
        ]
      }
    }
  };
}
