import React from "react";
import service1 from "/src/assets/webDevImage.jpg";
import service2 from "/src/assets/dataManagement.jpg";
import service3 from "/src/assets/UIUX.png";
import { Link } from "react-router-dom";
import "../src/index.css";

const Services = () => {
  const cards = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Develop beautiful, responsive websites customized to meet your unique needs and goals.",
      image: service1,
    },
    {
      id: 2,
      title: "Database Management",
      description:
        "Build robust databases to manage your data efficiently and ensure smooth operations.",
      image: service2,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Create intuitive, engaging interfaces that captivate users and enhance their experience.",
      image: service3,
    },
  ];

  return (
    <div className="album">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <div className="services-sub-container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cards.map((card) => (
              <div className="col" key={card.id}>
                <div className="card shadow-sm d-flex flex-column h-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <Link
                            to="/contact"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Contact Me
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
