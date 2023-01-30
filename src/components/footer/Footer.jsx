import React from 'react'
import Logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from '@heroicons/react/outline'
import css from './Footer.module.css'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>amazon</span>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>{" "}
                        <LocationMarkerIcon className={css.icon}/>
                        <span>Some Address like XYZ in XYZ</span>
                    </span>
                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon}/>
                        <span>123 456 789</span>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon}/>
                        <a href="xyz:support@amazon.com">xyz@amazon.com</a>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                        <span>Sign In</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>
                        <span>Safety Privacy & Terms</span>
                    </span>
                </div>
            </div>
        </div>

        <div className={css.copyRight}>
            <span>Copyright 2022 by Amazon, Inc.</span>
            <span>All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer