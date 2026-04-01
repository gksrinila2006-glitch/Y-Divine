# Y-Divine Romantic Apology Website

A beautiful, interactive romantic apology website built with React and Node.js.

## Features

✨ **Elegant Interactive Design:**
- Romantic greeting with animated text
- Beautiful floating heart box with pulse animation
- Wine red and white color scheme
- Dotted corner decorations

✨ **Interactive Experience:**
- Click the heart to reveal choice options
- Moon path: Romantic apology with sparkle effects
- Sun path: Playful rejection with "Try Again" button
- Smooth animations and transitions

## Deployment Options

### Option 1: Railway (Recommended ⭐)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub"
4. Select this repository
5. Railway will auto-detect Node.js
6. Set `NODE_ENV=production` in variables
7. Done! Get your live link

### Option 2: Render

1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Set Build Command: `npm install && npm run build`
5. Set Start Command: `node server.js`
6. Deploy!

### Option 3: Vercel (Alternative)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import repository from GitHub
4. Vercel auto-configures
5. Deploy!

### Option 4: Heroku (Legacy)

```bash
# Install Heroku CLI
# Login
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main

# View
heroku open
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Server runs on `http://localhost:3000`

## File Structure

```
.
├── public/
│   ├── index.html
│   └── heart.svg
├── src/
│   ├── components/
│   │   ├── GiftBox.jsx
│   │   ├── ChoiceIcons.jsx
│   │   ├── MessagePopup.jsx
│   │   ├── ParticleEffect.jsx
│   │   └── Greeting.jsx
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── index.jsx
├── server.js
├── webpack.config.js
└── package.json
```

## Technologies

- React 18.2.0
- Express.js 4.18.2
- Webpack 5
- Babel 7

---

Made with 💕 for Ms.Divine!
