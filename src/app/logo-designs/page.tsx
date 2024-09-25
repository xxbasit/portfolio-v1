import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

const LogoDesign = () => {
  return (
    <div className="flex flex-col gap-20 px-8 bg-gradient-to-br from-gray-900 to-gray-800 pt-8 pb-4 md:px-24 md:py-12 w-screen min-h-screen h-max">
      <Navbar page="logo" />
      <div className="min-h-screen w-full">
        <Portfolio />
      </div>
      <Footer page="logo" />
    </div>
  );
};

export default LogoDesign;

// const PortfolioSection = ({
//   title,
//   icon,
//   children,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   children: React.ReactNode;
// }) => (
//   <div className="mb-8">
//     <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//       {icon}
//       <span className="ml-2">{title}</span>
//     </h2>
//     {children}
//   </div>
// );

// const Portfolio = () => {
//   return (
//     <div className="min-h-screen w-full bg-gray-100">
//       <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
//         <div className="bg-gray-800 text-white py-8 px-6">
//           <h1 className="text-4xl font-bold">
//             Software Development and Delivery Manager
//           </h1>
//         </div>

//         <div className="p-6">
//           <PortfolioSection
//             title="Summary"
//             icon={<Briefcase className="w-6 h-6" />}
//           >
//             <p className="text-gray-700">
//               Results-oriented software development and delivery manager with
//               over two years of experience in design, development, quality
//               assurance, management and implementation of software projects.
//               Proven track record of leading cross-functional teams, managing
//               complex projects from initiation through delivery, and
//               implementing agile methodologies to drive high-quality outcomes.
//               Adept at balancing technical and managerial responsibilities,
//               ensuring projects meet scope, time, and budget constraints while
//               aligning with business objectives.
//             </p>
//           </PortfolioSection>

//           <PortfolioSection
//             title="Education"
//             icon={<GraduationCap className="w-6 h-6" />}
//           >
//             <p className="text-gray-700">
//               <span className="font-semibold">Institute: </span>
//               National University of Technology, Islamabad
//               <br />
//               <span className="font-semibold ">Discipline:</span> BS Computer
//               Engineering
//               <br />
//               <span className="font-semibold ">Year:</span> 2018 - 2022
//             </p>
//           </PortfolioSection>

//           <PortfolioSection
//             title="Certifications"
//             icon={<Award className="w-6 h-6" />}
//           >
//             <ul className="list-disc list-inside text-gray-700">
//               <li>
//                 Certified Scrum Master (CSM from Scrum Alliance) [Expected to
//                 appear in exam soon]
//               </li>
//               <li>Google Project Management from Coursera</li>
//               <li>Scrum Master Certification from Coursera</li>
//               <li>Agile with Atlassian Jira from Coursera</li>
//               <li>Automate tasks and processes with Jira from Coursera</li>
//             </ul>
//           </PortfolioSection>

//           <PortfolioSection title="Skills" icon={<Code className="w-6 h-6" />}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h3 className="font-semibold mb-2 text-black">
//                   Project Management
//                 </h3>
//                 <p className="text-gray-700">
//                   Project planning, Resource allocation, Daily stand-ups, Sprint
//                   planning and Backlog management, Sprint reviews and
//                   retrospective, Budget management, Stakeholder management,
//                   Project reporting and roadmaps.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2 text-black">
//                   Technical Expertise
//                 </h3>
//                 <p className="text-gray-700">
//                   Software Development Lifecycle (SDLC), Requirements Analysis,
//                   Technical Documentation, Quality Assurance and Testing (SQA),
//                   WordPress, Elementor, React, Python, Flutter, DevOps.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2 text-black">
//                   Tools and Technologies
//                 </h3>
//                 <p className="text-gray-700">
//                   Waterfall, Agile/Scrum methodologies, Kanban, Scrum ban, Jira,
//                   ClickUp, MS Project, Azure and Visio, Google Smart Sheet,
//                   Notion, Figma, Postman, G Suite, MS Office, Monday.com,
//                   Clockify, Version Control (Git, Github and Bitbucket), Swagger
//                   UI, MS Teams, Slack.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2 text-black">
//                   Strategic and Performance Management
//                 </h3>
//                 <p className="text-gray-700">
//                   Digital transformation, Change, Stakeholder and People
//                   Management, Communication, Data-Driven decision, Key
//                   Performance Indicators (KPIs), Customer-Centric Approach,
//                   Project sustainability, Project automation.
//                 </p>
//               </div>
//             </div>
//           </PortfolioSection>
//         </div>
//       </div>
//     </div>
//   );
// };

