import './popup.css';

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>Thank you for contacting me!</h3>
        <p>{message}</p>
        <button className="btn btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
