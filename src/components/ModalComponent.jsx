import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './ModalComponent.css'; 
import { celebration } from '../assets/index'; // Import your GIF

const ModalComponent = ({ isOpen, onClose, isSuccess }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open'); // Add class to body
    } else {
      document.body.classList.remove('modal-open'); // Remove class from body
    }
    
    // Clean up on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* {isSuccess && <img src={celebration} alt="Celebration" className="celebration-gif" />} */}
        <div className="modal-body">
          {isSuccess ? (
            <div>
              <h2 className="success-message">Email sent successfully!</h2>
              <p>Thank you. I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <div>
              <h2 className="error-message">Ahh, something went wrong!</h2>
              <p>Please try again later.</p>
            </div>
          )}
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default ModalComponent;
