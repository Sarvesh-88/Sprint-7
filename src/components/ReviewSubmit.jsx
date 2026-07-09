export default function ReviewSubmit({
  formData,
  prevStep,
  handleSubmit,
}) {
  return (
    <div>
      <h2>Step 3: Review</h2>

      <p>
        <strong>First Name:</strong> {formData.firstName}
      </p>

      <p>
        <strong>Last Name:</strong> {formData.lastName}
      </p>

      <p>
        <strong>Email:</strong> {formData.email}
      </p>

      <p>
        <strong>Username:</strong> {formData.username}
      </p>

      <button onClick={prevStep}>Back</button>

      <button
        onClick={handleSubmit}
        style={{ marginLeft: "10px" }}
      >
        Submit
      </button>
    </div>
  );
}