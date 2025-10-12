import React, { useEffect, useState, useRef } from "react";
import { Auth, db } from "../Firebase/Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DiamondHead from "../../Assets/DiamondHead.jpg";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ Name: "", Email: "", Phone: "", skills: [] });
  const [errors, setErrors] = useState({ Name: "", Email: "", Phone: "" });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [newSkill, setNewSkill] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const fileRef = useRef(null);

  // Fetch user data
  const fetchUserData = async (user) => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserDetails(data);
        setForm({
          Name: data.Name || "",
          Email: data.Email || "",
          Phone: data.Phone || "",
          skills: data.skills || [],
        });
        setAvatarPreview(data.avatarDataUrl || DiamondHead);
      }
    } catch (err) {
      toast.error("Error loading profile", { position: "bottom-right" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged(async (user) => {
      if (user) {
        await fetchUserData(user);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Validate form inputs
  const validateForm = () => {
    let isValid = true;
    const newErrors = { Name: "", Email: "", Phone: "" };

    if (!form.Name.trim()) {
      newErrors.Name = "Name is required";
      isValid = false;
    }
    if (!form.Email) {
      newErrors.Email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.Email)) {
      newErrors.Email = "Invalid email format";
      isValid = false;
    }
    if (form.Phone && !/^\+?\d{10,15}$/.test(form.Phone)) {
      newErrors.Phone = "Invalid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle profile save
  const handleSave = async () => {
    if (!validateForm()) return;
    try {
      const user = Auth.currentUser;
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, form);
      setUserDetails({ ...userDetails, ...form });
      setEditing(false);
      toast.success("Profile updated successfully", { position: "bottom-right" });
    } catch {
      toast.error("Failed to save profile", { position: "bottom-right" });
    }
  };

  // Handle adding a skill
  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    setForm((f) => ({ ...f, skills: [...f.skills, newSkill.trim()] }));
    setNewSkill("");
  };

  // Handle removing a skill
  const handleRemoveSkill = (skill) => {
    setForm((f) => ({ ...f, skills: f.skills.filter((s) => s !== skill) }));
  };

  // Handle avatar upload
  const handleAvatarFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file", { position: "bottom-right" });
      return;
    }
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const dataUrl = ev.target.result;
      setAvatarPreview(dataUrl);
      try {
        const user = Auth.currentUser;
        const userDoc = doc(db, "users", user.uid);
        await updateDoc(userDoc, { avatarDataUrl: dataUrl });
        toast.success("Avatar updated", { position: "bottom-right" });
      } catch {
        toast.error("Failed to update avatar", { position: "bottom-right" });
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      setShowConfetti(true);
      setTimeout(() => navigate("/login"), 1500);
    } catch {
      toast.error("Failed to log out", { position: "bottom-right" });
    }
  };

  // Calculate profile completion
  const profileCompletion = Math.min(
    100,
    ((form.Name ? 25 : 0) +
      (form.Email ? 25 : 0) +
      (form.Phone ? 25 : 0) +
      (form.skills.length ? 25 : 0))
  );

  return (
    <div className="profile-page">
      {showConfetti && (
        <div className="confetti-root" aria-hidden="true">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              className="confetti"
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                background: `hsl(${Math.random() * 360}, 70%, 80%)`,
              }}
            />
          ))}
        </div>
      )}

      {isLoading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-message">Loading profile...</p>
        </div>
      ) : (
        <div className="profile-card glass">
          {/* Avatar */}
          <div className="avatar-area">
            <img
              src={avatarPreview || DiamondHead}
              alt="User avatar"
              className="profile-image"
              onClick={() => fileRef.current?.click()}
              title="Click to change avatar"
            />
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden-file"
              onChange={handleAvatarFile}
              aria-label="Upload profile picture"
            />
          </div>

          {/* Profile Info */}
          <h2 className="profile-name">{form.Name || "User"}</h2>
          <p className="welcome-msg">Welcome back, {form.Name || "User"}! 🙏</p>

          {/* Contact Info or Edit Form */}
          <div className="contact-info">
            {editing ? (
              <div className="edit-form">
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={form.Name}
                    onChange={(e) => setForm({ ...form, Name: e.target.value })}
                    placeholder="Enter your name"
                    className={errors.Name ? "error" : ""}
                    aria-describedby="name-error"
                  />
                  {errors.Name && (
                    <span className="error-message" id="name-error">
                      {errors.Name}
                    </span>
                  )}
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={form.Email}
                    onChange={(e) => setForm({ ...form, Email: e.target.value })}
                    placeholder="Enter your email"
                    className={errors.Email ? "error" : ""}
                    aria-describedby="email-error"
                  />
                  {errors.Email && (
                    <span className="error-message" id="email-error">
                      {errors.Email}
                    </span>
                  )}
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={form.Phone}
                    onChange={(e) => setForm({ ...form, Phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className={errors.Phone ? "error" : ""}
                    aria-describedby="phone-error"
                  />
                  {errors.Phone && (
                    <span className="error-message" id="phone-error">
                      {errors.Phone}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <>
                <p>
                  <strong>Email:</strong> <span>{form.Email || "—"}</span>
                </p>
                <p>
                  <strong>Phone:</strong> <span>{form.Phone || "—"}</span>
                </p>
              </>
            )}
          </div>

          {/* Profile Progress */}
          <div className="profile-progress">
            <span>Profile Completion: {profileCompletion}%</span>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${profileCompletion}%` }} />
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-list">
              {form.skills.length ? (
                form.skills.map((skill, idx) => (
                  <span className="skill-badge" key={idx}>
                    {skill}
                    {editing && (
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        aria-label={`Remove ${skill} skill`}
                      >
                        ×
                      </button>
                    )}
                  </span>
                ))
              ) : (
                <p className="no-skills">No skills added yet.</p>
              )}
            </div>
            {editing && (
              <div className="skills-add">
                <input
                  type="text"
                  placeholder="Add a skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
                  aria-label="Add a new skill"
                />
                <button onClick={handleAddSkill} aria-label="Add skill">
                  Add
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="action-bar">
            <button onClick={() => setEditing((s) => !s)} aria-label={editing ? "Cancel editing" : "Edit profile"}>
              {editing ? "Cancel" : "Edit Profile"}
            </button>
            {editing && (
              <button onClick={handleSave} aria-label="Save profile changes">
                Save Changes
              </button>
            )}
            <button className="logout-btn" onClick={handleLogout} aria-label="Log out">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;