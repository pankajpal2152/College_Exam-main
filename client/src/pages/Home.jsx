import React, { useEffect, useState } from "react";
import homeBg from "../assets/HomeBg.jpg.jpeg";
import { Link } from "react-router-dom";
import {
  FaUserShield,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaGraduationCap,
  FaArrowRight,
  FaUniversity,
  FaBookOpen,
  FaUsers,
  FaChartLine
} from "react-icons/fa";

export default function Home() {
  const [stats, setStats] = useState({
    professors: 0,
    papers: 0,
    evaluations: 0
  });

  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    "Smart Exam Workflow",
    "Digital Evaluation System",
    "Modern College Management",
    "AI Powered Exam Portal"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) =>
        prev === rotatingTexts.length - 1 ? 0 : prev + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateValue = (key, endValue, duration) => {
      let start = 0;
      const increment = endValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          start = endValue;
          clearInterval(timer);
        }
        setStats((prev) => ({
          ...prev,
          [key]: Math.floor(start)
        }));
      }, 16);
    };

    animateValue("professors", 500, 2000);
    animateValue("papers", 1200, 2200);
    animateValue("evaluations", 10000, 2600);
  }, []);

  return (
    <div style={styles.container}>
      {/* BACKGROUND GLOWS */}
      <div style={styles.bg1}></div>
      <div style={styles.bg2}></div>
      <div style={styles.bg3}></div>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>
            <FaGraduationCap />
          </div>
          <div>
            <h2 style={styles.logoText}>ExamFlow</h2>
            <p style={styles.logoSub}>Smart Examination System</p>
          </div>
        </div>

        <div style={styles.navButtons}>
          <Link to="/admin-login" style={styles.adminBtn}>
            <FaUserShield /> Admin
          </Link>
          <Link to="/professor-login" style={styles.profBtn}>
            <FaChalkboardTeacher /> Professor
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={styles.heroSection}>
        {/* LEFT CONTENT */}
        <div style={styles.leftSection}>
          <div style={styles.badge}>
            <span style={styles.liveDot}></span>
            Live Smart Portal
          </div>

          <h1 style={styles.heroTitle}>{rotatingTexts[currentText]}</h1>

          <p style={styles.heroText}>
            A premium digital examination management platform for colleges.
            Manage professors, assign papers, evaluate answer sheets and track
            workflow seamlessly.
          </p>

          <div style={styles.heroButtons}>
            <Link to="/admin-login" style={styles.primaryBtn}>
              Get Started <FaArrowRight />
            </Link>
            <Link to="/professor-login" style={styles.secondaryBtn}>
              Open Portal
            </Link>
          </div>

          {/* STATS */}
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <FaUsers style={styles.statIcon} />
              <h2 style={styles.statNumber}>{stats.professors}+</h2>
              <p style={styles.statLabel}>Professors</p>
            </div>

            <div style={styles.statCard}>
              <FaBookOpen style={styles.statIcon} />
              <h2 style={styles.statNumber}>{stats.papers}+</h2>
              <p style={styles.statLabel}>Assigned Papers</p>
            </div>

            <div style={styles.statCard}>
              <FaChartLine style={styles.statIcon} />
              <h2 style={styles.statNumber}>{stats.evaluations}+</h2>
              <p style={styles.statLabel}>Evaluations</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (Feature Card) */}
        <div style={styles.rightSection}>
          <div style={styles.mainCard}>
            <div style={styles.topGlow}></div>
            <div style={styles.cardIcon}>
              <FaUniversity />
            </div>
            <h2 style={styles.cardTitle}>Premium College Dashboard</h2>
            <p style={styles.cardText}>
              Fully digital modern examination workflow with premium UI and
              secure management system.
            </p>

            <div style={styles.cardMiniGrid}>
              <div style={styles.miniCard}>
                <FaClipboardCheck />
                <span style={styles.miniText}>Smart Evaluation</span>
              </div>
              <div style={styles.miniCard}>
                <FaUserShield />
                <span style={styles.miniText}>Secure Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh", // Strict viewport height
    width: "100vw",  // Full viewport width
    margin: 0,       // No margin (removes sidebar space)
    padding: 0,
    backgroundImage: `linear-gradient(rgba(2,6,23,0.85), rgba(15,23,42,0.85)), url(${homeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    overflow: "hidden", // Prevents scrolling
    fontFamily: "'Poppins', sans-serif",
    color: "white",
    display: "flex",
    flexDirection: "column"
  },

  bg1: {
    position: "absolute",
    width: "40vh",
    height: "40vh",
    borderRadius: "50%",
    background: "#7c3aed",
    top: "-10vh",
    left: "-10vh",
    opacity: 0.4,
    filter: "blur(120px)",
    zIndex: 0
  },

  bg2: {
    position: "absolute",
    width: "40vh",
    height: "40vh",
    borderRadius: "50%",
    background: "#2563eb",
    bottom: "-10vh",
    right: "-10vh",
    opacity: 0.4,
    filter: "blur(120px)",
    zIndex: 0
  },

  bg3: {
    position: "absolute",
    width: "30vh",
    height: "30vh",
    borderRadius: "50%",
    background: "#06b6d4",
    top: "40%",
    left: "45%",
    opacity: 0.2,
    filter: "blur(100px)",
    zIndex: 0
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2vh 5vw",
    position: "relative",
    zIndex: 2,
    height: "10vh" // Fixed height for navbar
  },

  logo: { display: "flex", alignItems: "center", gap: "12px" },

  logoIcon: {
    width: "45px",
    height: "45px",
    borderRadius: "12px",
    background: "linear-gradient(135deg,#7c3aed,#2563eb)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    boxShadow: "0 8px 20px rgba(99,102,241,0.4)"
  },

  logoText: { margin: 0, fontSize: "22px", fontWeight: "700" },
  logoSub: { margin: 0, color: "#94a3b8", fontSize: "11px" },

  navButtons: { display: "flex", gap: "15px" },

  adminBtn: {
    textDecoration: "none",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    padding: "10px 18px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backdropFilter: "blur(15px)",
    fontWeight: "600",
    fontSize: "14px"
  },

  profBtn: {
    textDecoration: "none",
    background: "linear-gradient(135deg,#7c3aed,#2563eb)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600",
    fontSize: "14px",
    boxShadow: "0 8px 20px rgba(99,102,241,0.3)"
  },

  heroSection: {
    flex: 1, // Takes remaining space
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    alignItems: "center",
    padding: "0 5vw",
    position: "relative",
    zIndex: 2,
    overflow: "hidden"
  },

  leftSection: { maxWidth: "650px" },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "8px 16px",
    borderRadius: "30px",
    color: "#cbd5e1",
    fontSize: "13px",
    marginBottom: "2vh",
    backdropFilter: "blur(15px)"
  },

  liveDot: { width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" },

  heroTitle: {
    fontSize: "clamp(40px, 5vw, 60px)", // Responsive title size
    lineHeight: "1.1",
    fontWeight: "800",
    marginBottom: "2vh",
    background: "linear-gradient(135deg,#ffffff,#c4b5fd,#93c5fd)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  heroText: { color: "#cbd5e1", fontSize: "16px", lineHeight: "1.6", marginBottom: "3vh" },

  heroButtons: { display: "flex", gap: "15px", marginBottom: "4vh" },

  primaryBtn: {
    textDecoration: "none",
    background: "linear-gradient(135deg,#7c3aed,#2563eb)",
    color: "white",
    padding: "14px 24px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "700",
    boxShadow: "0 10px 25px rgba(99,102,241,0.4)"
  },

  secondaryBtn: {
    textDecoration: "none",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    padding: "14px 24px",
    borderRadius: "14px",
    backdropFilter: "blur(15px)",
    fontWeight: "600"
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },

  statCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "15px 20px",
    backdropFilter: "blur(10px)"
  },

  statIcon: { fontSize: "20px", color: "#a5b4fc", marginBottom: "10px" },
  statNumber: { margin: 0, fontSize: "24px", fontWeight: "700" },
  statLabel: { margin: 0, fontSize: "12px", color: "#94a3b8" },

  rightSection: { display: "flex", justifyContent: "center" },

  mainCard: {
    width: "100%",
    maxWidth: "380px",
    padding: "30px",
    borderRadius: "28px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(25px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
    position: "relative",
    overflow: "hidden"
  },

  topGlow: {
    position: "absolute",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#7c3aed,#2563eb)",
    top: "-75px",
    right: "-75px",
    opacity: 0.35,
    filter: "blur(50px)"
  },

  cardIcon: {
    width: "70px",
    height: "70px",
    borderRadius: "20px",
    background: "linear-gradient(135deg,#7c3aed,#2563eb)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    marginBottom: "20px",
    boxShadow: "0 10px 25px rgba(99,102,241,0.45)"
  },

  cardTitle: { fontSize: "24px", fontWeight: "700", marginBottom: "15px" },
  cardText: { color: "#cbd5e1", lineHeight: "1.5", fontSize: "14px", marginBottom: "25px" },
  cardMiniGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },

  miniCard: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "15px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "16px",
    color: "#a5b4fc"
  },

  miniText: { fontSize: "12px", color: "white", fontWeight: "500" }
};