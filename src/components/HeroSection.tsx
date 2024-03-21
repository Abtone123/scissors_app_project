import React, { useState } from "react";
import { useEffect } from "react";
import { database } from "../firebase/firebase";
import { ref, push, set } from "firebase/database";
import Shortened from "../assets/Shortened_1.png";
import "../App.css";
import NavBar from "./NavBar";
import CollectedData from "./CollectedData";

const HeroSection: React.FC = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This should be replaced with actual authentication logic

  const generateShortUrl = () => {
    return `https://lnk.ly/${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleShortenUrl = async () => {
    if (!isAuthenticated && shortenedUrls.length >= 3) {
      alert("Limit reached. Please log in to shorten more URLs.");
      return;
    }

    const shortenedUrl = generateShortUrl();
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${shortenedUrl}`;
    const newUrlData = { originalUrl: url, shortenedUrl, qrCode, clicks: 0 };

    // Store in Firebase
    const urlsRef = ref(database, "urls");
    const newUrlRef = push(urlsRef);
    set(newUrlRef, newUrlData);

    setShortenedUrls(
      (prevUrls) => [...prevUrls, newUrlData] as typeof shortenedUrls,
    );
    setUrl("");
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  // This is a placeholder function. Implement authentication logic as per your application's requirements.
  const checkAuthentication = () => {
    // Example: setIsAuthenticated(user !== null);
    // For demonstration, let's assume the user is always authenticated
    setIsAuthenticated(true);
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <>
      <NavBar />
      <div className="hero_section_container">
        <div className="shortener">
          <div>
            <img src={Shortened} alt="" />
            <p>
              Linkly is and efficient and easy-to-use URL shortening service
              that streamlines your online experience
            </p>
          </div>
          <div>
            <div className="label">
              <label htmlFor="url_entry">
                <input
                  type="text"
                  name=""
                  placeholder="Enter Link here"
                  id=""
                  onChange={handleUrlChange}
                />
                <button onClick={handleShortenUrl}>Shorten Now!</button>
              </label>
            </div>
            <div className="clipboard_toggle">
              <input type="checkbox" name="" id="toggle_switch" />
              <span>Auto Paste from Clipboard</span>
            </div>
            <p>
              You can create <span>05</span> more links. Register now to enjoy
              unlimited usage
            </p>
          </div>
        </div>
        <div className="history"></div>
      </div>
      <CollectedData />
    </>
  );
};

export default HeroSection;
