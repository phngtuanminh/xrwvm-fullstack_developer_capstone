import React, { useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'DM Sans', sans-serif",
    padding: "2rem",
    position: "relative",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    top: "-20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "700px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  card: {
    background: "#141416",
    border: "1px solid rgba(201,168,76,0.15)",
    borderRadius: "24px",
    padding: "3rem 2.8rem",
    width: "100%",
    maxWidth: "480px",
    position: "relative",
    boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
    animation: "fadeUp 0.6s ease both",
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#c9a84c",
    letterSpacing: "0.05em",
    textAlign: "center",
    marginBottom: "0.4rem",
  },
  eyebrow: {
    fontSize: "0.7rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#8a8a8e",
    textAlign: "center",
    marginBottom: "2rem",
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.9rem",
    fontWeight: 900,
    color: "#f9f6f1",
    textAlign: "center",
    marginBottom: "0.4rem",
    lineHeight: 1.15,
  },
  subheading: {
    fontSize: "0.88rem",
    color: "#8a8a8e",
    textAlign: "center",
    marginBottom: "2.2rem",
    lineHeight: 1.7,
  },
  divider: {
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
    marginBottom: "2rem",
  },
  row: {
    display: "flex",
    gap: "1rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.45rem",
    marginBottom: "1.15rem",
    flex: 1,
  },
  label: {
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#8a8a8e",
  },
  inputWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute",
    left: "0.9rem",
    color: "#8a8a8e",
    fontSize: "0.85rem",
    pointerEvents: "none",
  },
  input: {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "0.78rem 1rem 0.78rem 2.4rem",
    color: "#f9f6f1",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.25s, background 0.25s",
  },
  inputFocus: {
    borderColor: "#c9a84c",
    background: "rgba(201,168,76,0.05)",
  },
  btn: {
    width: "100%",
    padding: "0.95rem",
    background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
    border: "none",
    borderRadius: "10px",
    color: "#0a0a0a",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.88rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    cursor: "pointer",
    marginTop: "0.6rem",
    transition: "opacity 0.25s, transform 0.2s",
  },
  btnHover: {
    opacity: 0.85,
    transform: "translateY(-2px)",
  },
  footer: {
    textAlign: "center",
    marginTop: "1.4rem",
    fontSize: "0.83rem",
    color: "#8a8a8e",
  },
  link: {
    color: "#c9a84c",
    textDecoration: "none",
    fontWeight: 500,
    marginLeft: "0.3rem",
  },
  successBox: {
    background: "rgba(201,168,76,0.1)",
    border: "1px solid rgba(201,168,76,0.35)",
    borderRadius: "10px",
    padding: "0.9rem 1rem",
    color: "#e8c97a",
    fontSize: "0.85rem",
    textAlign: "center",
    marginBottom: "1.2rem",
    lineHeight: 1.6,
  },
  errorBox: {
    background: "rgba(220,60,60,0.1)",
    border: "1px solid rgba(220,60,60,0.3)",
    borderRadius: "10px",
    padding: "0.9rem 1rem",
    color: "#f08080",
    fontSize: "0.85rem",
    textAlign: "center",
    marginBottom: "1.2rem",
    lineHeight: 1.6,
  },
};

// Inject Google Fonts + keyframe into <head>
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap";
fontLink.rel = "stylesheet";
if (!document.head.querySelector('[href*="Playfair"]')) {
  document.head.appendChild(fontLink);
}

const styleTag = document.createElement("style");
styleTag.textContent = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
if (!document.head.querySelector("#reg-anim")) {
  styleTag.id = "reg-anim";
  document.head.appendChild(styleTag);
}

const ICONS = {
  user: "👤",
  name: "✏️",
  email: "✉️",
  lock: "🔒",
};

export default function Register() {
  const [form, setForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [btnHovered, setBtnHovered] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(null);
  };

  const getInputStyle = (field) => ({
    ...styles.input,
    ...(focusedField === field ? styles.inputFocus : {}),
  });

  const handleSubmit = async () => {
    const { userName, firstName, lastName, email, password } = form;

    if (!userName || !firstName || !lastName || !email || !password) {
      setStatus("error");
      setMessage("Please fill in all fields before registering.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/djangoapp/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, firstName, lastName, email, password }),
      });
      const data = await res.json();

      if (data.status === "Registered") {
        setStatus("success");
        setMessage(`Welcome, ${firstName}! Your account has been created. You can now log in.`);
        setForm({ userName: "", firstName: "", lastName: "", email: "", password: "" });
      } else if (data.error === "Already Registered") {
        setStatus("error");
        setMessage("This username is already taken. Please choose another.");
      } else {
        setStatus("error");
        setMessage("Registration failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.glow} />
      <div style={styles.card}>

        {/* Branding */}
        <div style={styles.logo}>Cars Dealership</div>
        <div style={styles.eyebrow}>Create your account</div>

        <h1 style={styles.heading}>Join Us Today</h1>
        <p style={styles.subheading}>
          Register to browse dealerships, leave reviews,<br />and manage your vehicle journey.
        </p>

        <div style={styles.divider} />

        {/* Status messages */}
        {status === "success" && <div style={styles.successBox}>✅ {message}</div>}
        {status === "error"   && <div style={styles.errorBox}>⚠️ {message}</div>}

        {/* Username */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Username</label>
          <div style={styles.inputWrap}>
            <span style={styles.inputIcon}>{ICONS.user}</span>
            <input
              style={getInputStyle("userName")}
              type="text"
              name="userName"
              placeholder="e.g. johnsmith92"
              value={form.userName}
              onChange={handleChange}
              onFocus={() => setFocusedField("userName")}
              onBlur={() => setFocusedField(null)}
              autoComplete="username"
            />
          </div>
        </div>

        {/* First Name + Last Name */}
        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>First Name</label>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>{ICONS.name}</span>
              <input
                style={getInputStyle("firstName")}
                type="text"
                name="firstName"
                placeholder="John"
                value={form.firstName}
                onChange={handleChange}
                onFocus={() => setFocusedField("firstName")}
                onBlur={() => setFocusedField(null)}
                autoComplete="given-name"
              />
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Last Name</label>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>{ICONS.name}</span>
              <input
                style={getInputStyle("lastName")}
                type="text"
                name="lastName"
                placeholder="Smith"
                value={form.lastName}
                onChange={handleChange}
                onFocus={() => setFocusedField("lastName")}
                onBlur={() => setFocusedField(null)}
                autoComplete="family-name"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <div style={styles.inputWrap}>
            <span style={styles.inputIcon}>{ICONS.email}</span>
            <input
              style={getInputStyle("email")}
              type="email"
              name="email"
              placeholder="john.smith@email.com"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              autoComplete="email"
            />
          </div>
        </div>

        {/* Password */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <div style={styles.inputWrap}>
            <span style={styles.inputIcon}>{ICONS.lock}</span>
            <input
              style={getInputStyle("password")}
              type="password"
              name="password"
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={handleChange}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
              autoComplete="new-password"
            />
          </div>
        </div>

        {/* Register Button */}
        <button
          style={{
            ...styles.btn,
            ...(btnHovered ? styles.btnHover : {}),
            opacity: loading ? 0.7 : 1,
          }}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Registering…" : "Register →"}
        </button>

        {/* Footer link */}
        <div style={styles.footer}>
          Already have an account?
          <a href="/login" style={styles.link}>Sign in</a>
        </div>
      </div>
    </div>
  );
}
