import { motion } from "framer-motion";

function SocialIcon({ href, icon, label, color }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-2 bg-white dark:bg-gray-800 rounded-full shadow"

            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* ICON */}
            <div className={`w-6 h-6 ${color}`}>
                {icon}
            </div>

            {/* TOOLTIP */}
            <span
                className="absolute bottom-12 left-1/2 -translate-x-1/2
                bg-black/80 backdrop-blur text-white text-xs px-2 py-1 rounded
                opacity-0 group-hover:opacity-100 group-hover:-translate-y-1
                transition-all duration-300"
            >
                {label}
            </span>
        </motion.a>
    );
}

export default SocialIcon;