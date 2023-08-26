import { Link } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import AuthModal from "./AuthModal";

const navlinks = [
    'about us',
    'my bookings',
    'my wishlist',
    'my profile',
    'list your business',
    'contact us',
];

const NavLink = ({ title }: { title: string }) => {
    return (
        <div
            className="
                p-4
                text-sm
                text-slate-500
                bg-white
                hover:bg-slate-300
                cursor-pointer
                uppercase
                w-full
                text-center
            "
        >
            {title}
        </div>
    )
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header
        className="
            flex
            justify-between
            items-center
            h-28
            p-5
            w-full
        "
    >
        <Link
            to={'/'}
            className="
                flex
                items-center
                gap-1
            "
        >
            <img 
                src="/boopho-logo.png" alt="logo"
                className="
                    aspect-[12/9]
                    w-11
                "
            />
            <div
                className="text-primary-1 text-xl font-extrabold"
            >
                boopho.com
            </div>
        </Link>

        <nav
            className="
                flex
                items-center
                lg:gap-14
                gap-4
                text-sm
                font-serif
                uppercase
                text-slate-500
                whitespace-nowrap
                max-w-[268px]
            "
        >
            <div className="cursor-pointer">my footage</div>
            <AuthModal />
            <div
                className="
                    cursor-pointer
                    text-xl
                    text-primary-1
                "
                onClick={() => setIsOpen(!isOpen)}
            >
                <RxHamburgerMenu />
            </div>
            <div
                className={`
                    absolute
                    top-28
                    border
                    border-primary-1
                    rounded-tl-3xl
                    rounded-bl-3xl
                    flex
                    flex-col
                    items-center
                    max-w-[268px]
                    w-full
                    overflow-hidden
                    transition-all
                    duration-300
                    z-10
                    ${isOpen ? '-right-1' : '-right-[100%]'}
                `}
            >
                {navlinks.map((title: string) => <NavLink title={title} key={title}/>)}
            </div>
        </nav>
    </header>
  )
}

export default Header

