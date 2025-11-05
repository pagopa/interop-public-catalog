type SpinnerProps = {
  label: string;
};

export const Spinner = ({ label }: SpinnerProps) => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
        <div className="progress-spinner progress-spinner-active size-lg mb-2">
          <span className="visually-hidden">{label}</span>
        </div>
        <strong>{label}</strong>
      </div>
    </div>
  );
};
