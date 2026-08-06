import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.png";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home">

        <section className="hero">

          <div className="container hero-container">

            <div className="hero-left">

              <span className="hero-badge">
                🚀 Welcome to Community Discussion Forum
              </span>

              <h1>
                Learn.
                <br />
                Discuss.
                <br />
                <span>Grow Together.</span>
              </h1>

              <p>
                Connect with students, ask questions,
                share knowledge and collaborate on
                projects from one modern platform.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/register"
                  className="primary-btn"
                >
                  Join Community
                </Link>

                <Link
                  to="/login"
                  className="secondary-btn"
                >
                  Login
                </Link>

              </div>

            </div>

            <div className="hero-right">

              <img
                src={heroImage}
                alt="Community Forum"
              />

            </div>

          </div>

        </section>

        <section className="stats">

          <div className="container stats-grid">

            <div className="stat-card">
              <h2>1200+</h2>
              <p>Students</p>
            </div>

            <div className="stat-card">
              <h2>450+</h2>
              <p>Discussions</p>
            </div>

            <div className="stat-card">
              <h2>25+</h2>
              <p>Categories</p>
            </div>

            <div className="stat-card">
              <h2>98%</h2>
              <p>Active Users</p>
            </div>

          </div>

        </section>

        <section className="features">

          <div className="container">

            <div className="section-title">

              <h2>
                Why Choose Our Community?
              </h2>

              <p>
                Everything you need for learning,
                discussion and collaboration.
              </p>

            </div>

            <div className="features-grid">

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="fa-solid fa-comments"></i>
                </div>

                <h3>
                  Interactive Discussions
                </h3>

                <p>
                  Start discussions, ask questions
                  and exchange ideas with everyone.
                </p>

              </div>

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="fa-solid fa-users"></i>
                </div>

                <h3>
                  Student Community
                </h3>

                <p>
                  Meet like-minded students,
                  build friendships and collaborate.
                </p>

              </div>

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>

                <h3>
                  Knowledge Sharing
                </h3>

                <p>
                  Share your ideas,
                  experiences and valuable learning.
                </p>

              </div>

            </div>

          </div>

        </section>
                <section className="cta">

          <div className="container">

            <h2>
              Join Thousands of Students Today
            </h2>

            <p>
              Ask questions, share knowledge,
              discuss ideas and grow together with
              one powerful student community.
            </p>

            <Link
              to="/register"
              className="primary-btn"
            >
              Get Started
            </Link>

          </div>

        </section>

        <footer className="footer">

          <div className="container footer-grid">

            <div>

              <h2>Community Forum</h2>

              <p>
                A modern discussion platform
                built for students to learn,
                collaborate and share ideas.
              </p>

            </div>

            <div>

              <h3>Quick Links</h3>

              <ul>

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>

                <li>
                  <Link to="/discussions">
                    Discussions
                  </Link>
                </li>

              </ul>

            </div>

            <div>

              <h3>Follow Us</h3>

              <div className="social-links">

                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>

                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>

              </div>

            </div>

          </div>

          <div className="copyright">

            © 2026 Community Discussion Forum.
            All Rights Reserved.

          </div>

        </footer>

      </main>

    </>
  );
}

export default Home;
