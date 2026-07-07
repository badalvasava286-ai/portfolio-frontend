export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Custom Applications",
      date: "2026 - Present",
      details: "Engineered a custom overtime and attendance tracking application. Designed functional search-enabled features and established seamless bidirectional syncing between AppSheet and Google Sheets.",
    },
    {
      role: "Operations & Data Management",
      company: "Mother Hub",
      date: "2026",
      details: "Managed a digital employee roster and attendance tracker. Executed SQL-style query logic to resolve errors involving shift timings, employee IDs, and transport status across operational units.",
    },
    {
      role: "Warehouse Operations",
      company: "Zomato",
      date: "2026",
      details: "Selected for work slots and managed onboarding for warehouse billing operations within the Surat region facilities.",
    }
  ];

  return (
    <section className="py-24 p-10 md:p-24 bg-neutral-950 text-white">
      <h2 className="text-4xl font-bold mb-16 border-b border-neutral-800 pb-4">Career Trajectory</h2>
      <div className="max-w-4xl mx-auto border-l-2 border-blue-600 pl-8 space-y-12 relative">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-black border-4 border-blue-600 group-hover:scale-125 transition duration-300"></span>
            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
            <div className="text-blue-400 font-semibold mb-2">{exp.company} <span className="text-gray-500 ml-2 text-sm">{exp.date}</span></div>
            <p className="text-gray-400 leading-relaxed">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}