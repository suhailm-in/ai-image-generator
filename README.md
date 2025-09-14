# AI Image Generator

A simple and interactive **AI-powered image generator** built with **React**. Users can input a description, and the application uses OpenAI's image generation API to create and display AI-generated images.

> ⚠ **Important:** For security reasons, the API key must be handled in a backend service. Do not expose it in the frontend code.

---

## 🚀 Features

- ✅ Enter a text prompt to generate an image.
- ✅ Display AI-generated images dynamically.
- ✅ Loading indicator while generating images.
- ✅ Responsive design for mobile and desktop screens.
- ✅ Clean and user-friendly UI with hover effects.

---

## 📦 Technologies Used

- **React.js** – Frontend framework
- **Fetch API** – For making API requests
- **CSS** – Styling and layout design
- **OpenAI API** – Image generation service

---

## ⚙ Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/suhailm-in/ai-image-generator.git
    ```

2. Navigate into the project directory:
    ```bash
    cd ai-image-generator
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

---

## 🔑 API Setup

You need to create a backend server to safely handle requests to the OpenAI API, as exposing the API key in the frontend is insecure.

update the API URL in the React component:

```javascript
const response = await fetch("https://your-backend-url.com/generate-image", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer  $OPENAI_API_KEY",
    },
    body: JSON.stringify({
        prompt: inputRef.current.value,
        n: 1,
        size: "1024x1024"
    })
});
```

---

## 📱 Responsive Design

The application is fully responsive:
Works seamlessly on desktops, tablets, and smartphones.
Adjusts layout and font sizes depending on screen width.