import React, { useState, useEffect } from "react";
import "../Component/Home.css";

const roles = ["Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Educator"];

function TypingBadge() {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // Typing speed
  const [isRoleFinished, setIsRoleFinished] = useState(false); // Track when role typing is finished

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = roles[roleIndex];

      if (isDeleting) {
        // Handle deleting effect
        setCurrentRole(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        // Handle typing effect
        setCurrentRole(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      // Adjust speed and handle role cycling
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        setSpeed(100);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length); // Move to the next role
        setSpeed(150);
        setIsRoleFinished(true); // Mark role as finished
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles, speed]);

  useEffect(() => {
    if (isRoleFinished) {
      // Clear current role after finishing typing and deletion, before moving to next role
      setCurrentRole(""); 
      setIsRoleFinished(false);
    }
  }, [isRoleFinished]);

  return (
    <div className="badge-container">
      <span className="badge">{currentRole}</span>
    </div>
  );
}

export default TypingBadge;
