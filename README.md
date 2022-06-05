# What is it?

Simple address book application

# Requirements

For deployment, running and testing:

- [Node.js](https://nodejs.org/en/) v16.x.x LTS

Additionally, for development:

- [Visual Studio Code](https://code.visualstudio.com/)

# Installation

...

## Node.js

1. Download Node.js installer
2. Start the installer and accept all defaults
3. Open "Command Prompt" and confirm that everything is installed and configured correctly by executing `node --version` and `npm --version`

## Recommended Extensions (for development)

Some recommended extensions for improved development experience:

- [Code Spellchecker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

# IDE Configuration

These configurations steps make development experience better:

- Set `"editor.rulers": [80, 120]` in `Preferences -> Settings`
- Configure [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode):
  - Press `[CTRL] + [SHIFT] + [P]`
  - Type "Open settings (JSON)"
  - Press `[ENTER]`

      ```json
      "[javascriptreact]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true
      },
      "[typescriptreact]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true
      },
      "[typescript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true
      },
      "[javascript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true
      },
      "[json]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      ```

# First-time Project Setup

From project's root directory execute in `Command Prompt`:

- `yarn install`

# Building

From project's root directory execute in `Command Prompt`:

- `yarn run build`

# Running the Project

From project's root directory execute in `Command Prompt`:

- `yarn start`

# Code quality

...

# Debugging

_**Note**: These are "must know" browser shortcuts for debugging:_

| Action                                  | Shortcut |
|-----------------------------------------|----------|
| Open Developer Tools                    | F12      |
| Next panel                              | Ctrl + ] |
| Previous panel                          | Ctrl + [ |
| Search by filename (except on Timeline) | Ctrl + P |
| Go to line                              | Ctrl + G |

# Git

Although VSCode comes with built-in Git functionality, these are some stand-alone and free clients for Git

- [GitHub Desktop](https://desktop.github.com/)
- [Sourcetree ](https://www.sourcetreeapp.com/)

At all times, make commit message clear and concise.

# Resources

Some resources to help you lear and figure stuff out:

- [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)
- [Tao of React - Software Design, Architecture & Best Practices](https://alexkondov.com/tao-of-react/)
- [React Patterns](https://reactpatterns.com/)
- [React JS Crash Course 2021](https://youtu.be/w7ejDZ8SWv8)
