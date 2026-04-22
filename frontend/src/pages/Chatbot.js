import React, { useState, useRef, useEffect } from "react";

const Document = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! I am INFOMITRA. Ask me about government documents or schemes in English, Hindi, or Gujarati." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const BACKEND_URL = "http://localhost:5000/api/query"; // ⚡ your backend

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input, language: "English" })
      });

      const data = await response.json();
      const botReply = data.response || "⚠️ Sorry, I couldn’t find an answer.";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error fetching answer. Please try again." }
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.chatContainer}>
        {/* Header */}
        <header style={styles.header}>
          <h1>💬 INFOMITRA Chatbot</h1>
          <p>Your assistant for government documents & schemes</p>
        </header>

        {/* Messages */}
        <main style={styles.messages}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  ...styles.messageBubble,
                  background: msg.sender === "user" ? "#DCF8C6" : "#F1F0F0",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ ...styles.messageBubble, background: "#F1F0F0", width: "fit-content" }}>
              <span>⏳ Bot is typing...</span>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </main>

        {/* Input */}
        <form onSubmit={sendMessage} style={styles.inputBar}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            style={styles.input}
            disabled={loading}
          />
          <button type="submit" style={styles.sendButton} disabled={loading || !input.trim()}>
            ➤
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f9",
  },
  chatContainer: {
    width: "80%",
    height: "80vh", // 🔥 only 80% of viewport height
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    overflow: "hidden",
  },
  header: {
    background: "#1976D2",
    color: "white",
    padding: "16px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  messages: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    background: "#fafafa",
  },
  messageBubble: {
    padding: "12px 16px",
    borderRadius: "12px",
    maxWidth: "70%",
    whiteSpace: "pre-wrap",
    fontSize: "15px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  inputBar: {
    display: "flex",
    padding: "12px",
    borderTop: "1px solid #ddd",
    background: "#fff",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "25px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "15px",
  },
  sendButton: {
    marginLeft: "10px",
    padding: "12px 18px",
    borderRadius: "50%",
    border: "none",
    background: "#1976D2",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
};

export default Document;
