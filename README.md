# Sweet Sorries

Act as an expert Frontend Developer and UI/UX Designer specializing in creating highly interactive, emotionally engaging, and aesthetically beautiful micro-sites. 

Your objective is to create a complete, single-file webpage (HTML, CSS, and JavaScript combined) designed as a cute, heartfelt "apology" experience for a girlfriend. The key interactive feature is a button that generates the phrase "I am Sorry" exactly 100,000 times when clicked, accompanied by automated background music.

### Design & Aesthetic Guidelines

1. **Visual Theme:** Use a modern, extremely cute, and warm aesthetic. Think "Kawaii-romantic" using a pastel color palette—soft blush pinks, gentle creams, lavender accents, and warm whites.

2. **Typography:** Import and use charming, readable Google Fonts (e.g., 'Quicksand' for body text and 'Pacifico' or 'Fredoka' for headings).

3. **Animations:** Implement gentle, performance-optimized CSS animations. Include subtle floating hearts, a softly pulsating main button, and smooth transition effects to make the webpage feel organic and alive.

4. **Layout:** A centered, mobile-responsive card layout. The initial state should display a sincere, cute apology message (e.g., "I made a mistake. Please forgive me?"), a charming visual element (like a CSS-styled heart or cute icons), and a prominent call-to-action button.

### Functional & Technical Specifications

1. **The "100,000 Sorries" Mechanism:**

   - Create a prominent, stylized button (e.g., "Click to see how sorry I am").

   - When clicked, the button must trigger the display of "I am Sorry" repeated exactly 100,000 times.

   - **Crucial Performance Requirement:** Directly rendering 100,000 individual DOM nodes will crash the user's browser. You must optimize this generation. Use a single, styled scrollable container (e.g., with a "frosted glass" glassmorphism effect and custom scrollbar) and efficiently insert the text block as a single, compiled string or via progressive rendering (`DocumentFragment` or `requestAnimationFrame`) to ensure the page remains responsive and smooth.

   - Count the rendering or dynamically display a cute counter (e.g., "Sincerity Level: 100,000/100,000") to add visual feedback.

2. **Unmutable Background Music:**

   - Integrate the YouTube video `https://youtu.be/f8u6riOK3Qk` as background music.

   - The music must play automatically. Because modern browsers block autoplay audio without user interaction, seamlessly bind the audio playback to start immediately when the user clicks the "apology" button.

   - The YouTube player iframe must be completely hidden (e.g., positioned off-screen or scaled to 0).

   - Ensure there are absolutely no volume sliders, mute buttons, or pause options available to the user on the page, keeping the audio continuously playing in the background on loop.

### Code Structure Requirements

- Deliver the entire project in one single `index.html` file.

- Use vanilla CSS3 (including custom properties for easy editing) and vanilla ES6+ JavaScript.

- Write clean, semantic, and well-commented code. 

- Ensure the site is fully responsive, looking gorgeous on both mobile devices and desktop screens.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3e72b97e-ac9a-4163-901c-2b53a4e61731).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
