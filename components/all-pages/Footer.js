const Footer = () => {
  return (
    <footer className="fixed-bottom bg-white d-flex justify-content-center" id='my-footer'>

      <a href="https://www.facebook.com/CaiaoReliquia" target="_blank" className="mx-4 py-2">
        <div className="mx-4" id="facebook" alt='go to my facebook profile'></div>
      </a>

      <a href="https://www.instagram.com/caioandrademix/" target="_blank" className="mx-4 py-2 ">
        <div className="mx-4" id="instagram" alt='go to my instagram profile'></div>
      </a>

      <a href="https://www.youtube.com/channel/UCTGXBtyqOjyV0R78iUAFFhg" target="_blank" className="mx-4 py-2 " >
        <div className="mx-4" id="youtube" alt='go to my youtube channel'></div>
      </a>

      <style jsx>{`
                #my-footer{
                    height: 7%;
                    box-shadow: 0 -10px 10px rgb(212 207 207);
                }

                #facebook {
                    height: 100%;
                    width: 100%;
                    background-color: rgba(92 87 87);
                    -webkit-mask-size: contain;
                    mask-size: contain;
                    -webkit-mask-position: center;
                    mask-position: center;
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    mask-image: url("/images/company-logos/facebook.svg");
                  }

                  #instagram {
                    height: 100%;
                    width: 100%;
                    background-color: rgba(92 87 87);
                    -webkit-mask-size: contain;
                    mask-size: contain;
                    -webkit-mask-position: center;
                    mask-position: center;
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    mask-image: url("/images/company-logos/instagram.svg");
                  }

                  #youtube {
                    height: 100%;
                    width: 100%;
                    background-color: rgba(92 87 87);
                    -webkit-mask-size: contain;
                    mask-size: contain;
                    -webkit-mask-position: center;
                    mask-position: center;
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    mask-image: url("/images/company-logos/youtube.svg");
                  }

            `}</style>
    </footer>
  );
}

export default Footer;