const SkillTag = ({ children }) => (
  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-sm mr-2 mb-2 inline-block">
    {children}
  </span>
);

const SectionCard = ({ title, icon, children }) => (
  <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
    <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    {children}
  </section>
);

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white p-4 sm:p-8">
      <div className="w-full mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Software Development and Delivery Manager
          </h1>
        </header>

        <SectionCard title="Summary" icon={<Briefcase className="w-6 h-6" />}>
          <p className="text-gray-300">
            Results-oriented software development and delivery manager with over
            two years of experience in design, development, quality assurance,
            management and implementation of software projects. Proven track
            record of leading cross-functional teams, managing complex projects
            from initiation through delivery, and implementing agile
            methodologies to drive high-quality outcomes. Adept at balancing
            technical and managerial responsibilities, ensuring projects meet
            scope, time, and budget constraints while aligning with business
            objectives.
          </p>
        </SectionCard>

        <SectionCard
          title="Education"
          icon={<GraduationCap className="w-6 h-6" />}
        >
          <p className="text-gray-300">
            <strong>Institute:</strong> National University of Technology,
            Islamabad
            <br />
            <strong>Discipline:</strong> BS Computer Engineering
            <br />
            <strong>Year:</strong> 2018 - 2022
          </p>
        </SectionCard>

        <SectionCard
          title="Certifications"
          icon={<Award className="w-6 h-6" />}
        >
          <ul className="list-disc list-inside text-gray-300">
            <li>
              Certified Scrum Master (CSM from Scrum Alliance) [Expected to
              appear in exam soon]
            </li>
            <li>Google Project Management from Coursera</li>
            <li>Scrum Master Certification from Coursera</li>
            <li>Agile with Atlassian Jira from Coursera</li>
            <li>Automate tasks and processes with Jira from Coursera</li>
          </ul>
        </SectionCard>

        <SectionCard title="Skills" icon={<Code className="w-6 h-6" />}>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Project Management
              </h3>
              <div>
                {[
                  "Project planning",
                  "Resource allocation",
                  "Daily stand-ups",
                  "Sprint planning",
                  "Backlog management",
                  "Sprint reviews",
                  "Budget management",
                  "Stakeholder management",
                  "Project reporting",
                ].map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Technical Expertise
              </h3>
              <div>
                {[
                  "SDLC",
                  "Requirements Analysis",
                  "Technical Documentation",
                  "SQA",
                  "WordPress",
                  "Elementor",
                  "React",
                  "Python",
                  "Flutter",
                  "DevOps",
                ].map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Tools and Technologies
              </h3>
              <div>
                {[
                  "Waterfall",
                  "Agile",
                  "Scrum",
                  "Kanban",
                  "Jira",
                  "ClickUp",
                  "MS Project",
                  "Azure",
                  "Visio",
                  "Notion",
                  "Figma",
                  "Postman",
                  "Git",
                  "GitHub",
                  "Bitbucket",
                  "Swagger UI",
                  "MS Teams",
                  "Slack",
                ].map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Strategic and Performance Management
              </h3>
              <div>
                {[
                  "Digital transformation",
                  "Change Management",
                  "Stakeholder Management",
                  "People Management",
                  "Data-Driven decision",
                  "KPIs",
                  "Customer-Centric Approach",
                  "Project sustainability",
                  "Project automation",
                ].map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};
