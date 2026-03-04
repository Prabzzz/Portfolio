import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello. I am Prabha's virtual assistant. You can ask about his Skills, Experience, Projects, Education, or Contact information."
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ===========================
     KNOWLEDGE BASE
  ============================ */

  const prabhaInfo = {
    skills: `**Core Technical Skills**

Frontend:
React • TypeScript • Microfrontend Architecture • MUI

Backend:
Node.js • Express • REST APIs • AWS Lambda

Cloud & DevOps:
AWS (S3, DynamoDB, Cognito, Bedrock)
API Gateway
CI/CD Automation
GitHub Actions`,

    experience: `**Professional Experience**

Senior Full-Stack Developer  
Diafoni Technology Services Pvt Ltd  
Mar 2026 – Present  
• Leading scalable AI-driven cloud platforms  
• Improved distributed system performance by 35%  
• Designed microfrontend ecosystem  

Cloud Full-Stack Developer  
Mar 2024 – Feb 2026  
• Reduced API response time by 25%  
• Built AI modules using AWS Bedrock  
• Implemented OAuth 2.0 & Cognito authentication`,

    projects: `**Featured Projects**

Dentexaa Dental EHR  
Comprehensive dental record system built on AWS  

Trident Dental Clinic  
Modern appointment booking platform with chatbot`,

    education: `**Education**

B.Tech in Computer Science & Engineering  
Rajiv Gandhi College of Engineering & Technology  
2019 – 2023  
Top 10% of class  
CGPA: 7.1`,

    contact: `**Contact Information**

Email:
prabhakaranjayakanthan@gmail.com

Phone:
+91 8110978757

LinkedIn:
https://linkedin.com/in/prabhakaran-j-55895a1a1/

Location:
Pondicherry, India`
  };

  const keywordMap = {
    skills: ["skill", "skills", "tech", "stack", "technology"],
    experience: ["experience", "exp", "work", "career", "background"],
    projects: ["project", "projects", "portfolio", "build"],
    education: ["education", "college", "degree"],
    contact: ["contact", "email", "phone", "linkedin"]
  };

  const generateResponse = (text) => {
    const lower = text.toLowerCase().trim();
  
    // Greeting handling
    if (
      ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"].includes(lower)
    ) {
      return "Welcome. Please let me know if you would like to explore Skills, Experience, Projects, Education, or Contact information.";
    }
  
    // Thank you / closing handling
    if (
      ["thanks", "thank you", "bye", "goodbye", "see you"].includes(lower)
    ) {
      return "You're welcome. If you require any further information regarding Prabha’s professional profile, please feel free to return at any time. Wishing you a productive day.";
    }
  
    // Section matching
    for (const key in keywordMap) {
      if (keywordMap[key].some((word) => lower.includes(word))) {
        return prabhaInfo[key];
      }
    }
  
    // Fallback
    return "I may not have understood your request. Please select one of the available sections below or ask about Skills, Experience, Projects, Education, or Contact details.";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: generateResponse(userMessage) }
      ]);
    }, 400);
  };

  const quickOptions = [
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact"
  ];

  // Convert URLs & email into clickable links automatically
  const formatMessage = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

    return text.split("\n").map((line, i) => {
      let formattedLine = line;

      if (line.match(urlRegex)) {
        formattedLine = (
          <a
            key={i}
            href={line}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-medium underline break-words"
          >
            {line}
          </a>
        );
      } else if (line.match(emailRegex)) {
        formattedLine = (
          <a
            key={i}
            href={`mailto:${line}`}
            className="text-black font-medium underline break-words"
          >
            {line}
          </a>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        formattedLine = (
          <strong key={i} className="block font-semibold">
            {line.replace(/\*\*/g, "")}
          </strong>
        );
      }

      return <div key={i}>{formattedLine}</div>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-[Poppins]">

      {isOpen && (
        <div className="w-80 sm:w-96 h-[460px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-zinc-900 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-sm">
                Prabha's AI Assistant
              </h3>
              <p className="text-xs text-zinc-400">
                Cloud Full Stack Developer
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition text-lg"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3 text-sm text-gray-800">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-xl break-words whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-zinc-900 text-white self-end rounded-tr-none"
                    : "bg-white border border-gray-200 self-start rounded-tl-none"
                }`}
              >
                {formatMessage(msg.content)}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions (Always Visible) */}
          <div className="px-3 py-2 bg-white flex flex-wrap gap-2">
            {quickOptions.map((item) => (
              <button
                key={item}
                onClick={() =>
                  setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: generateResponse(item) }
                  ])
                }
                className="text-xs px-3 py-1 bg-zinc-100 rounded-full hover:bg-zinc-200 transition"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 text-sm"
            />
            <button
              type="submit"
              className="bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition text-sm"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Original Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-zinc-900 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-zinc-800 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chatbot;