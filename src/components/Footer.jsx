function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 
    text-gray-600 dark:text-gray-300 
    py-4 border-t border-gray-200 dark:border-gray-700">
      
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Kelompok 4 Teknologi Informasi UB. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;