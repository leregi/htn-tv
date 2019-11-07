import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components';

function SocialFollow() {
    return (
        <MediaComponent className="social-container">
             <a href="https://www.youtube.com/#"className="youtube social">
                 <FontAwesomeIcon icon={faYoutube} size="2x" />
             </a>

             <a href="https://www.facebook.com/#" className="facebook social">
                 <FontAwesomeIcon icon={faFacebook} size="2x" />
             </a>
             
             <a href="https://www.twitter.com/#" className="twitter social">
                 <FontAwesomeIcon icon={faTwitter} size="2x" />
             </a>
             
             <a href="https://www.instagram.com/#" className="instagram social">
                 <FontAwesomeIcon icon={faInstagram} size="2x" />
             </a>
        </MediaComponent>
    )
}

export default SocialFollow

// Social Container
const MediaComponent = styled.div`
    padding: 10px 30px;

    a.social {
        margin: 0 0.2rem;
        transition: transform 250ms;
        display: inline-block;
      }

    a.social:hover {
        transform: translateY(-2px);
    }

    a.youtube {
        color: #bb0000;
    }

    a.facebook {
        color: #3b5998;
    }

    a.twitter {
        color: #00aced;
    }

    a.instagram {
        color: #517fa4;
    }
`;