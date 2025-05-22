import { motion } from "framer-motion";
import { FaShoppingBag, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">
            About XD Shop
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-2xl mx-auto">
            Premium tech products with unmatched quality and service
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Story</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Founded in 2023, XD Shop began as a passion project for tech
            enthusiasts and has grown into a premier destination for
            cutting-edge electronics and accessories. We curate only the finest
            products to ensure your complete satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaShoppingBag size={40} />,
              title: "10,000+ Products",
              desc: "Wide selection",
            },
            {
              icon: <FaUsers size={40} />,
              title: "500,000+ Customers",
              desc: "Happy clients worldwide",
            },
            {
              icon: <FaAward size={40} />,
              title: "Industry Awards",
              desc: "Recognized excellence",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg text-center hover:shadow-lg hover:shadow-yellow-400/20 transition-all">
              <div className="text-yellow-400 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
            Meet The Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Alex", "Jamie", "Taylor", "Morgan"].map((name, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-gray-400">Tech Specialist</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
