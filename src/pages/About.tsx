
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="px-4 md:px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="bg-positivus-green px-4 py-2 mb-2 inline-block w-fit text-lg font-semibold">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're a digital marketing agency
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-lg mb-4">
                At Positivus, we believe in the power of digital marketing to transform businesses and drive growth. Our team of experts is dedicated to helping companies navigate the complex digital landscape and achieve their goals.
              </p>
              <p className="text-lg mb-4">
                Founded in 2015, we've worked with businesses of all sizes across various industries. Our data-driven approach ensures that we deliver measurable results and ROI for our clients.
              </p>
            </div>
            <div>
              <p className="text-lg mb-4">
                We specialize in SEO, PPC advertising, social media marketing, content creation, and web development. Our holistic approach means that we consider all aspects of your online presence to create comprehensive strategies that work.
              </p>
              <p className="text-lg">
                What sets us apart is our commitment to transparency, collaboration, and continuous improvement. We don't just work for our clients; we work with them as partners in their success.
              </p>
            </div>
          </div>
          
          <div className="bg-positivus-lightGray p-8 rounded-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-center max-w-3xl mx-auto">
              To empower businesses with innovative digital marketing solutions that drive growth, enhance visibility, and create meaningful connections with their audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-black rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p>We're committed to delivering work of the highest quality and continuously improving our skills and processes.</p>
            </div>
            <div className="border border-black rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p>We work closely with our clients, valuing their input and keeping them involved throughout the process.</p>
            </div>
            <div className="border border-black rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p>We stay ahead of industry trends and leverage the latest technologies to provide cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
