import {useState} from 'react';

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="sticky top-0 z-10 bg-white md:bg-transparent flex items-center justify-between px-4 md:px-[130px] font-rubik">
            <img src="/mendleson logo.png" alt="mendleson logo" className='w-[295px] h-[85px]'/>
            <ul className="hidden md:flex items-center justify-between gap-6 p-2">
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Team</a>
                </li>
                <li>
                    <a href="">Clients</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
            </ul>

            <button onClick={() => {setToggle(!toggle)}} className="flex items-center justify-center text-black font-bold text-3xl md:hidden w-[45px] h-[45px] transition-all duration-300 ease-in-out  ${
                toggle ? 'opacity-100 ' : 'opacity-0 pointer-events-none'
            }">
                {toggle ? '\u00D7' :  '\u2261'}
            </button>

                        <ul
            className={`flex flex-col z-10 items-center justify-between gap-6 absolute top-[100px] left-0 w-full bg-white md:hidden transition-all duration-300 ease-in-out ${
                toggle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
            >

                <li>
                    <a href="" onClick={() => setToggle(false)}>About Us</a>
                </li>
                <li>
                    <a href="" onClick={() => setToggle(false)}>Services</a>
                </li>
                <li>
                    <a href="" onClick={() => setToggle(false)}>Team</a>
                </li>
                <li>
                    <a href="" onClick={() => setToggle(false)}>Clients</a>
                </li>
                <li>
                    <a href="" onClick={() => setToggle(false)}>Contact Us</a>
                </li>
            </ul>
            
        </nav>
    );
}

export default Nav;