import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "Angular", "Tailwind CSS", "Svelte"];

  const backendSkills = ["JavaScript", "MongoDB", "Nodejs", "Python", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-16 bg-gradient-to-r from-green-300 to-blue-300 text-center bg-clip-text text-transparent">
            About Us
          </h1>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-6 ">
              Change to content
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" rounded-xl p-6 hover:-translate-y-1 transition-all ">
                <h3 className="text-xl font-bold mb-4">
                  Active Teaching
                </h3>
                <div className=" flex flex-wrap gap-2 ">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-300/85 text-green-50 py-1 px-3 rounded-full  text-sm hover:bg-green-300/20
                                    hover:shadow-[0_2px_8px_rgba(59, 246, 130, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className=" rounded-xl p-6 hover:-translate-y-1 transition-all ">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Passive teaching
                </h3>
                <div className=" flex flex-wrap gap-2 ">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-300/85 text-green-50 py-1 px-3 rounded-full  text-sm hover:bg-green-300/20
                                    hover:shadow-[0_2px_8px_rgba(59, 246, 130, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
                  </div>
          </div> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 "> 🏫 Education </h3>
              <ul>
                <li>
                  {" "}
                  <strong> B.S. in Computer Science </strong> - Harvard
                  University (2022-2028)
                </li>
                <br />
                <li>
                  {" "}
                  <strong> Relevant Coursework </strong> | Data Structuring,
                  Annoying Didi, Web Development, React and Vitejs
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 "> 🏢 Work experience</h3>
              <div className="space-y-4 text-gray-300">
                <h4 className=" font-semibold">
                  6 years in Senior Web development position - Telstra Ltd Pty
                  (2028-2034){" "}
                </h4>
                <p>
                  {" "}
                  Developed and maintained microservices for cloud based
                  applications.{" "}
                </p>
              </div>
              <div className="space-y-2 pt-4 text-gray-300">
                <h4 className="font-semibold">
                  {" "}
                  Intern at Github studios (2022){" "}
                </h4>
                <p>
                  {" "}
                  Developed interesting and modern ui designs as well as backend
                  integration{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

