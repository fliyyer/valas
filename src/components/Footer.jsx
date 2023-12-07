import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logof.png";
import Btn from "../assets/btn ps.png";
import { BsCheck, BsWhatsapp, BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { LanguageContext } from "../utils/LanguageContext";
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube  } from "react-icons/fa";
const Footer = () => {
    const { t } = useContext(LanguageContext);
    return (
        <div>
            <div className="py-6 md:py-[43px] px-4 md:px-[113px] 2xl:md:px-0 2xl:max-w-7xl justify-center mx-auto">
                <img src={Logo} alt="Logo" className="mb-4" />
                <div className="text-[#fff] flex flex-col md:flex-row md:justify-between">
                    <div className="text-sm md:mt-[52px]">
                        <h1 className="mb-[15px]">
                            Follow Social Media Valast
                        </h1>
                        <div className="flex gap-[23px] text-2xl mb-[20px]">
                            <Link target="_blank" to="https://www.instagram.com/valast.indonesia"><FaInstagram /></Link>
                            <Link target="_blank" to="https://wa.me/6281310000000"><FaWhatsapp /></Link>
                            <Link target="_blank" to="https://www.facebook.com/valast.indonesia"><FaFacebook /></Link>
                            <Link target="_blank" to="https://www.linkedin.com/company/valast-indonesia/"><FaLinkedin /></Link>
                            <Link target="_blank" to="https://www.youtube.com/"><FaYoutube /></Link>
                        </div>
                        <p className="mb-6 md:mb-10">{t("Download Valast sekarang!")}</p>
                        <img src={Btn} alt="Download Button" />
                    </div>
                    <div className="mt-6 md:mt-0">
                        <h1 className="text-lg font-semibold mb-[18px]">Company</h1>
                        <ul className="space-y-[10px] text-sm">
                            <li className="flex items-center leading-5 gap-[13.5px]">
                                 About Us
                            </li>
                            <li className="flex items-center leading-5 gap-[13.5px]">
                                 Available Countries
                            </li>
                            <li className="flex items-center leading-5 gap-[13.5px]">
                                 Blog
                            </li>
                            <li className="flex items-center leading-5 gap-[13.5px]">
                             FAQ
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <h1 className="text-lg font-semibold mb-[18px]">Join Us</h1>
                        <ul className="space-y-[10px] text-sm">
                            <li className="flex items-center leading-5 gap-[13.5px]">
                            Affiliate
                            </li>
                            <li className="flex items-center leading-5 gap-[13.5px]">
                                Careers{" "}
                            </li>
                            <li className="flex items-center leading-5 gap-[13.5px]">
                                Partnership
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <h1 className="text-lg font-semibold mb-[18px]">Help</h1>
                        <ul className="space-y-[10px] text-sm">
                            <li className="font-semibold">Contact us:</li>
                            <li target="_blank" to="https://wa.me/088293716057" className="flex cursor-pointer items-center leading-5 gap-[13.5px]">
                                <BsWhatsapp className="text-sm" />
                                0882-9371-6057
                            </li>
                            <a target="_blank" href="mailto:sales@valast.id" className="flex items-center leading-5 gap-[13.5px]" rel="noreferrer">
                                <BsTelephone className="text-sm" />
                                Sales@valast.id
                            </a>
                            <li className="font-semibold">Operational hours:</li>
                            <li className="flex items-center leading-5 gap-[13.5px]">
                                Mon-Sun: 09.00 - 17.00 (GMT+7)
                            </li>
                            <li className="font-semibold">Address:</li>
                            <li className="flex items-center leading-5 gap-[13.5px]">
                                <FaLocationDot className="text-sm" />
                                Infiniti Office, <br /> Bellezza BSA Lantai 1 Unit 106, Jalan Letjen Soepeno
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#011B35] py-4">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#fff] text-sm">
                        © 2023 PT Valast - All rights reserved. | Terms of Service | Privacy Policy | Refund Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
