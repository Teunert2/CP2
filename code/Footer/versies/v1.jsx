import { storyblokEditable } from "@storyblok/react/rsc";

const Footer = ({ blok }) => (
  <div className="bg-gray-100 py-1 px-4" {...storyblokEditable(blok)}>
    {/* Main Content */}
    <div className="flex justify-between items-start w-full max-w-[1200px] mx-auto">
      {/* Links Section */}
      <div className="w-[322px]">
        <ul className="space-y-4 text-left">
          <li>
            <a href="#" className="hover:text-orange-500">
              Nieuws
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Interviews
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Artikels
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Evenementen
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Webinars
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Vacatures
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Team
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Over
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Nieuwsbrief
            </a>
          </li>
        </ul>

        {/* Divider */}
        <div className="h-[1px] bg-gray-300 w-full mt-[35px]" />

        {/* Logo */}
        <div className="mt-6 flex justify-start">
          <img
            src={blok.logo.filename}
            alt="AIM TODAY"
            className="h-auto max-w-[140px]"
          />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-[430px] flex flex-col items-start mt-0">
        <p className="text-lg font-medium text-gray-700 mb-4">
          Meld je aan voor de nieuwsbrief
        </p>
        <div className="flex w-full mb-6">
          <input
            type="email"
            placeholder="email@gmail.com"
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 focus:outline-none">
            ⟶
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6 justify-end w-auto">
        {[
          "instagram_icon",
          "facebook_icon",
          "youtube_icon",
          "linkedin_icon",
          "x_icon",
        ].map((icon, i) => (
          <img
            key={i}
            src={blok[icon].filename}
            alt={blok[icon].alt || icon}
            className="h-8 w-8"
          />
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
