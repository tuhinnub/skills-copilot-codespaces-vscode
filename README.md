# Future App Project

A modern web application built with Node.js and Express, ready for GitHub Codespaces and VS Code development.

## 🚀 Features

- Express.js server with REST API endpoints
- Modern, responsive frontend with HTML/CSS/JavaScript
- GitHub Codespaces ready with devcontainer configuration
- Simple and clean project structure for easy extension

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

## 🛠️ Setup

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/tuhinnub/skills-copilot-codespaces-vscode.git
   cd skills-copilot-codespaces-vscode
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### GitHub Codespaces

1. Click the "Code" button on GitHub
2. Select "Codespaces" tab
3. Click "Create codespace on main"
4. Wait for the environment to set up
5. The server will start automatically, and you can access it via the forwarded port

## 📁 Project Structure

```
.
├── .devcontainer/
│   └── devcontainer.json    # GitHub Codespaces configuration
├── public/
│   ├── index.html           # Main HTML file
│   ├── styles.css           # Styles
│   └── app.js               # Client-side JavaScript
├── index.js                 # Server entry point
├── package.json             # Node.js dependencies and scripts
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🔧 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server

## 🌐 API Endpoints

- `GET /` - Serves the main HTML page
- `GET /api/health` - Returns server health status

## 🎨 Customization

### Adding New Routes

Edit `index.js` to add new API endpoints:

```javascript
app.get('/api/your-endpoint', (req, res) => {
  res.json({ message: 'Your response' });
});
```

### Modifying the Frontend

- Edit `public/index.html` for structure
- Edit `public/styles.css` for styling
- Edit `public/app.js` for client-side functionality

## 🤝 Contributing

Feel free to fork this project and make it your own!

## 📝 License

ISC

