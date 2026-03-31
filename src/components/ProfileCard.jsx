import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProfileCard({ name, path, image, nim, prodi }) {
  return (
    <Link to={path}>
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.12 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 cursor-pointer
        hover:shadow-gray-400/50 hover:shadow-xl transition"
      >
        <img
          src={image}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full mb-3 border-4 border-white-500 object-cover object-top"
        />

        {/* Nama */}
        <h2 className="mt-2 text-lg font-semibold text-center dark:text-white">
          {name}
        </h2>

        {/* NIM */}
        <p className="text-2xs text-gray-400 text-center">
          {nim}
        </p>

        {/* Prodi */}
        <p className="text-gray-400 text-sm mt-2 text-center">
          {prodi}
        </p>
      </motion.div>
    </Link>
  );
}

export default ProfileCard;