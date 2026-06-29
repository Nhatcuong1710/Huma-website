export default function TechnicalRecruitmentConsultant() {
  return (
    <main className="container py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">
        Technical Recruitment Consultant
      </h1>

      <p className="mb-8 text-gray-600">
        Ho Chi Minh City • Full-time
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Job Description
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Manage end-to-end recruitment.</li>
        <li>Source IT candidates.</li>
        <li>Coordinate interviews.</li>
        <li>Maintain relationships with clients.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Requirements
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>1+ year recruitment experience.</li>
        <li>Good communication skills.</li>
        <li>English is a plus.</li>
      </ul>

    <form
  action="https://formspree.io/f/xzdlvdyq"
  method="POST"
  encType="multipart/form-data"
  className="mt-10 space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Full Name"
    required
    className="w-full border rounded-lg p-3"
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    className="w-full border rounded-lg p-3"
  />

  <input
    type="text"
    name="position"
    defaultValue="Technical Recruitment Consultant"
    readOnly
    className="w-full border rounded-lg p-3 bg-gray-100"
  />

  <input
    type="file"
    name="cv"
    accept=".pdf,.doc,.docx"
    required
    className="w-full"
  />

  <button
    type="submit"
    className="rounded-lg bg-blue-600 px-6 py-3 text-white"
  >
    Apply Now
  </button>
</form>