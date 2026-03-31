import ProfileCard from "../components/ProfileCard";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="pt-28 md:pt-20 min-h-screen bg-gray-200 dark:bg-gray-900 p-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          src="ub-logo.png"
          alt="Logo UB"
          className="w-32 h-32 mx-auto mb-4"
        />

        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide dark:text-white">
          Anggota Kelompok
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg mt-2">
          Tugas Pemrograman Web - Kelompok 4 - T2E
        </p>
      </motion.div>

      {/* LIST PROFILE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        <ProfileCard
          name="Miftakhul Dzakirah Asma'"
          nim="253140707111046"
          prodi="Teknologi Informasi"
          path="/miftakhul-dzakirah-asma"
          image="/mifta.jpg"
        />

        <ProfileCard
          name="Oribel Renata Geraldine'"
          nim="253140707111024"
          prodi="Teknologi Informasi"
          path="/oribel-renata-geraldine"
          image="/oribel.jpeg"
        />

        <ProfileCard
          name="Retno Ayu Agustina Utari"
          nim="253140707111028"
          prodi="Teknologi Informasi"
          path="/retno-ayu-agustina-utari"
          image="/retno.jpeg"
        />

      </div>
    </div>
  );
}

export default Home;