import React from "react";
import { Link } from "react-router-dom";

const FormNav = () => {

    return (
        <div className="form-nav">
            <div className="form-nav-title-box">
                <Link to="/" className="form-nav-Oobr">Oobr <Link to="/" className="form-nav-Eats">Eats</Link></Link>
            </div> 
        </div>
    )
}

export default FormNav