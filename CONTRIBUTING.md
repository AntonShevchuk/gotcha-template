# Contributing to Gotcha Template

First off, thank you for considering contributing to the Gotcha Template! Your help is appreciated.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open-source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Getting Started

* Make sure you have a [GitHub account](https://github.com/signup/free).
* Submit a ticket for your issue, assuming one does not already exist.
    * Clearly describe the issue including steps to reproduce when it is a bug.
    * Make sure you fill in the earliest version that you know has the issue.
* Fork the repository on GitHub.

## How to Contribute

We welcome contributions in two main forms:

1.  **Reporting Bugs & Requesting Features:**
    * Use the [GitHub Issues](https://github.com/AntonShevchuk/gotcha-template/issues) section of the repository.
    * Before creating a new issue, please check if a similar one already exists.
    * For bugs, provide clear steps to reproduce, expected behavior, and actual behavior.
    * For features, clearly explain the proposed enhancement and why it would be valuable.

2.  **Contributing Code (via Pull Requests):**
    * If you want to fix a bug or add a feature, it's best to discuss it in an issue first, especially for larger changes.
    * **Fork & Clone:** Fork the repository to your own GitHub account and clone it locally.
        ```bash
        git clone [https://github.com/YOUR_USERNAME/gotcha-template.git](https://github.com/AntonShevchuk/gotcha-template.git)
        cd gotcha-template
        ```
    * **Create a Branch:** Create a new branch for your changes. Choose a descriptive name (e.g., `fix/typo-in-readme`, `feat/add-dialogflow-example`).
        ```bash
        git checkout -b your-branch-name
        ```
    * **Make Changes:** Make your code changes. Remember this is a template, so aim for clarity, simplicity, and general usefulness. Ensure compatibility with Google Apps Script.
    * **Test:** Test your changes thoroughly (e.g., deploy the Apps Script project and interact with the bot).
    * **Commit:** Commit your changes with a clear and concise commit message.
        ```bash
        git add .
        git commit -m "feat: Describe your change briefly"
        ```
    * **Push:** Push your branch to your fork on GitHub.
        ```bash
        git push origin your-branch-name
        ```
    * **Open a Pull Request (PR):** Go to the original [Gotcha Template repository](https://github.com/AntonShevchuk/gotcha-template) and open a Pull Request from your branch to the `main` branch.
    * **Describe your PR:** Provide a clear title and description for your PR, explaining what it does and why. Link to any relevant issues (e.g., "Closes #123").
    * **Review:** Wait for feedback or approval. Address any requested changes.

## Style Guidelines

* **Keep it Simple:** As this is a template, prioritize clarity and ease of understanding.
* **Consistency:** Try to maintain consistency with the existing code style.
* **Apps Script:** Ensure code is valid and runs correctly within the Google Apps Script environment.

## Code of Conduct

This project and everyone participating in it are governed by a [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html). By participating, you are expected to uphold this code. Please report unacceptable behavior.

Thank you for your contribution!
