"use client";
import Buttons from "../core/buttons/buttons";
import "../../components/searchbox/searchbox.scss";

const SearchBox = () => {
    return(
        <>
        <form onSubmit={(e) => { e.preventDefault(); }} className="position-relative  Search">
            <input type="text" className="form-control" placeholder="Search" />
            <Buttons label=" Explore All" className="btn-fill orange" />
        </form>
        </>
    )
}

export default SearchBox;