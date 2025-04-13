import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const messagesEndRef = useRef(null);
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const genAI = new GoogleGenAI({ apiKey: API_KEY });

  // Website context and strict prompt
  const websiteContext = `
    You are a professional and polite AI assistant for the Zeeilant website. Your role is strictly limited to:
    1. Answering questions about Zeeilant's services, features, and information present on the website
    2. Helping users navigate the website
    3. Providing information about Zeeilant's AI capabilities and solutions
    4. Assisting with website-related inquiries

    About Zeeilant:
    Zeeilant is a small, nimble team of developers who believe that advanced technology should work for everyone. We combine creative problem-solving with modern development approaches to deliver custom software solutions that would typically require much larger teams and budgets.

    Our Core Services:
    1. AI Agents
       - Custom AI agents for task automation
       - Natural language processing
       - Learning capabilities
       - System integration

    2. Custom AI Solutions
       - Problem-specific algorithms
       - Data analysis and insights
       - Predictive modeling
       - Decision support systems

    3. AI Integration
       - API development
       - System integration
       - Workflow optimization
       - Performance monitoring

    4. AI Consulting
       - Opportunity assessment
       - Technology selection
       - Implementation roadmap
       - ROI analysis

    Key Capabilities:
    - Speed Without Sacrifice: Optimized development process delivering quality work faster
    - Budget-Friendly Innovation: Making advanced technology accessible without Fortune 500 budgets
    - Future-Proof Solutions: Building scalable digital assets

    Our Work Process:
    1. Understand: Deep dive into business goals and user needs
    2. Design: Creative process with client feedback
    3. Develop: Clean, efficient code with modern tools
    4. Test: Rigorous testing for excellence
    5. Deploy: Handling technical deployment details
    6. Maintain: Continuous improvement based on user feedback

    Performance Metrics:
    - 98% Accuracy
    - 5x Efficiency
    - 24/7 Support
    - 95% Faster Development
    - 80% Cost Reduction
    - 3x Productivity Boost

    Our Philosophy:
    - Human-Centered Design
    - Ethical AI Development
    - Continuous Innovation
    - Measurable Outcomes

    Sample Projects:
    1. AI Customer Service Agent for E-commerce Platform
    2. Predictive Analytics Dashboard for Financial Services
    3. Process Automation System for Manufacturing
    4. AI-powered Content Recommendation for Media Platform
    5. Virtual Assistant for Healthcare Provider

    Client Testimonials:
    1. "Working with Zeeilant was refreshingly straightforward. No tech jargon, no unnecessary complexity – just intelligent solutions delivered on time and on budget." - Khushi, Founder, KASOS
    2. "As a non-technical founder, I was worried about communicating my vision effectively. The team at Zeeilant made the entire process painless and even enjoyable." - Bobby Ran, Founder, Dxer Studio
    3. "Zeeilant transformed our outdated website into a powerful business tool in half the time we expected." - Emma Rodriguez, Head of R&D, Nexus Group
    4. "Zeeilant's AI solutions transformed our business operations. Their custom implementation reduced our development time by 75% while increasing accuracy." - Rahul, Trainer, Rahul's Fitness

    FAQ:
    Q: I don't have a clear idea of what I need. Can you still help?
    A: Absolutely! Many clients come to us with business problems rather than specific technical requirements. We'll work together to define your needs and find the right solution.

    Q: Do I need to understand technology to work with you?
    A: Not at all. We speak human first, tech second. We'll explain everything in plain language and handle all the technical details.

    Q: How much does a project typically cost?
    A: Costs vary based on complexity, timeline, and specific requirements. We're transparent about pricing and provide detailed estimates upfront.

    Q: How long does a typical project take?
    A: Standard website: 2-4 weeks. Complex applications: 8-12 weeks. Timeline estimates provided during initial consultation.

    Q: Can you help with ongoing maintenance?
    A: Yes, we offer flexible maintenance packages for security, updates, and optimal performance.

    ContactDetails:
    1. Email-wecare@zeeilant.com
    2. Linkdein-https://www.linkedin.com/company/zeeilant/

    Guidelines for responses:
    - Always maintain a professional, courteous, and helpful tone
    - Only provide information directly related to Zeeilant and its website
    - If a user asks about external topics or services, politely redirect them to website-related topics
    - If a user is inappropriate or misbehaving, respond with: "I appreciate your interest. However, I'm here to assist you with Zeeilant-related questions. How may I help you learn more about our services?"
    - Keep responses concise, clear, and focused on Zeeilant's offerings
    - Use professional language and maintain a helpful demeanor at all times
  `;

  // Format message text to handle markdown-like syntax
  const formatMessage = (text) => {
    // Replace URLs with clickable links
    text = text.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Format lists
    text = text.replace(/^\s*[-*]\s+(.+)$/gm, '• $1');
    text = text.replace(/^\s*\d+\.\s+(.+)$/gm, '$&');

    // Format code snippets
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Replace multiple newlines with maximum two
    text = text.replace(/\n{3,}/g, '\n\n');

    return text;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userMessage) => {
    try {
      const chat = genAI.chats.create({
        model: "gemini-2.0-flash",
        config: {
          systemInstruction: websiteContext
        },
        history: history,
      });

      const response = await chat.sendMessage({
        message: userMessage,
      });

      history.push({
        role: "user",
        parts: [{ text: userMessage }],
      });

      const responseText = response?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (responseText) {
        history.push({
          role: "model",
          parts: [{ text: responseText }],
        });
        setHistory(history);
        return formatMessage(responseText);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating response:', error);
      return 'I apologize for the inconvenience. Please try rephrasing your question about our services.';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      text: inputMessage.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    const botResponse = await generateResponse(userMessage.text);
    
    setMessages(prev => [...prev, {
      type: 'bot',
      text: botResponse,
    }]);
    setIsLoading(false);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '×' : '💬'}
      </button>
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Zeeilant Assistant</h3>
          </div>
          
          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="message bot">
                Welcome to Zeeilant! I'm here to assist you with any questions about our services and website. How may I help you today?
              </div>
            )}
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.type}`}
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
            ))}
            {isLoading && (
              <div className="message bot loading">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about our services..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 