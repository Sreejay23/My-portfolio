import React, { useState, useRef, useEffect } from 'react'
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'

const SYSTEM_PROMPT = `You are a helpful AI assistant on Sreejay A's portfolio website. You know everything about Sreejay:
- Full name: Sreejay A
- Location: Thoothukudi, Tamil Nadu, India
- Education: B.E Mechanical Engineering
- Skills: Java, HTML5, CSS3, JavaScript, React.js, MySQL, AWS Cloud, Git, GitHub
- Projects: Foodie Express (full-stack food delivery app with React, Node.js, Express, MongoDB), AWS S3 Storage Monitor (A serverless monitoring solution that tracks Amazon S3 bucket storage usage and trends in real time.)
- Open to: Frontend Developer, Full Stack Developer, Software Engineer roles
- Email: sreejay129@gmail.com
- GitHub: https://github.com/Sreejay23
- LinkedIn: https://linkedin.com/in/sreejay-a
Answer questions about Sreejay professionally and helpfully. Keep responses concise and friendly.`

const SUGGESTIONS = [
  "Who is Sreejay?",
  "What are his skills?",
  "Tell me about his projects",
  "Is he open to work?",
  "How can I contact him?",
  "What is his education?",
]

const ANSWERS = {
  "Who is Sreejay?": "Sreejay A is a software developer from Thoothukudi, Tamil Nadu, India. He specializes in full-stack web development and cloud computing, with a passion for building clean and useful applications. He holds a B.E in Mechanical Engineering and has transitioned into tech through self-learning and hands-on projects. 🚀",
  "What are his skills?": "Sreejay is skilled in:\n\n• **Languages:** Java, JavaScript, HTML5, CSS3\n• **Frontend:** React.js\n• **Database:** MySQL\n• **Cloud:** AWS Cloud\n• **Tools:** Git, GitHub\n\nHe's constantly learning and improving his skill set! 💪",
  "Tell me about his projects": "Sreejay has built two notable projects:\n\n🍔 **Foodie Express** — A full-stack food delivery app with authentication, cart, orders and payment integration. Built with React, Node.js, Express and MongoDB.\n\n☁️ **AWS S3 Storage Monitor** — A serverless monitoring solution that tracks Amazon S3 bucket storage usage in real time, sends alerts and stores historical metrics for analysis.",
  "Is he open to work?": "Yes! Sreejay is currently open to new opportunities. He's looking for roles such as:\n\n• Frontend Developer\n• Full Stack Developer\n• Software Engineer\n\nFeel free to reach out to him at sreejay129@gmail.com or connect on LinkedIn! 🤝",
  "How can I contact him?": "You can reach Sreejay through:\n\n📧 **Email:** sreejay129@gmail.com\n💼 **LinkedIn:** linkedin.com/in/sreejay-a\n🐙 **GitHub:** github.com/Sreejay23\n\nHe's always happy to connect and discuss opportunities! 😊",
  "What is his education?": "Sreejay holds a **B.E in Mechanical Engineering**. Despite his engineering background, he has a strong passion for software development and has built his tech skills through self-learning, hands-on projects, and continuous practice. 🎓",
}

function ChatBox() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Sreejay's AI assistant 👋 Ask me anything about his skills, projects, or experience!" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text) => {
    const msgText = text || input
    if (!msgText.trim() || loading) return

    setShowSuggestions(false)
    const userMsg = { role: 'user', content: msgText }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    // Check if it matches a suggestion — use pre-written answer
    if (ANSWERS[msgText]) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: ANSWERS[msgText] }])
        setLoading(false)
      }, 800)
      return
    }

    // For custom typed questions, try API
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [...messages, userMsg].filter(m => m.role !== 'system')
        })
      })

      const data = await response.json()
      const reply = data.content?.[0]?.text || getFallbackAnswer(msgText)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: getFallbackAnswer(msgText) }])
    }

    setLoading(false)
  }

  const getFallbackAnswer = (question) => {
    const q = question.toLowerCase()
    if (q.includes('skill') || q.includes('know') || q.includes('tech')) return ANSWERS["What are his skills?"]
    if (q.includes('project') || q.includes('built') || q.includes('work')) return ANSWERS["Tell me about his projects"]
    if (q.includes('contact') || q.includes('email') || q.includes('reach')) return ANSWERS["How can I contact him?"]
    if (q.includes('open') || q.includes('job') || q.includes('hire') || q.includes('available')) return ANSWERS["Is he open to work?"]
    if (q.includes('education') || q.includes('study') || q.includes('degree') || q.includes('college')) return ANSWERS["What is his education?"]
    if (q.includes('who') || q.includes('sreejay') || q.includes('about')) return ANSWERS["Who is Sreejay?"]
    return "I'm here to tell you about Sreejay! Try asking about his skills, projects, education, or how to contact him. 😊"
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleReset = () => {
    setMessages([{ role: 'assistant', content: "Hi! I'm Sreejay's AI assistant 👋 Ask me anything about his skills, projects, or experience!" }])
    setShowSuggestions(true)
    setInput('')
  }

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaRobot />}
        {!open && <span className="chat-toggle-label">Ask AI</span>}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar"><FaRobot /></div>
              <div>
                <p className="chat-name">Sreejay's AI</p>
                <p className="chat-status">🟢 Online</p>
              </div>
            </div>
            <div className="chat-header-actions">
              <button className="chat-reset" onClick={handleReset} title="Reset chat">↺</button>
              <button className="chat-close" onClick={() => setOpen(false)}><FaTimes /></button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role}`}>
                {msg.role === 'assistant' && <div className="chat-msg-avatar"><FaRobot /></div>}
                <div className="chat-bubble">{msg.content}</div>
              </div>
            ))}

            {showSuggestions && !loading && (
              <div className="chat-suggestions">
                <p className="suggestions-label">Quick questions:</p>
                <div className="suggestions-grid">
                  {SUGGESTIONS.map((s, i) => (
                    <button key={i} className="suggestion-chip" onClick={() => sendMessage(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {loading && (
              <div className="chat-msg assistant">
                <div className="chat-msg-avatar"><FaRobot /></div>
                <div className="chat-bubble typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Or type your question..."
              className="chat-input"
              disabled={loading}
            />
            <button className="chat-send" onClick={() => sendMessage()} disabled={loading || !input.trim()}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBox
