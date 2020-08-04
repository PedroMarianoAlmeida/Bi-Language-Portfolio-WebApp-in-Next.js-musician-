import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-white d-flex justify-content-center" id='my-footer'>

      <a href="https://www.facebook.com/CaiaoReliquia" target="_blank" className="mx-4 my-1">
        <FontAwesomeIcon icon={faFacebookSquare} className="mx-1 text-secondary" alt="Go to my Facebook page" size="2x" />
      </a>

      <a href="https://www.instagram.com/caioandrademix/" target="_blank" className="mx-4 my-1 ">
        <FontAwesomeIcon icon={faInstagramSquare} className="mx-1 text-secondary" alt="Instagram-logo" size="2x" />
      </a>

      <a href="https://www.youtube.com/channel/UCTGXBtyqOjyV0R78iUAFFhg" target="_blank" className="mx-4 my-1 " >
        <FontAwesomeIcon icon={faYoutubeSquare} className="mx-1 text-secondary" alt="Youtube-logo" size="2x" />
      </a>

      <style jsx>{`
                #my-footer{
                    box-shadow: 0 -10px 10px rgb(212 207 207);
                }
            `}</style>
    </footer>
  );
}

export default Footer;