const { useState } = React;

const DynamicEmailForm = () => {
  const [emails, setEmails] = useState([""]); 
  const addEmailField = () => {
    setEmails([...emails, ""]);
  };
  const handleEmailChange = (index, value) => {
    setEmails((prevEmails) => {
      const updatedEmails = [...prevEmails];
      updatedEmails[index] = value;
      return updatedEmails;
    });
  };
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Dynamic Email Form</h2>
      <form>
        {emails.map((email, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="email"
              placeholder={`Email ${index + 1}`}
              value={email}
              onChange={(e) => handleEmailChange(index, e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: email && !isValidEmail(email) ? "2px solid red" : "1px solid #ccc",
              }}
            />
            {email && !isValidEmail(email) && (
              <span style={{ color: "red", fontSize: "12px", marginTop: "5px", display: "block" }}>
                Invalid Email
              </span>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addEmailField}
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          Add Email
        </button>
      </form>
      <h3 style={{ marginTop: "20px" }}>Entered Emails:</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {emails.map((email, index) =>
          email ? (
            <li key={index} style={{ background: "#f9f9f9", padding: "8px", borderRadius: "4px", margin: "5px 0" }}>
              {email}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <DynamicEmailForm />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
