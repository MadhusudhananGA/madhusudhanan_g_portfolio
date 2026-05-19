"use client";

export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Zoho CRM iOS – White Label Architecture",
      description:
        "Implemented a scalable white-label iOS architecture to generate multiple customer-branded applications from a single codebase with automated configuration and asset replacement.",
      tech: ["Swift", "UIKit", "Shell Script", "Clean Architecture"],
    },
    {
      title: "Offline Records Listing",
      description:
        "Developed an offline sync handling feature to manage unsynced records caused by network issues or validation errors, improving reliability and user experience.",
      tech: ["Swift", "SQLite", "API Integration"],
    },
    {
      title: "Zoho CRM Sign-In & Launch UI",
      description:
        "Designed and developed modern launch screen and sign-in interfaces along with animated progress screens for initial data sync.",
      tech: ["SwiftUI", "UIKit", "Animations"],
    },
    {
      title: "Dynamic Customization via JavaScript",
      description:
        "Enabled customizable detail page behavior using customer-defined JavaScript support across record pages and workflows.",
      tech: ["JavaScript", "iOS", "Client Scripts"],
    },
  ];

  const skills = [
    "Swift",
    "SwiftUI",
    "UIKit",
    "Objective-C",
    "Kotlin Multiplatform",
    "SQLite",
    "REST APIs",
    "VIPER Architecture",
    "Shell Scripting",
    "Java",
    "Git",
    "CocoaPods",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-400 text-lg mb-4">iOS Developer</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Madhusudhanan G
            </h1>
            <p className="text-gray-300 mt-6 text-lg leading-8 max-w-2xl">
              Passionate iOS Developer with 3+ years of experience building scalable
              mobile applications using Swift, SwiftUI, UIKit, and modern iOS
              architectures. Experienced in performance optimization, offline
              support, API integration, and customer-focused product development.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="mailto:madhusudhanan.ga@gmail.com"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-[40px] bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center text-7xl font-bold">
              MG
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>

          <div className="space-y-10">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Zoho Corporation</h3>
                  <p className="text-blue-400 mt-1">Member Technical Staff – iOS Developer</p>
                </div>
                <p className="text-gray-400">Jun 2023 – Present</p>
              </div>

              <ul className="mt-6 space-y-4 text-gray-300 leading-7 list-disc pl-5">
                <li>
                  Developed white-label architecture support for Zoho CRM iOS to generate
                  multiple customer-branded apps from a single codebase.
                </li>
                <li>
                  Built offline sync handling systems for unsynced records caused by
                  network or validation issues.
                </li>
                <li>
                  Implemented role-based permission support for team modules.
                </li>
                <li>
                  Supported dynamic customization using customer-defined JavaScript.
                </li>
                <li>
                  Designed launch screen and sign-in UI with animated progress flows.
                </li>
                <li>
                  Resolved 40+ production bugs to improve application stability and
                  performance.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Zoho Corporation</h3>
                  <p className="text-blue-400 mt-1">Project Trainee – iOS Developer</p>
                </div>
                <p className="text-gray-400">Jul 2022 – Jun 2023</p>
              </div>

              <ul className="mt-6 space-y-4 text-gray-300 leading-7 list-disc pl-5">
                <li>
                  Worked on Kotlin Multiplatform migration for shared business logic.
                </li>
                <li>
                  Contributed to reusable feature handling across multiple platforms.
                </li>
                <li>
                  Built internal applications and handled API integration workflows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-16 py-20 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 leading-7">{project.description}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-sm px-4 py-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 md:px-16 py-20 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Education</h2>

          <div className="bg-black border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold">
              Bannari Amman Institute of Technology
            </h3>
            <p className="text-blue-400 mt-2">
              Bachelor of Technology – Information Technology
            </p>
            <p className="text-gray-400 mt-2">2019 – 2023</p>
            <p className="text-gray-300 mt-4">CGPA: 9.2</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold">Madhusudhanan G</h3>
            <p className="text-gray-400 mt-3 max-w-xl leading-7">
              iOS Developer passionate about building scalable, performant,
              and user-focused mobile applications.
            </p>
          </div>

          <div className="space-y-2 text-gray-300">
            <p>Email: madhusudhanan.ga@gmail.com</p>
            <p>Phone: +91 9361397182</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
