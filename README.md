# 📱 Link Hub

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)

A retro-styled personal landing page inspired by the early smartphone era (iPhone 3GS/4 aesthetics). It features pixel art, real-time clock synchronization, interactive menus, and a nostalgic UI designed to host social media and streaming links.

**Live Demo:** [cluyverth.com/links](https://cluyverth.com/links)

<p align="center">
  <img src="./src/images/Screenshot%20Light.png" width="45%" alt="Light Mode">
  &nbsp; &nbsp;
  <img src="./src/images/Screenshot%20Dark.png" width="45%" alt="Dark Mode">
</p>

## ✨ Features

- **Retro UI:** Glossy finish design mimicking the early 2010s mobile interface.
- **Interactive Home Button:** Toggle between **Dark Mode** and **Light Mode** by clicking the phone's home button.
- **Animated Charm:** A hanging Gengar pixel-art charm with physics-based swing animation (CSS).
- **Real-Time Clock:** Displays the specific local time (e.g., Brasilia Time) in the status bar.
- **Accordion Menu:** Expandable folder for YouTube channels to keep the interface clean.
- **Dynamic Avatar:** Automatically pulls the profile picture from GitHub or a custom URL.
- **Responsive:** Centered layout optimized for both desktop and mobile viewing.

## 🛠️ Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Flexbox, Keyframe Animations, CSS Variables for theming.
- **JavaScript (Vanilla):** DOM manipulation for the clock, menu logic, and theme toggling.
- **FontAwesome:** Scalable vector icons (v6.5.1).
- **Google Fonts:** 'VT323' for the retro pixel typography.

## 🚀 Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cluyverth/LinkHub.git
   ```

2. **Navigate to the folder:**
   ```bash
   cd LinkHub
   ```

3. **Run Locally:**
   Simply open the `index.html` file in your browser. No build process or heavy server is required.

## ⚙️ Customization

You can easily make this project your own by editing the files:

### 1. Changing Links
Open `index.html` and locate the `<div class="links-container">`. Update the `href` attributes and text:
```html
<a href="https://your-new-link.com" target="_blank" class="link-btn">
    <i class="fa-brands fa-twitter"></i>
    New Link Text
</a>
```

### 2. Changing the Avatar
In `css/style.css`, find the `.avatar` class and change the URL:
```css
.avatar {
    background-image: url('https://github.com/YOUR_USERNAME.png');
}
```

### 3. Changing Timezone
In `js/script.js`, you can adjust the timezone to your location (currently set to `America/Sao_Paulo`):
```javascript
timeZone: 'America/New_York', // Example
```

## ☁️ Deployment

This project is static, so it can be hosted anywhere (GitHub Pages, Vercel, Netlify).

**Deploying on Coolify:**
1. Create a new Resource > Public Repository.
2. Enter your GitHub repo URL.
3. Select **Static** or **Nixpacks** as the build pack.
4. Set the domain (e.g., `links.yourdomain.com`).
5. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with 💜 by <a href="https://github.com/cluyverth">Cluyverth</a>
</div>