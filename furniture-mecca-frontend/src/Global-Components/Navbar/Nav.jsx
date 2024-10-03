import React, {useEffect, useState} from 'react'
import './Nav.css';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import FurnitureDropdown from './FurnitureMenu/FurnitureDropdown';
import { GiHamburgerMenu, GiHumanCannonball } from "react-icons/gi";
import cashtonImage from '../../Assets/menu-images/Cashton.jpg'
import cyrilkImage from '../../Assets/menu-images/Cyrilk-.jpg'
import medellinImage from '../../Assets/menu-images/medellin.jpg'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = ({navLinks}) => {

    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null)
    const location = useLocation()

    const handleMouseEnter = (index) => {
        setDropdownOpen(index)
    }
    const handleMouseLeave = () => {
        setDropdownOpen(null);
    }
    const handleActiveItemIndex = (index) => {
        setActiveIndex(index)
    }
    useEffect(() => {
        setDropdownOpen(null)
        setActiveIndex(location.pathname)
    }, [location])

    // drop Down Data
    const livingroomLinks = [
        {
            heading: 'Living Room',
            links: [
                {name: 'Living Room Sets', link: '#'},
                {name: 'Sofa & LoveSeat Sets', link: '#'},
                {name: 'Sectionals', link: '#'},
                {name: 'Reclining Furniture', link: '#'},
                {name: 'Sofas', link: '#'},
                {name: 'Sleeper Sofas', link: '#'},
                {name: 'LoveSeats', link: '#'},
                {name: 'Small Space Living Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ],
            Images: [
                {title: "Cashton Sofa and Loveseat", price: '$799', link: '#', img: cashtonImage},
                {title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#',  img: cyrilkImage},
                {title: "Medellin Sofa and Loveseat", price: '$1299', link: '#',  img: medellinImage},
            ]
        }
    ]

    const bedroomLinks = [
        {
            heading: 'Bedroom',
            links: [
                {name: 'Bedroom Sets', link: '#'},
                {name: 'Beds & Headboards', link: '#'},
                {name: 'Dresser & Mirror Set', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chests', link: '#'},
                {name: 'NightStands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Quen Beds', link: '#'},
                {name: 'Full Beds', link: '#'},
                {name: 'King', link: '#'},
                {name: 'Small Spaces Bedrooms', link: '#'},
                {name: 'Outlets', link: '#'},
            ],
            Images: [
                {title: "Cashton Sofa and Loveseat", price: '$799', link: '#',  img: cashtonImage},
                {title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#',  img: cyrilkImage},
                {title: "Medellin Sofa and Loveseat", price: '$1299', link: '#',  img: medellinImage},
            ]
        }
        
        
    ]

    const diningroomLinks = [
        {
            heading: 'Dining Room', link: '/dining-room',
            links: [
                {name: 'Dining Room Sets', link: '/dining-room-sets'},
                {name: 'Pub Heights Dining Sets', link: '#'},
                {name: 'Dining Chairs & Benches', link: '#'},
                {name: 'Dining Tables', link: '#'},
                {name: 'Bar Stools', link: '#'},
                {name: 'Servers, Buffets & China Cabinets', link: '#'},
            ],
            Images: [
                {title: "Cashton Sofa and Loveseat", price: '$799', link: '#',  img: cashtonImage},
                {title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#',  img: cyrilkImage},
                {title: "Medellin Sofa and Loveseat", price: '$1299', link: '#',  img: medellinImage},
            ]
        }
    ]

    const mattressesLinks = [
        {
            heading: 'Mattresses',
            links: [
                {name: 'Twin Size', link: '#'},
                {name: 'Quen Size', link: '#'},
                {name: 'Full Size', link: '#'},
                {name: 'King Size', link: '#'},
                {name: 'Bed Frames', link: '#'},
                {name: 'Pillows', link: '#'},
                {name: 'Memory Foam Mattresses', link: '#'},
                {name: 'box Spring', link: '#'},
                {name: 'Mattresses Protection', link: '#'},
                {name: 'Outlet', link: '#'},
            ],
            Images: [
                {title: "Cashton Sofa and Loveseat", price: '$799', link: '#',  img: cashtonImage},
                {title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#',  img: cyrilkImage},
                {title: "Medellin Sofa and Loveseat", price: '$1299', link: '#',  img: medellinImage},
            ]
        }
    ]

    const kidsLinks = [
        {
            heading: 'Kids',
            links: [
                {name: 'Kids Bedroom Sets', link: '#'},
                {name: 'Kids Room', link: '#'},
                {name: 'Kids Beds & Headboards', link: '#'},
                {name: 'Kids Bedroom Storage', link: '#'},
                {name: 'Outlet', link: '#'},
            ],
            Images: [
                {title: "Cashton Sofa and Loveseat", price: '$799', link: '#',  img: cashtonImage},
                {title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#',  img: cyrilkImage},
                {title: "Medellin Sofa and Loveseat", price: '$1299', link: '#',  img: medellinImage},
            ]
        }
    ]

    const accentFurnitureLinks = [
        {
            heading: 'Accent Furniture / Rugs',
            links: [
                {headingOne: 'Accent', innerLinks: [
                    {name: 'Kids Bedroom Sets', link: '#'},
                    {name: 'Kids Room', link: '#'},
                    {name: 'Kids Beds & Headboards', link: '#'},
                    {name: 'Kids Bedroom Storage', link: '#'},
                    {name: 'Outlet', link: '#'},
                ]},

                {headingOne: 'Rugs', innerLinks: [
                    {name: 'Kids Bedroom Sets', link: '#'},
                    {name: 'Kids Room', link: '#'},
                    {name: 'Kids Beds & Headboards', link: '#'},
                    {name: 'Kids Bedroom Storage', link: '#'},
                    {name: 'Outlet', link: '#'},
                ]},
                
            ],
            Images: [
                {title: "Cashton Sofa and Loveseat", price: '$799', link: '#',  img: cashtonImage},
                {title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#',  img: cyrilkImage},
            ]
        }
    ]

    const smallSpacesLinks = [
        {
            heading: 'Kids',
            links: [
                {name: 'Small Spaces Bedrooms', link: '#'},
                {name: 'Small Spaces Living Rooms', link: '#'},
                {name: 'Small Spaces Dining Rooms', link: '#'},
            ],
            Images: [
                {title: "Cashton Sofa and Loveseat", price: '$799', link: '#',  img: cashtonImage},
                {title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#',  img: cyrilkImage},
                {title: "Medellin Sofa and Loveseat", price: '$1299', link: '#',  img: medellinImage},
            ]
        }
    ]

    const outletLinks = [
        {
            heading: 'Outlet',
            links: [
                {name: 'Tent Sale', link: '#'},
                {name: 'Summer Sale', link: '#'},
                {name: 'OverStock Sale', link: '#'},
                {name: 'Package Deals', link: '#'},
                {name: '50% OFF', link: '#'},
                {name: 'Last Call', link: '#'},
            ],
            Images: [
                {title: "Cashton Sofa and Loveseat", price: '$799', link: '#',  img: cashtonImage},
                {title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#',  img: cyrilkImage},
                {title: "Medellin Sofa and Loveseat", price: '$1299', link: '#',  img: medellinImage},
            ]
        }
    ]


  return (
    <div className='navbar'>
        <nav className='navar-links-container'>
        {navLinks.map((item, index) => {
            return <h3 key={index} onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave} onClick={() => handleActiveItemIndex(index)}
            className={`nav-item ${activeIndex === item.link ? 'active' : ''}`}>
                <Link to={item.link} className='nav-link'> {item.name} </Link>
                {dropdownOpen === index && (
                    <div className='dropdown'>
                        {index === 0 ? <DropdownMenu navHeading={livingroomLinks[0].heading} 
                            dropDownNavData={livingroomLinks} 
                         /> 
                        : index === 1 ? <DropdownMenu navHeading={bedroomLinks[0].heading} 
                            dropDownNavData={bedroomLinks} 
                         /> 
                        : index === 2 ? <DropdownMenu navHeading={diningroomLinks[0].heading} 
                            dropDownNavData={diningroomLinks} 
                         /> 
                        : index === 3 ? <DropdownMenu navHeading={mattressesLinks[0].heading} 
                            dropDownNavData={mattressesLinks}
                        /> 
                        : index === 4 ? <DropdownMenu navHeading={kidsLinks[0].heading}
                            dropDownNavData={kidsLinks}
                        />
                        : index === 5 ? <DropdownMenu dropDownNavData={accentFurnitureLinks} /* navHeading={accentFurnitureLinks[0].heading} */ />
                        : index === 6 ? <DropdownMenu dropDownNavData={smallSpacesLinks} navHeading={smallSpacesLinks[0].heading} />
                        : index === 7 ? <DropdownMenu dropDownNavData={outletLinks} navHeading={outletLinks[0].heading} />
                        : <></>}
                    </div>
                )}
            </h3>
        })}
        <div className='mobile-navbar'>
            {navLinks.map((item, index) => {
                return  <h3 key={index} className='mobile-nav-link'>
                    <Link to={item.link}>{item.name}</Link>
                </h3>
            })}
        </div>
        </nav>
    </div>
  )
}

export default Nav
