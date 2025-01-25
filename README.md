<h3><b>Infinity Scroll</b></h3>

</div>

# 📗 My Project Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)  
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

## 📖 About the Project <a name="about-project"></a>

Infinity Scroll is a web application that fetches random photos from the Unsplash API and displays them in an infinite scroll format. As the user scrolls down the page, more photos are loaded automatically.

### 🛠 Built With <a name="built-with"></a>

#### Tech Stack <a name="tech-stack"></a>

- HTML
- CSS
- JavaScript
- Node.js
- Express

#### Key Features <a name="key-features"></a>

- Fetches random photos from the Unsplash API
- Displays photos in an infinite scroll format
- Responsive design

## 🚀 Live Demo <a name="live-demo"></a>

- Coming Soon!

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps:

### Prerequisites <a name="prerequisites"></a>

- Node.js installed on your machine
- Unsplash API key (Get one from [Unsplash Developer](https://unsplash.com/developers))

In order to run this project you need:

- Node.js installed on your machine
- Unsplash API key - Follow these steps:
  1. Go to [Unsplash Developers](https://unsplash.com/developers)
  2. Click "Register as a developer"
  3. Log in or create a new Unsplash account
  4. Once logged in, go to [Your Apps](https://unsplash.com/oauth/applications)
  5. Click "New Application"
  6. Accept the terms and conditions
  7. Fill in your application information:
     - Application name: Your app name
     - Description: Brief description of your app
     - Select "Demo" as application type
  8. Click "Create application"
  9. In your new application, find the "Access Key"
  10. Create a `.env` file in your project root:
      ```properties
      UNSPLASH_API_KEY=your_access_key_here
      ```
  11. Replace `your_access_key_here` with the Access Key from step 9

Note: Never commit your [.env](http://_vscodecontentref_/0) file to version control. Make sure it's listed in your [.gitignore](http://_vscodecontentref_/1) file.

### Setup <a name="setup"></a>

1. Clone this repository:
```bash
git clone https://github.com/yourusername/Infinity-Scroll.git
cd Infinity-Scroll

```

2. Create a .env file in the root directory and add your Unsplash API key:
```bash
UNSPLASH_API_KEY=your_unsplash_api_key

```

Install <a name="install"></a>

Install dependencies:
```bash
npm install

```

Usage <a name="usage"></a>

Start the server:
```bash
node server.js

```

Open http://localhost:3000 in your browser.

👥 Authors <a name="authors"></a>
👤 Your Name: Ahmed

GitHub: @m00h0

🔭 Future Features <a name="future-features"></a>
Add search functionality
Add image filtering options
Add user favorites

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/m00h0/Quote-Generator/issues).

⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

🙏 Acknowledgements <a name="acknowledgements"></a>

Thanks to Unsplash for providing the API
Thanks to all contributors

📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed. ```