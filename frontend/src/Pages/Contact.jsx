import { motion } from "framer-motion";
import { FaHeadset } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions? Our team is ready to help you with any inquiries
              about our products or services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring" }}
              viewport={{ once: true }}
              className="space-y-6">
              <div className="flex items-start">
                <div className="text-yellow-400 mr-4 mt-1">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Our Location</h3>
                  <p className="text-gray-400">
                    Gulshan e Iqbal block-15A, Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-yellow-400 mr-4 mt-1">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">Mon-Fri: 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-yellow-400 mr-4 mt-1">
                  <FiMail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email</h3>
                  <p className="text-gray-400">support@xdshop.com</p>
                  <p className="text-gray-400">24/7 Support</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <RiCustomerService2Fill className="text-yellow-400 mr-2" />
                  Live Support
                </h3>
                <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center mx-auto">
                  <FaHeadset className="mr-2" /> Chat Now
                </button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring" }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                Send Us a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors w-full">
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="h-96 w-full bg-gray-900 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-122.18049798899856!3d37.40247298383319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1689872345678!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-80 hover:opacity-100 transition-opacity"></iframe>
      </div>
    </>
  );
};

export default Contact;
