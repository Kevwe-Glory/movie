import React from 'react'
import { footerLinks, socialMedia } from '../Constant/main'
import { copyrightSign  } from '../asset/icon';

const Footer = () => {
  return (
    <footer>
      <div className='flex gap-8 justify-center mt-[30px] gap-11'>
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
      </div>
      <div  className='flex gap-10 justify-center text-bold mt-[30px] gap-9px'>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4>
              {section.title}
            </h4>
            <ul>
              {section.links.map((link) => (
                <li
                  key={link.name}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
      <div className='flex justify-between text-white-400 mt-[30px] max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 gap-2 justify-center mb-[50px] text-gray-500'>
            <img src={copyrightSign} alt='copyright sign' width={20} height={20} className='rounded-full m-0'
            />
            <p className='text-bold'>2021 MovieBox by Adriana Eka Prayudha.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer