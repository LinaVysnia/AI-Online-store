# This is a pretend "Online Plant Store"

## Table Of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Description
This is a multiple-page React app which mimics an online plant shop. It incorporates routing, session storage, and Bootstrap elements. It uses responsive design, give it a try!

I practiced creating multiple pages for one app and adding shared content between them. For the sake of good user experience, it's important to store some information about the user, so this was a great practice allowing pages to use content data and having functionality to modify it.

### Inspiration
I've been coming across cautionary tales of non-existent plants being listed for sale on the internet. Here is an [example](https://www.gardenenchantment.com/products/novel-plants-dazzling-animals-eye-seeds-128293-2024-new-arrivals) if it hasn't been taken down yet.

> [!WARNING]
> These plants do not exist. The **linked example website** is a scam, please do not buy anything there!

These cute creative plants gave me an idea to create an openly "AI-run" fake plant shop for this task. All the plant images were taken from scam websites, and the about page has some "AI entrepreneurship" images I generated myself.

## Installation
1. Download the Online_store folder.
2. Navigate to the Online_store folder through the terminal.
3. Enter `npm install` in the terminal and press Enter to install additional packages which were too big to be included here.
4. To run the app, enter `npm start` in the terminal.
5. Check the [Usage](#usage) section to see what you can do when the page is running.

## Usage
The plant shop app contains three pages: the home page, the product page, and the about page.

### Home Page
On the home page, the user can "log in". The user can enter a name which would be stored in the session storage. Every time the user comes back to the home page, the greeting message would use the stored name.

![image](https://github.com/LinaVysnia/codingTasks/assets/38082126/32d58746-0d18-409e-a637-c5d9e9a4d343)

If no name is stored, it will prompt the user to log in.

![image](https://github.com/LinaVysnia/codingTasks/assets/38082126/7cacdc92-a68a-4488-a7a0-26d41f3c73fc)

### Products Page
This page lists all the imaginary plants in the shop. It uses React elements to present each product.

When the user clicks the buy button, the total price appears in the top right corner on every page except the home page.

![image](https://github.com/LinaVysnia/codingTasks/assets/38082126/1d109ea2-f593-477a-96b2-fc534f8b5653)

### About Page
The about page contains a description, images of "AI entrepreneurship", and imaginary contact details.

## Credits
Just me at this point.

Dear reader, if you'd like to contribute, please do. Maybe you've got stylistic suggestions, maybe you know how to make the colour selection button change its colour even when it uses Bootstrap. You're very welcome to contribute.
