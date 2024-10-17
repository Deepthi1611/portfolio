import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
// import myLogo from '../assets/myLogo.png';

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
    <polygon fill="#616161" points="41,6 9.929,42 6.215,42 37.287,6"></polygon><polygon fill="#fff" fillRule="evenodd" points="31.143,41 7.82,7 16.777,7 40.1,41" clipRule="evenodd"></polygon><path fill="#616161" d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>
    </svg>
  );
  

const Footer = () => {
  return (
    <footer className="bg-[#060816] text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left: Your Name */}
        <div className="text-left mb-4 sm:mb-0">
          <p className='text-[#F7CB16] text-[20px] font-bold cursor-pointer flex items-center'>
            {/* <img src={myLogo} alt="logo" className='w-10 h-10 object-contain mt-[-7px]' /> */}
            <span className='ml-2' style={{ fontFamily: 'cursive, sans-serif' }}>Deepthi Purijala</span>
          </p>
        </div>

        {/* Center: Copyright Symbol and Name */}
        <div className="text-center opacity-50 mb-4 sm:mb-0">
          <span>&copy; {new Date().getFullYear()} Deepthi Purijala All rights reserved</span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/deepthi-purijala/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white border-opacity-20 hover:border-[#443CC5] transition-all duration-300"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>
          <a
            href="https://github.com/Deepthi1611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white border-opacity-20 hover:border-[#443CC5] transition-all duration-300"
          >
            <FaGithub className="text-white text-2xl" />
          </a>
          <a
            href="mailto:deepthipurijala@gmail.com"
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white border-opacity-20 hover:border-[#443CC5] transition-all duration-300"
          >
            <FaEnvelope className="text-white text-2xl" />
          </a>
          <a
              href="https://x.com/Deepthi1611" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white border-opacity-20 hover:border-[#443CC5] transition-all duration-300"
            >
              <TwitterIcon />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
