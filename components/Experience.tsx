export default function Experience() {
  const experiences = [
  {
    role: "HR Helpdesk & Data Systems Specialist",
    company: "Flipkart STV (Mother Hub)",
    date: "Feb 2026 – Present",
    description: "Engineered custom tracking applications using AppSheet with bidirectional Google Sheets sync. Managed digital employee rosters for high-volume units, executing SQL-style logic to resolve shift and transport conflicts."
  },
  {
    role: "System Supervisor",
    company: "Xpressbees Logistics Solution",
    date: "Dec 2024 – Jan 2026",
    description: "Supervised system-level warehouse operations and workflow routing. Monitored real-time operational dashboards to troubleshoot system anomalies and optimize inbound/outbound data accuracy."
  },
  {
    role: "Stock Manager",
    company: "Opus Apperities",
    date: "June 2023 – Nov 2023",
    description: "Directed inventory management protocols, utilizing digital tracking tools to maintain optimal stock levels and reconcile physical inventory with database records."
  },
  {
    role: "Engineering Intern",
    company: "Farmson Solar",
    date: "Feb 2021 – June 2021",
    description: "Assisted in the operational planning and technical documentation of renewable energy projects. Supported on-site operations and data collection to ensure compliance with project specifications."
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
            <p className="text-gray-400 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}