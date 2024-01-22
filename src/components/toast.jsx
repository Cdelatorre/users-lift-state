const Toast = ({ text }) => {
  return (
    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="me-auto">{text}</strong>
        <small>Right now!</small>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  );
};

export default Toast;
