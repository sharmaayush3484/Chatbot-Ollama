# 🤖 AI Chatbot with Ollama

A modern, feature-rich chatbot powered by Ollama running on your local machine. Built with Express.js backend and vanilla JavaScript frontend.

## ✨ Features

- **💬 Chat History Sidebar** - Save and manage all your conversations
- **💾 Local Storage** - All chats are saved in browser's local storage (no Firebase needed)
- **🌙 Dark/Light Theme** - Toggle between dark and light modes
- **📱 Mobile Responsive** - Works seamlessly on desktop, tablet, and mobile
- **⚡ Real-time Chat** - Instant messaging with Ollama LLM
- **🗑️ Chat Management** - Delete individual chats or clear all
- **🔧 Easy Configuration** - Environment variables for customization
- **🚀 Production Ready** - Error handling, input validation, and logging

## 📋 Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **Ollama** - [Download](https://ollama.ai/)
- **Ollama Model** - At least one model (e.g., `tinyllama`, `llama2`, `neural-chat`)

## 🚀 Getting Started

### 1. Install Ollama

Download and install Ollama from [ollama.ai](https://ollama.ai/)

### 2. Pull a Model

Open terminal/command prompt and run:

```bash
ollama pull tinyllama
```

You can also use other models:
```bash
ollama pull llama2
ollama pull neural-chat
ollama pull mistral
```

Start Ollama:
```bash
ollama serve
```

Ollama will run on `http://localhost:11434` (this is the default)

### 3. Clone/Setup the Project

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-chatbot-ollama.git
cd ai-chatbot-ollama

# Install dependencies
npm install
```

### 4. Configure Environment Variables

Create a `.env` file by copying `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` if needed (defaults should work for local setup):

```env
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=tinyllama
PORT=3000
```

### 5. Start the Server

```bash
# Development mode with auto-reload
npm run dev

# Or production mode
npm start
```

You should see:
```
🚀 Server running on http://localhost:3000
🤖 Ollama URL: http://localhost:11434
📚 Model: tinyllama
```

### 6. Open in Browser

Visit: `http://localhost:3000`

## 📖 Usage

1. **Start Chatting** - Type a message and click "Send" or press Enter
2. **New Chat** - Click "+ New Chat" in the sidebar to start a new conversation
3. **View History** - All chats appear in the left sidebar
4. **Delete Chat** - Click the 🗑️ button on any chat to delete it
5. **Clear All** - Use the 🗑️ button in the footer to delete all chats
6. **Toggle Theme** - Click 🌙 button to switch between dark/light mode

## 🏗️ Project Structure

```
ai-chatbot-ollama/
├── index.html          # Frontend UI
├── server.js           # Express backend
├── package.json        # Dependencies
├── .env.example        # Environment configuration template
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── LICENSE             # MIT License
```

## 🔧 Configuration

### Available Models

You can switch models by changing the `OLLAMA_MODEL` in `.env`:

```env
# Small & Fast
OLLAMA_MODEL=tinyllama

# Better Quality
OLLAMA_MODEL=llama2
OLLAMA_MODEL=neural-chat
OLLAMA_MODEL=mistral

# More Capable (requires more resources)
OLLAMA_MODEL=llama2-uncensored
OLLAMA_MODEL=dolphin-mixtral
```

Install new models:
```bash
ollama pull <model-name>
```

### Server Configuration

Edit `.env` to customize:

```env
# Ollama server address (if running on different machine)
OLLAMA_URL=http://192.168.1.100:11434

# Server port
PORT=3000

# Model name
OLLAMA_MODEL=tinyllama
```

## 🚀 Deployment

### GitHub Repository Setup

```bash
# Initialize git
git init

# Add remote
git remote add origin https://github.com/yourusername/ai-chatbot-ollama.git

# Create .gitignore
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo ".DS_Store" >> .gitignore

# Commit and push
git add .
git commit -m "Initial commit: AI Chatbot with Ollama"
git push -u origin main
```

![image-alt](https://github.com/sharmaayush3484/Chatbot-Ollama/blob/c30bf56eba3a03a601c1eea07861182d9adb3167/Chatgpt.PNG) 

### Local Deployment (Same Machine)

✅ Already configured - just run `npm start`

### Remote Deployment (Different Machine)

1. **Update OLLAMA_URL in `.env`:**
   ```env
   OLLAMA_URL=http://remote-machine-ip:11434
   PORT=3000
   ```

2. **Make sure Ollama is accessible:**
   ```bash
   # On Ollama machine, allow remote connections
   OLLAMA_HOST=0.0.0.0:11434 ollama serve
   ```

3. **Deploy Node server to any platform:**
   - **Vercel**: `npm install -g vercel` → `vercel deploy`
   - **Heroku**: `git push heroku main`
   - **Railway**: Connect GitHub repo
   - **Render**: Connect GitHub repo
   - **Self-hosted VPS**: SSH into server and run `npm start`

### Docker (Optional)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t ai-chatbot .
docker run -p 3000:3000 -e OLLAMA_URL=http://host.docker.internal:11434 ai-chatbot
```

## 🔒 Security Considerations

- ⚠️ This project is designed for **local use only**
- For production, add authentication
- Run Ollama on a private network
- Use HTTPS for remote connections
- Add rate limiting to `/chat` endpoint
- Sanitize user inputs

## 🐛 Troubleshooting

### "Cannot connect to Ollama"
- Make sure Ollama is running: `ollama serve`
- Check `OLLAMA_URL` in `.env`
- Verify connection: `curl http://localhost:11434/api/tags`

### "Model not found"
- Pull the model: `ollama pull tinyllama`
- List available models: `ollama list`

### "Server won't start"
- Check if port 3000 is in use
- Try different port: `PORT=3001 npm start`
- Check Node.js version: `node --version` (need v14+)

### Slow responses
- Ollama models take time (depends on model size and hardware)
- Try a smaller model like `tinyllama`
- Allocate more RAM to Ollama

## 📦 Dependencies

- **express** - Web framework
- **cors** - Enable cross-origin requests
- **dotenv** - Environment variable management

## 📄 License

MIT License - feel free to use this project

## 🤝 Contributing

Feel free to fork, modify, and submit pull requests!

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Open an issue on GitHub
- Check Ollama documentation: https://ollama.ai

---

Made with ❤️ for the open-source community
