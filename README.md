# Primal Training

A modern fitness and training web application built with React, designed to help users achieve their fitness goals through structured workout programs and training guidance.

🔗 **Live Demo**: [https://primaltraining.netlify.app/](https://primaltraining.netlify.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean and intuitive interface for seamless user experience
- **Workout Programs** - Structured training plans and exercises
- **Performance Tracking** - Monitor your fitness progress over time
- **Fast Loading** - Optimized performance for quick page loads

## 🛠 Tech Stack

- **React** - Frontend library for building user interfaces
- **React Router** - For seamless navigation between pages
- **CSS3/Styled Components** - Modern styling solutions
- **Netlify** - Hosting and continuous deployment

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/primal-training.git
```

2. Navigate to the project directory:

```bash
cd primal-training
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm start
# or
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. The page will reload when you make changes.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

## 📁 Project Structure

```
primal-training/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── pages/
│   │   └── ...
│   ├── styles/
│   │   └── ...
│   ├── utils/
│   │   └── ...
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🌐 Deployment

This project is deployed on Netlify with continuous deployment enabled.

### Deploy Your Own

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy the `build` folder to your preferred hosting service.

### Netlify Configuration

Create a `netlify.toml` file in the root directory:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name - Soumitra Samanta



## 🙏 Acknowledgments

- Inspiration from modern fitness applications
- React community for excellent documentation
- Netlify for seamless deployment experience

---

Made with ❤️ by Soumitra Samanta.
