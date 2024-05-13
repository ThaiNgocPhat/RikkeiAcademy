import React, { useState } from "react";

export default function AddStudent({ handleAdd, handleCancel}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();

    let isValid = true;

    // Validate name
    if (formData.name.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Tên không được để trống",
      }));
      isValid = false;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email không đúng định dạng",
      }));
      isValid = false;
    }

    // Validate phone number
    if (!/^\d+$/.test(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Số điện thoại chỉ được phép nhập số",
      }));
      isValid = false;
    }
    if (isValid) {
      handleAdd(formData);
      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmitAdd}>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`input ${errors.name && "input-error"}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className={`input ${errors.email && "input-error"}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address" className="label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="input"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className={`input ${errors.phone && "input-error"}`}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>
        <div className="button-container">
          <button type="submit" className="button">
            Add
          </button>
          <button
            type="button"
            className="button cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
