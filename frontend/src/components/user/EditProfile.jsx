import React, { Fragment, useEffect, useState } from "react";
import "../../CSS/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateUser } from "../../store/User/user-action";

const EditProfile = () => {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    avatar: "",
  });
  const [avatarPreview, setAvatarPreview] = useState("");

  // Initialize form when user loads
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phoneNumber: user.phoneNumber || "",
        avatar: "",
      });
      setAvatarPreview(user.avatar?.url || "https://i.pravatar.cc/150?img=3");
    }
  }, [user]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please choose an image file");
      e.target.value = "";
      return;
    }

    // Base64 adds roughly 33% to the file size. Keeping the source image small
    // prevents slow uploads and request-size failures on weaker connections.
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("Image size should be less than 5 MB");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setFormData((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      }
    };
    reader.onerror = () => {
      toast.error("Failed to read file");
    };
    reader.readAsDataURL(file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFields = {};

    if (formData.name !== user?.name) {
      updatedFields.name = formData.name;
    }
    if (formData.phoneNumber !== user?.phoneNumber) {
      updatedFields.phoneNumber = formData.phoneNumber;
    }
    if (formData.avatar && formData.avatar !== user?.avatar?.url) {
      updatedFields.avatar = formData.avatar;
    }

    if (Object.keys(updatedFields).length === 0) {
      toast("No changes made");
      return;
    }

    const wasUpdated = await dispatch(updateUser(updatedFields));
    if (wasUpdated) {
      navigate("/profile");
    }
  };

  if (!user) {
    return <div className="loader"></div>;
  }

  return (
    <Fragment>
      <div className="row wrapper">
        <div className="col-10 col-lg-5 updateprofile">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1 className="mt-2 mb-5">Update Profile</h1>

            <div className="form-group">
              <label htmlFor="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber_field">Phone Number</label>
              <input
                type="number"
                id="phoneNumber_field"
                className="form-control"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      src={avatarPreview}
                      className="edit-avatar-preview"
                      alt="Avatar Preview"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="avatarupdate"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <label className="custom-file-label" htmlFor="avatarupdate">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="update-btn btn-block"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProfile;
