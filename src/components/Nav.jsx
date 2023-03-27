import React from "react";
import SearchBar from "../components/SearchBar"
import { Link } from "react-router-dom"
import About from "./About";

const Nav = ({ onSearch }) => {
    return (
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
        </nav>
    )
}

export default Nav
