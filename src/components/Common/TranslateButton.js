import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getLink } from '../../services/operations/authAPi'; // Adjust import path if necessary

const LinkButton = () => {
  const [link, setLink] = useState(null);

  useEffect(() => {
    const fetchLink = async () => {
      const fetchedLink = await getLink();
      if (fetchedLink) {
        setLink(fetchedLink);
      }
    };
    fetchLink();
  }, []);

  const handleTranslate = () => {
    if (link) {
      window.location.href = link; // Navigate to the link
    }
  };

  return (
    <div>
      <button
        onClick={handleTranslate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={!link} // Disable button if no link is available
      >
        Translate
      </button>
    </div>
  );
};

export default LinkButton;
