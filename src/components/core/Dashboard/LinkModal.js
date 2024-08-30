import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { addLink, getLink, updateLink } from '../../../services/operations/authAPi';
import { useSelector } from 'react-redux';
const LinkModal = ({ token, onClose, currentLink, onUpdate }) => {

  const [link, setLink] = useState(currentLink || "");
  const isUpdating = !!currentLink;

  const handleAddOrUpdate = async () => {
    const formData = { link };

    if (isUpdating) {
      await updateLink(token, formData);
      onUpdate(formData.link);
    } else {
      await addLink(token, formData);
      onUpdate(formData.link);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">{isUpdating ? "Update Link" : "Add Link"}</h2>
        <input
          type="text"
          placeholder="Paste or type your link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddOrUpdate}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isUpdating ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

const LinkButton = () => {
    const {token} = useSelector(state => state.auth)
  const [isModalOpen, setIsModalOpen] = useState(false);
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


  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (newLink) => {
    setLink(newLink);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {link ? "Update Link" : "Add Link"}
      </button>

      {link && (
        <div className="mt-4">
          <span>Current Link: </span>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {link}
          </a>
        </div>
      )}

      {isModalOpen && (
        <LinkModal
          token={token}
          onClose={handleClose}
          currentLink={link}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default LinkButton;
