import React from 'react';

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const SocialShare = [
    {Social: <AiFillGithub /> , link: 'https://www.github.com/Thanah'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/thanah-raveendran/'},
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;