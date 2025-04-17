import React from "react";

const Footer = () => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-gray-800 flex justify-between text-gray-400 mt-12">
      <p>&copy; {currentYear} All Rights Reserved.</p>
      <p>Email: 4chimabika@gmail.com</p>
    </footer>
  );
};

export default Footer;
