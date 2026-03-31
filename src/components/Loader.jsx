import { motion } from "framer-motion";

function Loader() {
    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center 
    bg-white dark:bg-gray-900">

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >


                {/* SPINNER */}
                <div className="mt-6 flex justify-center gap-2">
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-300"></div>
                </div>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Loading...
                </p>
            </motion.div>
        </div>
    );
}

export default Loader;