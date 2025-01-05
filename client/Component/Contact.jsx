import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, like sending the data to an API
    console.log('Form Data Submitted: ', formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card-contact p-4 shadow" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', border: '1px solid rgb(233, 235, 237)' }}>
        <h1 className="h4 mb-3">Please Leave Me a Message</h1>
        <p className="mb-3">Contact me for Software Development, Web Development, and other inquiries</p>

        <p className="mb-3">
          You can also reach me at:
          <br />
          <strong>Email:</strong> angelo.tiquio@outlook.com
          <br />
          <strong>Phone:</strong> +1 (437)239-8553
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name*</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name*</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email*</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message*</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-contact btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
