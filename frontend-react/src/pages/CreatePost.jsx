import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/dashboard.css";

import {
  FaComments,
  FaHome,
  FaPlus,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

function CreatePost() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    content: ""
  });

  const changeHandler = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.post(
        "/posts",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Discussion created successfully.");

      navigate("/discussions");

    } catch (err) {

      alert("Unable to create discussion.");

    }

  };

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

            <h1>Create Discussion</h1>

            <p>

              Share your ideas with the community.

            </p>

          </div>

        </div>

        <div className="post-card">

          <form onSubmit={submitHandler}>

            <input
              type="text"
              name="title"
              placeholder="Discussion Title"
              value={form.title}
              onChange={changeHandler}
              required
            />

            <select
              name="category"
              value={form.category}
              onChange={changeHandler}
              required
            >

              <option value="">Select Category</option>

              <option>Programming</option>

              <option>Web Development</option>

              <option>Database</option>

              <option>Java</option>

              <option>JavaScript</option>

              <option>React</option>

              <option>Node.js</option>

              <option>Career</option>

              <option>Other</option>

            </select>

            <textarea
              name="content"
              placeholder="Write your discussion..."
              value={form.content}
              onChange={changeHandler}
              required
            />

            <button
              className="create-btn"
              type="submit"
            >

              <FaPlus />

              Publish Discussion

            </button>

          </form>

        </div>

      </main>

    </div>

  );

}

export default CreatePost;