import { useEffect, useState } from 'react'
import Logo from '../assets/img/header/logoJ.png'
import { useNavigate } from 'react-router-dom'
import '../style/admin.css'

// icon
import { GiCancel } from 'react-icons/gi';
import { MdOutlineRememberMe } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { FaPeopleCarry, FaDonate, FaMotorcycle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { BsSearch, BsX } from 'react-icons/bs';
import TableProduct from '../components/TableAdmin/TableProduct';
import TableTransaction from '../components/TableAdmin/TableTransaction';

const AdminDashboard = () => {
    const [activeLink, setActiveLink] = useState('food');
    const navigate = useNavigate();
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const styles = {
        padding: '0rem 0.5rem',
        marginLeft: '1rem'
    };

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const logoutHandler = () => {
        sessionStorage.removeItem('token');
        navigate("/loginadmin");
    };
    useEffect(() => {
        const sideMenu = document.querySelector("aside");
        const menuBtn = document.querySelector("#menu-btn");
        const closeBtn = document.querySelector("#close-btn");

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                sideMenu.style.display = 'block';
            });
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                sideMenu.style.display = 'none';
            });
        }

        return () => {
            if (menuBtn) {
                menuBtn.removeEventListener('click', () => {
                    sideMenu.style.display = 'block';
                });
            }
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    sideMenu.style.display = 'none';
                });
            }
        };
    }, []);
    return (
        <div className="adminbody">
            <div className="containerAdmin">


                {/* ==========================NAVIGATION BAR START=========================== */}
                <aside>
                    <div className="top">
                        <div className="logoAdmin">
                            <img src={Logo} />
                        </div>
                        <div className="close" id="close-btn">
                            <GiCancel />
                        </div>
                    </div>
                    <div className="sidebar">
                        <a className={activeLink === 'product' ? 'active' : ''} onClick={() => handleLinkClick('product')}><span className="material-icon"><IoMdAddCircle /></span>
                            <span className=''>Product</span>
                        </a>
                        <a className={activeLink === 'transaction' ? 'active' : ''} onClick={() => handleLinkClick('transaction')}><span className="material-icon"><FaDonate /></span>
                            <span className='fw-bold'>Transaction</span>
                        </a>
                        <a onClick={logoutHandler}><span className="material-icon"><AiOutlineLogout /></span>
                            <span onClick={logoutHandler} className='fw-bold'>Log out</span>
                        </a>
                    </div>
                </aside>
                {/* ==========================NAVIGATION BAR END=========================== */}



                <div className="main">
                    {/* ==========================INFO TOP START=========================== */}
                    <div className="insights">
                        <div className="sales">
                            <span className="material-icon"><FaPeopleCarry className='svg1' /></span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Outlets</h3>
                                    <h1>750</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div className="number">
                                        <p>80%</p>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">Last 24 hour</small>
                        </div>

                        {/* ---------END OF SALES---------- */}
                        <div className="sales">
                            <span className="material-icon"><MdOutlineRememberMe className='svg2' /></span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Products</h3>
                                    <h1>234</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div className="number">
                                        <p>70%</p>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">Last 24 hour</small>
                        </div>

                        {/* ---------END OF SALES---------- */}
                        <div className="sales">
                            <span className="material-icon"><FaMotorcycle className='svg3' /></span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Driver</h3>
                                    <h1>234</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div className="number">
                                        <p>90%</p>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">Last 24 hour</small>
                        </div>

                        {/* ---------END OF SALES---------- */}
                    </div>
                    {/* ==========================INFO TOP END=========================== */}




                    {/* ========================TABLE START========================= */}



                    {/* ====================SEARCH START=================================== */}
                    <div className="search flex">
                        <input type="text" className="searchTerm" placeholder="Search here" />
                        <button type="submit" className="searchButton">
                            <BsSearch />
                        </button>

                        <button type="submit" className="ButtonCustomer" onClick={togglePopup}>
                            Orders
                        </button>

                        <button type="submit" className="buttonadd">
                            Add
                        </button>

                        {/* =============POP UP START==================== */}

                        {isOpen && (
                            <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
                                <div className="p-8 bg-white rounded-md">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-bold">Order Details</h3>
                                        <button className="text-gray-500" onClick={togglePopup}>
                                            <BsX />
                                        </button>
                                    </div>
                                    <h2 className="mb-4">List of orders from customer</h2>
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2">Customer Name</th>
                                                <th className="px-4 py-2">Product Name</th>
                                                <th className="px-4 py-2">Address</th>
                                                <th className="px-4 py-2">Quantity</th>
                                                <th className="px-4 py-2">Option</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">xiomi</td>
                                                <td className="px-4 py-2">12</td>
                                                <td className="px-4 py-2">$3</td>
                                                <td className="px-4 py-2">$3</td>
                                                <td className="px-4 py-2">
                                                    <button className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md">Process</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            //  {/* =============POP UP END==================== */}

                        )}
                    </div>

                    {/* ====================SEARCH END=================================== */}


                    {/* ==========================DATA TABLE START=========================== */}
                    <div className="recent-list">

                        {/* =====================IF THE PARTNER ACTIVE START*/}
                        {activeLink === 'product' && (
                            <div>
                                <TableProduct />
                            </div>
                        )}
                        {/* =====================IF THE PARTNER ACTIVE END */}

                        {/* =====================IF THE DONATOR ACTIVE START*/}
                        {activeLink === 'transaction' && (
                            <div>
                                <TableTransaction />
                            </div>
                        )}
                        {/* =====================IF THE DONATOR ACTIVE END */}


                    </div>
                </div>
                {/* ========================TABLE END========================= */}
                {/* ===========RIIGHT TOP============== */}
                <div className="right">
                    <div className="top">
                        <button id="menu-btn">
                            <span className="material-icon"><AiOutlineLogout /></span>
                        </button>
                        <div className="profileAdmin">
                            <div className="infoAdmin">
                                <p>hey, <b>ADMIN</b></p>
                                <small className="text-miuted">Admin</small>
                            </div>
                            <div className="profile-photo">
                                <img src="https://images.unsplash.com/photo-1621707854626-ffa306e32745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                            </div>
                        </div>
                    </div>

                    {/* End of top */}

                    <div className="recent-updates">
                        {/* <h2>Recents Updates</h2> */}
                        <div className="updates">
                            <div className="update">
                                <div className="profile-photo">
                                    <img src="https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
                                </div>
                                <div className="message">
                                    <p><b>Jordan</b> received his order from rider</p>
                                    <small className="text-muted">3 minutes ago</small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img src="https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
                                </div>
                                <div className="message">
                                    <p><b>Lesti Kejora</b> received his order from rider</p>
                                    <small className="text-muted">3 minutes ago</small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img src="https://images.unsplash.com/photo-1566761284295-af58908238bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
                                </div>
                                <div className="message">
                                    <p><b>Lesti Kejora</b> received his order from rider</p>
                                    <small className="text-muted">3 minutes ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard