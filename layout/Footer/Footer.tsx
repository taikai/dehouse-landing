import Taikai from "../../components/Backgrounds/Taikai";
import { Link } from "../../components/Typography";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinks,
  FooterLink,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLinks>
          <div
            className="font-extralight flex flex-col items-center mb-2"
            style={{ maxWidth: "17.6875rem" }}
          >
            <b className="mb-4 text-c2-l">TAIKAI — Builder Hub</b>
            <address className="mb-4">
              <div>
                <span>R. de António Cardoso 318</span>
              </div>
              <div>
                <span>4150-082 Porto, Portugal</span>
              </div>
            </address>
            <a
              className="mb-4 hover:opacity-40"
              href="mailto:hello@taikai.network"
            >
              hello@taikai.network
            </a>
            <br />
            <ul className="flex justify-evenly">
              <li>
                <a
                  aria-label="twitter"
                  href="https://twitter.com/taikainetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 32 32" className="social-icon">
                    <path d="M26.169 10.782c0.016 0.227 0.016 0.455 0.016 0.682 0 6.936-5.28 14.928-14.928 14.928-0.011 0-0.025 0-0.039 0-2.979 0-5.752-0.878-8.076-2.39l0.057 0.035c0.356 0.041 0.769 0.065 1.187 0.065 0.028 0 0.056-0 0.085-0l-0.004 0c0.008 0 0.018 0 0.028 0 2.457 0 4.718-0.844 6.507-2.257l-0.022 0.017c-2.286-0.043-4.212-1.539-4.895-3.601l-0.011-0.037c0.297 0.049 0.64 0.078 0.989 0.080h0.002c0.491-0.001 0.967-0.066 1.42-0.187l-0.039 0.009c-2.417-0.502-4.207-2.613-4.207-5.143 0-0.003 0-0.005 0-0.008v0-0.065c0.683 0.388 1.495 0.631 2.361 0.665l0.010 0c-1.418-0.956-2.339-2.556-2.339-4.371 0-0.975 0.266-1.888 0.728-2.671l-0.013 0.024c2.6 3.182 6.445 5.262 10.782 5.489l0.037 0.002c-0.080-0.36-0.127-0.774-0.13-1.198v-0.002c0.004-2.898 2.354-5.246 5.252-5.246 1.508 0 2.868 0.636 3.826 1.654l0.003 0.003c1.255-0.247 2.371-0.687 3.376-1.293l-0.046 0.026c-0.406 1.233-1.222 2.239-2.283 2.878l-0.024 0.013c1.12-0.131 2.141-0.418 3.088-0.84l-0.067 0.027c-0.732 1.057-1.603 1.954-2.6 2.691l-0.031 0.022z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="facebook"
                  href="https://facebook.com/Taikai-618699608613771"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 32 32" className="social-icon">
                    <path d="M21.613 17.6l0.711-4.633h-4.446v-3.006c0-1.267 0.621-2.503 2.612-2.503h2.021v-3.945c-1.066-0.181-2.306-0.295-3.569-0.313l-0.018-0c-3.661 0-6.054 2.219-6.054 6.236v3.531h-4.070v4.633h4.070v11.2h5.009v-11.2z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="instagram"
                  href="https://instagram.com/taikainetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 32 32" className="social-icon">
                    <path d="M16.003 9.437c-3.623 0-6.56 2.937-6.56 6.56s2.937 6.56 6.56 6.56c3.623 0 6.56-2.937 6.56-6.56v0c0-0.002 0-0.005 0-0.008 0-3.619-2.933-6.552-6.552-6.552-0.003 0-0.006 0-0.008 0h0zM16.003 20.267c-0 0-0.001 0-0.001 0-2.357 0-4.267-1.91-4.267-4.267s1.911-4.267 4.267-4.267c2.357 0 4.267 1.911 4.267 4.267v0c-0.004 2.355-1.912 4.263-4.266 4.267h-0zM24.364 9.168c-0 0.845-0.685 1.53-1.53 1.53s-1.53-0.685-1.53-1.53 0.685-1.53 1.53-1.53v0c0.001 0 0.002 0 0.003 0 0.843 0 1.527 0.684 1.527 1.527 0 0.001 0 0.003 0 0.004v-0zM28.71 10.722c0.001-0.047 0.002-0.102 0.002-0.157 0-2.016-0.788-3.849-2.072-5.206l0.003 0.004c-1.361-1.282-3.199-2.069-5.222-2.069-0.049 0-0.097 0-0.145 0.001l0.007-0c-2.113-0.12-8.446-0.12-10.56 0-0.044-0.001-0.096-0.001-0.148-0.001-2.018 0-3.853 0.785-5.215 2.067l0.004-0.004c-1.281 1.357-2.069 3.193-2.069 5.212 0 0.052 0.001 0.104 0.002 0.156l-0-0.008c-0.12 2.114-0.12 8.449 0 10.56-0.001 0.047-0.002 0.102-0.002 0.157 0 2.016 0.788 3.849 2.072 5.206l-0.003-0.004c1.362 1.282 3.202 2.069 5.226 2.069 0.047 0 0.095-0 0.142-0.001l-0.007 0c2.113 0.12 8.446 0.12 10.56 0 0.047 0.001 0.102 0.002 0.158 0.002 2.016 0 3.849-0.788 5.206-2.073l-0.003 0.003c1.281-1.361 2.068-3.2 2.068-5.223 0-0.048-0-0.097-0.001-0.145l0 0.007c0.119-2.111 0.119-8.441 0-10.554zM25.98 23.546c-0.449 1.116-1.316 1.985-2.404 2.423l-0.029 0.010c-1.685 0.668-5.68 0.514-7.544 0.514s-5.863 0.148-7.543-0.514c-1.116-0.449-1.984-1.317-2.422-2.405l-0.010-0.029c-0.668-1.685-0.514-5.68-0.514-7.546s-0.149-5.866 0.514-7.546c0.449-1.116 1.317-1.984 2.404-2.422l0.029-0.010c1.685-0.668 5.68-0.514 7.544-0.514s5.866-0.149 7.544 0.514c1.116 0.449 1.983 1.317 2.422 2.404l0.010 0.029c0.668 1.685 0.514 5.68 0.514 7.546s0.154 5.866-0.514 7.546z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="linkedin"
                  href="https://linkedin.com/company/taikainetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 32 32" className="social-icon">
                    <path d="M8.93 25.599h-5.307v-17.091h5.307zM6.274 6.177c-0.004 0-0.009 0-0.014 0-1.705 0-3.088-1.383-3.088-3.088s1.383-3.088 3.088-3.088c1.7 0 3.079 1.374 3.088 3.072v0.001c0 0.001 0 0.002 0 0.003 0 1.703-1.373 3.085-3.072 3.1h-0.001zM28.794 25.599h-5.296v-8.32c0-1.983-0.040-4.526-2.759-4.526-2.759 0-3.182 2.154-3.182 4.383v8.462h-5.302v-17.091h5.090v2.331h0.074c0.985-1.665 2.772-2.764 4.815-2.764 0.073 0 0.145 0.001 0.217 0.004l-0.010-0c5.371 0 6.359 3.537 6.359 8.131v9.389z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="medium"
                  href="https://medium.com/taikai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 32 32" className="social-icon">
                    <path d="M6.233 9.744c0.003-0.030 0.005-0.064 0.005-0.099 0-0.292-0.125-0.554-0.324-0.737l-0.001-0.001-2.387-2.88v-0.428h7.42l5.734 12.58 5.044-12.58h7.076v0.429l-2.043 1.958c-0.143 0.11-0.235 0.281-0.235 0.474 0 0.034 0.003 0.068 0.008 0.1l-0-0.004v14.396c-0.005 0.029-0.008 0.063-0.008 0.097 0 0.193 0.092 0.364 0.234 0.473l0.001 0.001 1.995 1.958v0.429h-10.039v-0.429l2.070-2.006c0.201-0.201 0.201-0.265 0.201-0.571v-11.634l-5.754 14.602h-0.778l-6.692-14.602v9.786c-0.008 0.055-0.013 0.12-0.013 0.185 0 0.364 0.146 0.695 0.383 0.935l-0-0 2.691 3.261v0.429h-7.622v-0.423l2.689-3.266c0.225-0.232 0.363-0.548 0.363-0.897 0-0.079-0.007-0.156-0.021-0.231l0.001 0.008z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="font-extralight flex flex-col items-center"
            style={{ maxWidth: "17.6875rem" }}
          >
            <span className="mb-4 text-c2-l">Work-In Porto</span>
            <address className="mb-4">
              <div>
                <span>Via do Castelo do Queijo 395</span>
              </div>
              <div>
                <span>4100-429 Porto, Portugal</span>
              </div>
            </address>
            <a className="mb-4 hover:opacity-40" href="mailto:workin@caos.pro">
              workin@caos.pro
            </a>
            <br />
            <ul className="flex justify-evenly">
              <li>
                <a
                  aria-label="instagram"
                  href="https://www.instagram.com/workin.caos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 32 32" className="social-icon">
                    <path d="M16.003 9.437c-3.623 0-6.56 2.937-6.56 6.56s2.937 6.56 6.56 6.56c3.623 0 6.56-2.937 6.56-6.56v0c0-0.002 0-0.005 0-0.008 0-3.619-2.933-6.552-6.552-6.552-0.003 0-0.006 0-0.008 0h0zM16.003 20.267c-0 0-0.001 0-0.001 0-2.357 0-4.267-1.91-4.267-4.267s1.911-4.267 4.267-4.267c2.357 0 4.267 1.911 4.267 4.267v0c-0.004 2.355-1.912 4.263-4.266 4.267h-0zM24.364 9.168c-0 0.845-0.685 1.53-1.53 1.53s-1.53-0.685-1.53-1.53 0.685-1.53 1.53-1.53v0c0.001 0 0.002 0 0.003 0 0.843 0 1.527 0.684 1.527 1.527 0 0.001 0 0.003 0 0.004v-0zM28.71 10.722c0.001-0.047 0.002-0.102 0.002-0.157 0-2.016-0.788-3.849-2.072-5.206l0.003 0.004c-1.361-1.282-3.199-2.069-5.222-2.069-0.049 0-0.097 0-0.145 0.001l0.007-0c-2.113-0.12-8.446-0.12-10.56 0-0.044-0.001-0.096-0.001-0.148-0.001-2.018 0-3.853 0.785-5.215 2.067l0.004-0.004c-1.281 1.357-2.069 3.193-2.069 5.212 0 0.052 0.001 0.104 0.002 0.156l-0-0.008c-0.12 2.114-0.12 8.449 0 10.56-0.001 0.047-0.002 0.102-0.002 0.157 0 2.016 0.788 3.849 2.072 5.206l-0.003-0.004c1.362 1.282 3.202 2.069 5.226 2.069 0.047 0 0.095-0 0.142-0.001l-0.007 0c2.113 0.12 8.446 0.12 10.56 0 0.047 0.001 0.102 0.002 0.158 0.002 2.016 0 3.849-0.788 5.206-2.073l-0.003 0.003c1.281-1.361 2.068-3.2 2.068-5.223 0-0.048-0-0.097-0.001-0.145l0 0.007c0.119-2.111 0.119-8.441 0-10.554zM25.98 23.546c-0.449 1.116-1.316 1.985-2.404 2.423l-0.029 0.010c-1.685 0.668-5.68 0.514-7.544 0.514s-5.863 0.148-7.543-0.514c-1.116-0.449-1.984-1.317-2.422-2.405l-0.010-0.029c-0.668-1.685-0.514-5.68-0.514-7.546s-0.149-5.866 0.514-7.546c0.449-1.116 1.317-1.984 2.404-2.422l0.029-0.010c1.685-0.668 5.68-0.514 7.544-0.514s5.866-0.149 7.544 0.514c1.116 0.449 1.983 1.317 2.422 2.404l0.010 0.029c0.668 1.685 0.514 5.68 0.514 7.546s0.154 5.866-0.514 7.546z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="linkedin"
                  href="https://www.linkedin.com/company/work-in-porto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 32 32" className="social-icon">
                    <path d="M8.93 25.599h-5.307v-17.091h5.307zM6.274 6.177c-0.004 0-0.009 0-0.014 0-1.705 0-3.088-1.383-3.088-3.088s1.383-3.088 3.088-3.088c1.7 0 3.079 1.374 3.088 3.072v0.001c0 0.001 0 0.002 0 0.003 0 1.703-1.373 3.085-3.072 3.1h-0.001zM28.794 25.599h-5.296v-8.32c0-1.983-0.040-4.526-2.759-4.526-2.759 0-3.182 2.154-3.182 4.383v8.462h-5.302v-17.091h5.090v2.331h0.074c0.985-1.665 2.772-2.764 4.815-2.764 0.073 0 0.145 0.001 0.217 0.004l-0.010-0c5.371 0 6.359 3.537 6.359 8.131v9.389z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </FooterLinks>
        <div className="flex justify-center min-w-full">
          <span className="flex flex-col items-center">
            <a className="hover:opacity-40" href="https://diogocodes.com">
              diogocodes.com
            </a>
            <div className="font-extralight">{new Date().getFullYear()}</div>
            <div className="font-extralight">All rights reserved</div>
          </span>
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export { Footer };
