import { Link, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

import {
  FaComments,
  FaHome,
  FaPlus,
  FaUser,
  FaSignOutAlt,
  FaEnvelope,
  FaCalendarAlt
} from "react-icons/fa";

function Profile() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="dashboard">

      <aside className="sidebar">

        <div className="sidebar-logo">

          <div className="logo-box">
            <FaComments size={28} />
          </div>

          <div>

            <h2>Community</h2>

            <span>Forum</span>

          </div>

        </div>

        <ul>

          <li>

            <Link to="/dashboard">

              <FaHome />

              Dashboard

            </Link>

          </li>

          <li>

            <Link to="/discussions">

              <FaComments />

              Discussions

            </Link>

          </li>

          <li>

            <Link to="/create-post">

              <FaPlus />

              Create Post

            </Link>

          </li>

          <li>

            <Link to="/profile">

              <FaUser />

              Profile

            </Link>

          </li>

        </ul>

        <button
          className="logout-btn"
          onClick={logout}
        >

          <FaSignOutAlt />

          Logout

        </button>

      </aside>

      <main className="dashboard-content">

        <div className="dashboard-header">

          <div>

            <h1>My Profile</h1>

            <p>

              View your account information.

            </p>

          </div>

        </div>

        <div className="profile-card">

          <div
            style={{
              textAlign: "center",
              marginBottom: "30px"
            }}
          >

            <div
              style={{
                width: "110px",
                height: "110px",
                margin: "auto",
                borderRadius: "50%",
                background: "#2563eb",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "42px"
              }}
            >

              <FaUser />

            </div>

          </div>

          <div className="profile-info">

            <strong>

              <FaUser />

              Name

            </strong>

            <p>

              {user.name}

            </p>

          </div>

          <div className="profile-info">

            <strong>

              <FaEnvelope />

              Email

            </strong>

            <p>

              {user.email}

            </p>

          </div>

          <div className="profile-info">

            <strong>

              <FaCalendarAlt />

              Member

            </strong>

            <p>

              Community Forum User

            </p>

          </div>

        </div>

      </main>

    </div>

  );

}

export default Profile;