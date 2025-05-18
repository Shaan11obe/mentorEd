import { RevealOnScroll } from "../RevealOnScroll";
import { FaAtom } from "react-icons/fa";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/** This is React Jobs **/}{" "}
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-green-100/30 hover:shadow-[0_2px_8px_rgba(59, 246, 130, 0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2"> React Jobs </h3>
              <p className="text-gray-400">
                Strong scalable website with flashing modern and minimalistic ui
                designs. Supported by backend web server to fetch data
              </p>
              <div className=" flex flex-wrap gap-2 pt-4">
                {["React", "Nodejs", "TailwindCSS", "Server"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-green-400/80 text-gray-100 py-1 px-3 rounded-full  text-sm hover:bg-green-300/20
                                    hover:shadow-[0_2px_8px_rgba(59, 246, 130, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-lg text-green-300 hover:text-green-100/50 transition-colors my-4"
                >
                  {" "}
                  Visit {/**<FaAtom SIZE={38}/>**/}{" "}
                </a>
              </div>
            </div>
            {/** This is Brainwave **/}{" "}
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-green-100/30 hover:shadow-[0_2px_8px_rgba(59, 246, 130, 0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2"> Brainwave </h3>
              <p className="text-gray-400">
                Strong scalable website with flashing modern and minimalistic ui
                designs. Supported by backend web server to fetch data
              </p>
              <div className=" flex flex-wrap gap-2 pt-4">
                {["React", "Nodejs", "TailwindCSS", ".Git"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-400/80 text-gray-100 py-1 px-3 rounded-full  text-sm hover:bg-green-300/20
                                    hover:shadow-[0_2px_8px_rgba(59, 246, 130, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-lg text-green-300 hover:text-green-100/50 transition-colors my-4"
                >
                  {" "}
                  Visit {/**<FaAtom SIZE={38}/>**/}{" "}
                </a>
              </div>
            </div>
            {/** This is Oberoi Tutoring **/}{" "}
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-green-100/30 hover:shadow-[0_2px_8px_rgba(59, 246, 130, 0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2"> Oberoi Tutoring </h3>
              <p className="text-gray-400">
                Strong scalable website with flashing modern and minimalistic ui
                designs. Supported by backend web server to fetch data
              </p>
              <div className=" flex flex-wrap gap-2 pt-4">
                {["React", "Nodejs", "TailwindCSS", "HTML"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-400/80 text-gray-100 py-1 px-3 rounded-full  text-sm hover:bg-green-300/20
                                    hover:shadow-[0_2px_8px_rgba(59, 246, 130, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-lg text-green-300 hover:text-green-100/50 transition-colors my-4"
                >
                  {" "}
                  Visit {/**<FaAtom SIZE={38}/>**/}{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
