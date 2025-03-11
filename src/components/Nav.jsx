import React from 'react'


function Nav() {
    return (
        <div>
            <nav>

                <div className="nav_top">
                    <div className="container">
                        <ul>
                            <li><a href="">Tashkent</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Contacts</a></li>
                        </ul>
                        <div className="nav_t_r">
                            <p>+998 (71) 123-45-67</p>
                            <span>uz</span>
                        </div>
                    </div>
                </div>

                <div className="nav_main">
                    <div className="container">
                        <div className="left">
                            <p></p>
                            <h4></h4>
                        </div>
                        <div className="center">
                            <button>Kategorya</button>
                            <input type="text" placeholder='What are you looking for?' />
                            <h4></h4>
                        </div>
                        <div className="right">
                            <h2></h2>
                            <h3></h3>
                            <h4></h4>
                            <h5></h5>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="nav_bottom">
                <div className="container">
                    <ul>
                        <li><a href="">Aksiyalar</a></li>
                        <li><a href="">Smartfonlar</a></li>
                        <li><a href="">Noutbooklar</a></li>
                        <li><a href="">Kondetsionerlar</a></li>
                        <li><a href="">Telivizorlar</a></li>
                        <li><a href="">Muzlatgichlar</a></li>
                        <li><a href="">Kiryuvish mashinalari</a></li>
                        <li><a href="">Telivizorlar</a></li>
                        <li><a href="">Kiryuvish mashinalari</a></li>
                    </ul>
                </div>
            </div>
















        </div>
    )
}

export default Nav