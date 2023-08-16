import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
      id="footer"
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10 ">
          <img
            src={logo}
            alt="hoobank"
            className="w-[260px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payment easy, reliable adn secure
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px] "
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    } font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex border-t-[1px] border-t-[#3f3e45] w-full flex-col md:flex-row items-center justify-between pt-6 ">
        <p className="font-poppins font-normal text-centers text-[18px] leading-[27px] text-white">
          2023 Amanuel Tarekegn. All right Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((social, index) => (
            <img
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              src={social.icon}
              key={social.id}
              alt="socialmedia icons"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
