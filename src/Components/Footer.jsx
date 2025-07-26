import { FaFacebookF, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  let Navigate=useNavigate()
  return (
    <footer className="bg-[#1E4D42] w-full text-white">
      <div className="max-w-[1350px] m-auto md:py-15 py-8 px-5 md:px-10">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div>
            <img src={logo} alt="Logo" className="w-28" onClick={()=>{Navigate("/")}} />
            <p className="mt-2">Search your desired jobs.</p>
          </div>
          <div className="flex space-x-4 text-xl mb-4 text-white">
            <FaFacebookF className="cursor-pointer hover:text-gray-300 transition" />
            <FaInstagram className="cursor-pointer hover:text-gray-300 transition" />
            <FaBehance className="cursor-pointer hover:text-gray-300 transition" />
            <FaTwitter className="cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-5 md:flex justify-between gap-6">
          {/* Project */}
          <div>
            <h3 className="font-bold my-2">Project</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-300 transition">Changelog</li>
              <li className="cursor-pointer hover:text-gray-300 transition">Status</li>
              <li className="cursor-pointer hover:text-gray-300 transition">License</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold my-2">Community</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-300 transition">GitHub</li>
              <li className="cursor-pointer hover:text-gray-300 transition">Issues</li>
              <li className="cursor-pointer hover:text-gray-300 transition">Project</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold my-2">Help</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-300 transition">Support</li>
              <li className="cursor-pointer hover:text-gray-300 transition">Troubleshooting</li>
              <li className="cursor-pointer hover:text-gray-300 transition">Contact Us</li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="font-bold my-2">Others</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-300 transition">Terms of Service</li>
              <li className="cursor-pointer hover:text-gray-300 transition">Privacy Policy</li>
              <li className="cursor-pointer hover:text-gray-300 transition">License</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
