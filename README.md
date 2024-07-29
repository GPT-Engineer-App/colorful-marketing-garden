# Welcome to your GPT Engineer project

## Project info

**Project**: colorful-marketing-garden 

**URL**: https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve

**Description**: Create an interactive marketing plan presentation. The initial view should show a circular button in the center of the screen with the text '6 Steps To An Effective Marketing Plan'. When this central button is clicked, animate the following sequence:

The central button should smoothly shrink and move to the top of the screen, becoming the title.
Six colorful circular buttons should appear one by one, arranged in a flower pattern around the center. Each button represents a step in the marketing plan and should contain a number (01 to 06) and a short title. Use Tailwind for styling and consider using shadcn/ui components for consistency.
As each button appears, it should animate from the center outwards, as if unfolding from behind the previous button. Use spring animations for a natural, organic feel.
Once all buttons are visible, add a subtle floating animation to each button to keep the display dynamic.
Clicking on any of the six step buttons should expand it slightly and display a card below the flower pattern with more detailed information about that step. Use shadcn/ui's Card component for this.
The card should slide up from the bottom of the screen and contain the step's title and a paragraph of descriptive text.
Clicking the same button again or a different button should smoothly transition the displayed information.
Add a 'Reset' button at the bottom that, when clicked, reverses the animation: the information card slides away, the six step buttons fold back into the center, and the title transforms back into the central button.

Ensure the entire interaction is smooth, accessible, and responsive on different screen sizes. Use React hooks for state management and consider using custom hooks for animation logic if it becomes complex. 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/colorful-marketing-garden.git
cd colorful-marketing-garden
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)