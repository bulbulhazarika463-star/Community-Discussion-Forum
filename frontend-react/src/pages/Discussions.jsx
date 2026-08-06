import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/dashboard.css";

import {
  FaComments,
  FaHome,
  FaPlus,
  FaUser,
  FaSignOutAlt,
  FaTrash,
  FaEnvelope,
  FaCalendarAlt
} from "react-icons/fa";

function Discussions() {

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    loadPosts();

  }, []);

  const loadPosts = async () => {

    try {

      const res = await API.get("/posts");

      setPosts(res.data.posts || []);

    } catch (err) {

      console.log(err);

    }

  };

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  const deletePost = async (id) => {

    if (!window.confirm("Delete this discussion?")) return;

    try {

      const token = localStorage.getItem("token");

      await API.delete(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      loadPosts();

    } catch {

      alert("Unable to delete discussion.");

    }

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

            <h1>Community Discussions</h1>

            <p>

              Browse discussions from the community.

            </p>

          </div>

          <Link
            to="/create-post"
            className="create-btn"
          >

            <FaPlus />

            <span>New Discussion</span>

          </Link>

        </div>

        <section className="recent-posts">

          {

            posts.length === 0 ?

            (

              <div className="empty-card">

                <FaComments size={60} />

                <h3>No Discussions Yet</h3>

                <p>

                  Be the first person to create a discussion.

                </p>

              </div>

            )

            :

            (

              posts.map((post) => (

                <div
                  className="post-card"
                  key={post._id}
                >

                  <div className="post-top">

                    <div>

                      <h3>{post.title}</h3>

                      <span className="category-badge">

                        {post.category}

                      </span>

                    </div>

                    <button
                      className="delete-btn"
                      onClick={() => deletePost(post._id)}
                    >

                      <FaTrash />

                      Delete

                    </button>

                  </div>

                  <p className="post-content">

                    {post.content}

                  </p>

                  <div className="post-footer">

                    <span>

                      <FaUser />

                      {post.author?.name || "Unknown User"}

                    </span>

                    <span>

                      <FaEnvelope />

                      {post.author?.email || "N/A"}

                    </span>

                    <span>

                      <FaCalendarAlt />

                      {new Date(post.createdAt).toLocaleDateString()}

                    </span>

                  </div>

                </div>

              ))

            )

          }

        </section>

      </main>

    </div>

  );

}

export default Discussions;