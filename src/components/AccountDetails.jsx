export default function AccountDetails({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div>
      <h2>Step 2: Account Details</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={prevStep}>Back</button>

      <button onClick={nextStep} style={{ marginLeft: "10px" }}>
        Next
      </button>
    </div>
  );
}