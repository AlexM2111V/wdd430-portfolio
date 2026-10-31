export default function Footer() {  
  return (
    <footer className="bg-linear-to-r from-blue-800 to-indigo-700 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {new Date().getFullYear()} | Alexander Mendoza | All rights reserved</p>
      </div>
    </footer>
  );
}