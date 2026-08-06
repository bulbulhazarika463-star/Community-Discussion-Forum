import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/dashboard.css";
import {
  FaComments,
  FaUsers,
  FaLayerGroup,
  FaHome,
  FaPlus,
  FaUser,
  FaSignOutAlt,
  FaTrash,
  FaEnvelope,
  FaCalendarAlt
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem("user"));

    if (currentUser) {
      setUser(currentUser);
    }

    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data.posts || []);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const myPosts = posts.filter(
    (post) => post.author?._id === user._id
  );

  const categories = [
    ...new Set(posts.map((post) => post.category)),
  ];

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

        <button className="logout-btn" onClick={logout}>
  <FaSignOutAlt />
  Logout
</button>

      </aside>

      <main className="dashboard-content">

        <div className="dashboard-header">

  <div>

    <h1>
      Welcome, {user.name} 👋
    </h1>

    <p>
      Here's what's happening in your community today.
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

<div className="dashboard-cards">

  <div className="card">
    <div className="card-icon blue">
      <FaComments size={38} />
    </div>

    <h2>{posts.length}</h2>
    <p>Discussions</p>
  </div>

  <div className="card">
    <div className="card-icon green">
      <FaUsers size={38} />
    </div>

    <h2>{myPosts.length}</h2>
    <p>My Posts</p>
  </div>

  <div className="card">
    <div className="card-icon purple">
      <FaLayerGroup size={38} />
    </div>

    <h2>{categories.length}</h2>
    <p>Categories</p>
  </div>

</div>
                <section className="recent-posts">

          <div className="section-header">

            <h2>Recent Discussions</h2>

            <Link
              to="/discussions"
              className="view-all"
            >
              View All
            </Link>

          </div>

          {posts.length === 0 ? (

            <div className="empty-card">

              
                <FaComments />

              <h3>No Discussions Yet</h3>

              <p>
                Create your first discussion and start interacting with the community.
              </p>

              <Link
                to="/create-post"
                className="create-btn"
              >
                Create Discussion
              </Link>

            </div>

          ) : (

            posts.slice(0, 5).map((post) => (

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
                    onClick={async () => {

                      if (!window.confirm("Delete this discussion?")) return;

                      try {

                        await API.delete(`/posts/${post._id}`);

alert("Discussion deleted successfully.");


                        loadPosts();

                      } catch (err) {

                        alert("Unable to delete discussion");

                      }

                    }}
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

          )}

        </section>

      </main>

    </div>
  );
}

export default Dashboard;