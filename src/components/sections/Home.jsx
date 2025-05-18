import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex  items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent leading-right">
            {" "}
            Welcome to MentorEd{" "}
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Odio curabitur
            venenatis ridiculus odio tortor malesuada aenean lacinia. Viverra
            sollicitudin tellus imperdiet cursus elementum. Neque gravida
            mauris; pulvinar quam sollicitudin eu libero.
          </p>

          <div className="flex justify-center pt-6 space-x-4">
            <a
              href="#projects"
              className="bg-green-500 text-white py-3 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5  hover:shadow-[0_0_15_rgba(59,246,130,0.4)]"
            >
              View Plans
            </a>
            <a
              href="#contact"
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5  hover:shadow-[0_0_15_rgba(59,246,130,0.2)] hover:bg-green-500/10 "
            >
              Contact Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
