import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data' 
import SocialLink from './SocialLink'
import PageLink from './PageLink'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='nav-logo' alt='backroads' />
                    <button
                        type='button'
                        className='nav-toggle'
                        id='nav-toggle'
                    >
                        <i className='fas fa-bars'></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <ul className='nav-links' id='nav-links'>
                    { 
                        pageLinks.map(page => {
                            return <PageLink key={page.id} {...page} itemClass='nav-link' />
                        }) 
                    }
                </ul>

                <ul className='nav-icons'>
                    {
                        socialLinks.map(social => {
                            return <SocialLink key={social.id} {...social} itemClass='nav-icon' />
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
