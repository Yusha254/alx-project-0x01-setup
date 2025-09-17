import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Daily Contents. All rights reserved.
        </p>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:underline">
            <Link href="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
