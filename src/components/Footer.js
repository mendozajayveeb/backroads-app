import { pageLinks, socialLinks } from "../data" 
import PageLink from "./PageLink"
import SocialLink from "./SocialLink"

const Footer = () => {
    return (
        <footer className='section footer'>
            <ul className='footer-links'>
                {
                    pageLinks.map(page => {
                        return <PageLink key={page.id} {...page} itemClass='footer-link' />
                    })
                }
            </ul>

            <ul className='footer-icons'>
                {
                    socialLinks.map(social => {
                        return <SocialLink key={social.id} {...social} itemClass='footer-icon' />
                    })
                }
            </ul>

            <p className='copyright'>
                copyright &copy; Backroads travel & tours company
                <span id='date'>{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer
