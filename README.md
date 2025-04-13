# Zeeilant Website

A modern, interactive website built with React and Vite for Zeeilant, showcasing AI solutions and services. The website features a beautiful UI with animations, AI-powered chatbot, and contact functionality.

![Zeeilant Website](./public/og-image.png)

## 🚀 Features

- **Modern React + Vite Setup** - Utilizing the latest React features with Vite for fast development
- **Interactive UI Components** - Built with Framer Motion for smooth animations
- **AI-Powered Chatbot** - Integrated with Google's Gemini AI API
- **Contact Form Integration** - Using Email.js for seamless communication
- **Responsive Design** - Fully responsive across all devices
- **Custom Animations** - Including particle effects and custom cursor
- **Dynamic Content** - Interactive sections for services, demos, and testimonials
- **Performance Optimized** - Built with best practices for optimal loading speed

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Animation**: Framer Motion
- **Routing**: React Router DOM 7
- **3D Graphics**: Three.js
- **AI Integration**: Google Generative AI
- **Email Service**: Email.js
- **Development**: ESLint, TypeScript support

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Modern web browser

## 💻 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/zeeilant-website.git
cd zeeilant-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
   - Copy `.env.example` to `.env`
   - Fill in your API keys:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
GEMINI_API_KEY=your_gemini_api_key
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:5173/zeeilant-website/`

## 🚀 Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
zeeilant-website/
├── src/
│   ├── components/        # React components
│   ├── styles/           # CSS modules and global styles
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── .github/             # GitHub templates and workflows
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## 🔑 Key Components

- `Hero.jsx` - Landing page with animated particles background
- `AiCapabilities.jsx` - Showcase of AI features
- `ChatBot.jsx` - AI-powered chat interface
- `ContactPopup.jsx` - Email.js integrated contact form
- `CustomCursor.jsx` - Interactive cursor effects

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Zeeilant Team - [GitHub Profile](https://github.com/zeeilant)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Google Generative AI](https://ai.google.dev/)
- [Email.js](https://www.emailjs.com/)
- [Three.js](https://threejs.org/)
