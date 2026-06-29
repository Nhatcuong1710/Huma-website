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

      <a
        href="mailto:hr@huma.vn"
        className="inline-block mt-10 rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        Apply Now
      </a>
    </main>
  );
}