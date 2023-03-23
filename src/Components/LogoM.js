import React from "react"
import { Link } from "react-router-dom"

function LogoMenu() {
    return (
        <div className="d-flex justify-content-center">
            <Link to={'/'}>
                <h1 className="titulo-menu">The Little Pixel</h1>
            </Link>
        </div>
    )
}
export default LogoMenu