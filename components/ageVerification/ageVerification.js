import Head from "next/head";
import AgeModal from "./AgeModal";

import { useState, useEffect } from "react";
const AgeVerification = ({ children }) => {
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    const isAgeVerified = localStorage.getItem("ageVerified") === "true";
    setAgeVerified(isAgeVerified); // Set the state based on local storage
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true"); // Store the confirmation
    setAgeVerified(true); // Update the state to hide the modal
  };

  const handleReject = () => {
    localStorage.removeItem("ageVerified"); // Clear local storage
    window.location.href = "https://www.google.com"; // Redirect if not verified
  };

  // If age is not verified, show the modal
  if (!ageVerified) {
    return (
      <>
        {/* <Head>
          <title>Wonky Lab</title>
          <meta
            name="description"
            content="Discover The Wonky Labrador, a cozy bar in Sheffield offering a unique craft beer experience. Join us for a relaxing atmosphere, knowledgeable bartenders, and a variety of beers from the best UK breweries. Perfect for beer aficionados and casual drinkers alike."
          />
          <meta
            name="keywords"
            content="The Wonky Labrador, craft beer Sheffield, cozy bar, unique drinking experience, Sheffield bar, UK breweries, craft beer, local bar, beer tasting, Sheffield nightlife, bar with character, Sheffield pubs, beer lovers, artisan beer"
          />
        </Head> */}
        <AgeModal onConfirm={handleConfirm} onReject={handleReject} />
      </>
    );
  }

  return children; // If age is verified, render the children (page content)
};

export default AgeVerification;
