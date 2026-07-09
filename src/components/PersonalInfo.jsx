export default function PersonalInfo({
  formData,
  handleChange,
  nextStep,
}) {
  return (
    <div>
      <h2>Step 1: Personal Info</h2>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={nextStep}>Next</button>
    </div>
  );
}