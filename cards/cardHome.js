function cardHome () {
  return {
    header: {
      title: 'Gotcha',
      subtitle: 'Template for Google Chat Bot',
      imageUrl: 'https://raw.githubusercontent.com/AntonShevchuk/gotcha-template/main/assets/logo_128x128.png'
    },
    sections: [
      {
        header: 'Explore detailed guides on the GitHub repository',
        widgets: [
          {
            textParagraph: {
              text: 'Gotcha is an open-source project, and contributions are welcome.\n\n' +
                ' If you have ideas for improvements, or have found a bug, feel free to submit a pull request or open an issue on' +
                ' <a href="https://github.com/AntonShevchuk/gotcha-template">GitHub</a>.'
            }
          },
          {
            divider: {}
          },
          {
            textParagraph: {
              text: 'Server time is ' + new Date().toTimeString()
            }
          },
        ]
      }
    ],
    fixedFooter: {
      primaryButton: {
        text: 'GitHub',
        icon: {
          materialIcon: {
            name: 'code'
          }
        },
        color: {
          red: 0,
          green: 0.5,
          blue: 1,
          alpha: 1
        },
        onClick: {
          openLink: {
            url: 'https://github.com/AntonShevchuk/gotcha-template'
          }
        }
      },
      secondaryButton: {
        text: 'Refresh',
        icon: {
          materialIcon: {
            name: 'refresh'
          }
        },
        onClick: {
          action: {
            function: 'updateAppHome'
          }
        }
      }
    }
  }
}
