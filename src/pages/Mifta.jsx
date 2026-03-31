import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SocialIcon from "../components/SocialIcon";

function Mifta() {
    return (
        <div className="pt-28 md:pt-20 min-h-screen flex items-center justify-center  bg-gray-200 dark:bg-gray-900 p-6">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-lg bg-white/70 dark:bg-white/10 rounded-2xl shadow-xl p-6 max-w-md w-full text-center"
            >

                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src="/mifta.jpg"
                    alt="Profile"
                    className="w-32 h-32 mx-auto rounded-full border-4 border-white-500 mb-4 object-cover object-top"
                />

                <h1 className="text-2xl font-bold dark:text-white">
                    Miftakhul Dzakirah Asma'
                </h1>

                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    20 Mei 2007 | Malang
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Teknologi Informasi | T2E
                </p>

                <p className="text-sm mt-4 text-gray-700 dark:text-gray-300 text-justify">
                    Saya adalah mahasiswa Universitas Brawijaya Program Studi Teknologi Informasi Fakultas Vokasi yang memiliki minat di bidang frontend development dan UI/UX design. Saya fokus mengembangkan antarmuka web yang interaktif, responsif, dan user-friendly menggunakan React, serta menggabungkannya dengan backend menggunakan Laravel. Saya juga memiliki pengalaman dalam mengembangkan berbagai project, seperti website dan aplikasi berbasis game di Unity, yang membantu saya memahami pentingnya desain dan pengalaman pengguna dalam sebuah produk digital.
                </p>

                <div className="flex justify-center gap-5 mt-5">

                    {/* GITHUB */}
                    <SocialIcon
                        href="https://github.com/miftaa07"
                        label="GitHub"
                        color="hover:brightness-75"
                        icon={
                            <img src="/icon/github.svg" alt="github" />
                        }
                    />

                    {/* INSTAGRAM */}
                    <SocialIcon
                        href=":https://www.instagram.com/miftzas/"
                        label="Instagram"
                        color="hover:brightness-110"
                        icon={
                            <img src="/icon/instagram.svg" alt="instagram" />
                        }
                    />

                    {/* EMAIL */}
                    <SocialIcon
                        href="mailto:miftaasma2007@gmail.com"
                        label="Email"
                        color="hover:brightness-110"
                        icon={<Mail />}
                    />

                    {/* LINKEDIN */}
                    <SocialIcon
                        href="https://www.linkedin.com/in/miftakhul-dzakirah-b12b85253/"
                        label="LinkedIn"
                        color="hover:brightness-110"
                        icon={
                            <img src="/icon/linkedin.svg" alt="linkedin" />
                        }
                    />

                </div>
            </motion.div>
        </div>
    );
}

export default Mifta;
