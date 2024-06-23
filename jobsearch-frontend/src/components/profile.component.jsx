import React, { useState } from 'react';

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    resume: '',
    coverLetter: '',
    github: '',
    linkedin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails({
      ...profileDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les détails du profil à votre API ou backend
    console.log('Profile updated:', profileDetails);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="profile-container">
            <h2>Votre profil</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={profileDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={profileDetails.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Téléphone:</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={profileDetails.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Pays:</label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  value={profileDetails.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>CV:</label>
                <input
                  type="text"
                  className="form-control"
                  name="resume"
                  value={profileDetails.resume}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Lettre de motivation:</label>
                <input
                  type="text"
                  className="form-control"
                  name="coverLetter"
                  value={profileDetails.coverLetter}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>GitHub:</label>
                <input
                  type="text"
                  className="form-control"
                  name="github"
                  value={profileDetails.github}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>LinkedIn:</label>
                <input
                  type="text"
                  className="form-control"
                  name="linkedin"
                  value={profileDetails.linkedin}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Mettre à jour le profil</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
