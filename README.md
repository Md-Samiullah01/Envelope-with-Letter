# Envelope-with-Letter
A stylish and simple Letter and envelope. It has attractive Design using normal Texts and emojis. 

# Envelope-with-Letter 💌

A charming, interactive web-based animation of an opening envelope that reveals a floating message. Built with pure HTML, CSS, and vanilla JavaScript, this project features a stylish aesthetic complete with floral decorations and a heart-shaped seal.

---

## ✨ Features

* **Interactive Animation:** Click the heart seal to toggle the envelope open and closed.
* **Dynamic Letter Reveal:** Once opened, the letter inside scales up and displays a custom message.
* **Floating Text Effect:** Uses CSS keyframe animations to create a "rising" effect for the text inside the letter.
* **Aesthetic UI:** Decorated with emoji-based borders (🌸, 🍁) and a soft, pink-themed color palette.
* **Fully Responsive:** Centered grid layout that adapts to various screen sizes.

---

## 📂 Project Structure

* `index.html`: The structural skeleton containing the envelope components and emoji decorations.
* `style.css`: Custom styling, animations, and color variables that define the visual experience.
* `main.js`: Logic for handling user clicks and dynamic text generation.

---

## 🛠️ Detailed Technical Implementation

### 🏗️ Structural Architecture (`index.html`)
The layout is designed with a hierarchical approach to manage the complex animation layers:
* **The Container:** A full-viewport wrapper that uses CSS Grid to center the envelope perfectly on the screen.
* **The Envelope:** Composed of several pseudo-elements and divs to simulate a paper effect.
* **Decorative Borders:** Uses specific `div` classes (`dl`, `dr`, `dbot`) and `span` elements to create a frame of cherry blossom (🌸) and maple leaf (🍁) emojis around the envelope.
* **Meta Control:** Includes a `meta-refresh` tag set to 60 seconds to ensure the view stays fresh.

### 🎨 Visual Engineering (`style.css`)
The styling focuses on smooth transitions and depth:
* **Variable-Based Theming:** Uses CSS `:root` variables to define a consistent palette, including `--bg-envelope-color` (#f5edd1) and `--heart-color`.
* **Geometric Shapes:** The envelope flaps are constructed using the CSS border triangle trick, where `border-top` and `border-side` widths create the diagonal edges of the paper.
* **The Heart Seal:** Designed as a square rotated 45 degrees, with `::before` and `::after` pseudo-elements shaped as circles to complete the heart silhouette.
* **Sophisticated Animations:**
    * **The Flap:** When the `.flap` class is toggled, the top flap uses `rotateX(180deg)` with a `transform-origin` at the top.
    * **The Letter:** Moves vertically (`bottom: 120px`) and increases in size (`scale(1.35)`) with a calculated `transition-delay` to wait for the flap to open.
    * **Text Float:** A custom `@keyframes appear` animation handles the opacity, scaling, and upward movement of the message spans.

### 🧠 Interactivity & Logic (`main.js`)
The JavaScript provides the "brain" for the user interaction:
* **Event Listeners:** A click listener is attached to the heart seal, which serves as the trigger for the entire sequence.
* **State Management:** Uses `classList.toggle('flap')` to allow the user to open and close the envelope repeatedly.
* **Dynamic Content Generation:**
    * The `showMsg()` function clears previous text and programmatically creates new `span` elements.
    * It utilizes a `for` loop to generate 6 message layers.
    * **Staggered Animation:** Each message span is assigned a dynamic `animation-delay` using the formula `${1.5 * i}s`, ensuring the "Hello World!" messages appear one after another in a continuous loop.

---

## 🚀 Getting Started

1.  **Clone the repository** to your local machine.
2.  **Ensure all files** (`index.html`, `style.css`, `main.js`) are in the same directory.
3.  **Open `index.html`** in any modern web browser to view the animation.

---

## 👤 Author
**Sami**
