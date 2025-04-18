# Slide Fusion 🎞️

A modern, responsive image slider built with **React.js**, offering smooth transitions, infinite scrolling, and both auto/manual navigation. Perfect for galleries, portfolios, landing pages, or any project that needs a clean visual carousel.

---

## ✨ Features

- ⚛️ Built with React + Hooks  
- 📱 Fully responsive on all devices  
- 🔄 Auto-play with progress timer  
- 🖱️ Manual navigation (Next / Prev)  
- ♾️ Infinite looping of slides  
- 🎨 CSS animations for elegant transitions  
- 🖼️ Easily customizable and extendable  
- 📦 Ready to integrate into any React app  

---

## Demo 🎥

Here is the demo link: [Slide Fusion](https://birds-slidefusioncarousel.netlify.app/ 'Birds - Slide Fusion Carousel')

---

## 🚀 Getting Started
### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/amirshehzadshah/slidefusion.git
cd slidefusion
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Run the App

```bash
npm start
```
This will start the development server on `http://localhost:3000/` and open the project in your default web browser.

---

## 🛠️ Project Structure

```bash
src/
├── components/
│   ├── Carousel.jsx        # Core slider logic
│   ├── Navbar.jsx          # Navbar
│   └── SliderItem.jsx      # Individual image slide
├── App.jsx                 # Entry component
├── index.css               # Global styles
└── image/                  # Your image assets
```

---

## 🧠 How It Works

- Uses a dynamic list to render images and rotate them on Next/Prev click.  
- `useState` handles reordering of slides. 
- `useEffect` sets and resets auto-slide intervals.  
- CSS handles the animations and slide positioning.
- One image at a time is highlighted with text and buttons. 

---

## 📂 Customize It

- Add your images to `/image` and update the array in `App.jsx`  
- Modify timing values in `Carousel.jsx` (`timeRunning`, `timeAutoNext`)
- Adjust animation styles in `index.css`

---

## 🙌 Acknowledgements

> Inspired by a YouTube video from Creative JS Coder — originally built using HTML, CSS, and JavaScript. Reimagined and rebuilt in React for a modern, component-driven experience. 🎥⚛️

---

## 💬 Let's Connect

Feel free to connect on [LinkedIn](https://www.linkedin.com/in/amirshehzadshah786/ 'Visit LinkedIn').

---

_Crafted with ❤️ by **`AMIR SHEHZAD SHAH`**_

Enjoy React Slide Fusion Carousel! 🎉
