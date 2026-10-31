import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-linear-to-r from-blue-800 to-indigo-700 text-white py-4 shadow-md">
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div id="header-title" className="text-2xl font-bold">Alexander Mendoza</div>
        <ul className="flex gap-6 md:text-xl">
          <li><Link href="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-200 transition-colors">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
