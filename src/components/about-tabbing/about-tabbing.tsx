"use client";
import React, { use, useState, useEffect } from 'react';
import Image from 'next/image';
import { set } from 'lodash';
import GPCB from "../../../public/images/GPCBLogo.svg";
import './about-tabbing.scss';

const AboutTabbing = ({ departments }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (index) => {
        if(isMobile) {
            setActiveIndex((prev) => (prev === index ? -1 : index));
        }
        else {
            setActiveIndex(index);
        }
    };
    if (!departments || departments.length === 0) {
    return <div>No departments data provided.</div>;
  }


    const activeTab = departments[activeIndex];

    return(
        <>
        <div className='wrapper'>
            <div className='leftTabs'>
                {departments.map((item, idx) => (
                    <div key={idx} className='tabItemWrapper'>
                        <div className={`tabItem ${activeIndex === idx ? 'active' : ''} ${isMobile && activeIndex === idx ? 'accordionOpen' : '' }`} onClick={() => handleClick(idx)}>
                            <div className='logo'>
                                {/* <Image src={item.logo} alt={item.logo} /> */}
                                <Image src={GPCB} alt={GPCB} width={50} height={50} />
                            </div>
                            <span>{item.name}</span>
                        </div>

                        {/* Mobile accordion content */}
                        <div className={` accordionContent ${activeIndex === idx ? 'show' : ''} `}>
                            <h2>{item.name}</h2>
                            <p>{item.content}</p>
                            <button>{item.buttonLabel}</button>
                        </div>
                    </div>
                ))}
            </div>

            
            {/* Desktop content area */}
            {!isMobile && (
                <div className='contentBox'>
                    <h2>{activeTab.name}</h2>
                    <p>{activeTab.content}</p>
                    <button>{activeTab.buttonLabel}</button>

                    <div className="emblem">
                        <Image src={GPCB} alt={GPCB} />
                        <p>Government of Gujarat</p>
                    </div>
                </div>
            )}

        </div>
        </>
    )
}

export default AboutTabbing;