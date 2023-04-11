import React from "react";
import SearchBar from "../components/SearchBar"
import { Link, useLocation } from "react-router-dom"
import About from "./About";

const Nav = ({ onSearch, logout }) => {
    const {pathname} = useLocation()
    return (
        <>
        {
            (pathname !== '/') ? (
                <nav>
            
                <SearchBar
                    onSearch={onSearch}
                />
    
                <Link
                    to={'/about'}>
                    <button >
                        About
                    </button>
                </Link>
    
                <Link
                    to={'/home'}
                >
                    <button>
                        Home
                    </button>
                </Link>
    
                <button onClick={logout}>
                        Cerrar Sesion
                    </button>
            </nav>
            ) : ('')
        }
       </>
    )
}

export default Nav
