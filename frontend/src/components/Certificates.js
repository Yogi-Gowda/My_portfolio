import React, { useState } from 'react';
import './Certificates.css';
import pythonDataanalysis from './pythondataanalysis.jpg';
import softwareJob from './softwarejob.jpg';
import tabLue from './tablue.jpg';
import softwareTesting from './softwaretesting.jpg';
import imageGeneration  from './imagegeneration.jpg';
import niSm from './nism.jpg';

const CertificationsPage = () => {
  // State to manage modal visibility and selected certificate
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      id: 1,
      title: 'Python for Data Analysis',
      image: pythonDataanalysis,
      link: 'https://olympus.mygreatlearning.com/courses/47906/certificate?pb_id=581',
    },
    {
      id: 2,
      title: 'Software Engineering Job Simulation',
      image: softwareJob,
      link: 'https://www.eee.com',
    },
    {
      id: 3,
      title: 'Introduction to Tableau',
      image: tabLue,
      link: '#',
    },
    {
      id: 4,
      title: 'Software Testing Tutorial',
      image: softwareTesting,
      link: '#',
    },
    {
      id: 5,
      title: 'Introduction to image generation',
      image: imageGeneration,
      link: '#',
    },
    {
      id: 6,
      title: 'SEBI invester examination',
      image: niSm,
      link: '#',
    },
  ];

  // Function to open the modal with the selected image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="certifications-page">
      {/* Certifications Section */}
      <main className="certifications-container">
        <h2 className="certifications-title">My Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <div className="certification-card" key={certification.id}>
              <img
                src={certification.image}
                alt={certification.title}
                className="certificate-image"
              />
              <h3 className="certificate-title">{certification.title}</h3>
              <button
                onClick={() => openModal(certification.image)} // Open modal with the selected image
                className="view-button"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Section */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificate" className="modal-image" />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsPage;
