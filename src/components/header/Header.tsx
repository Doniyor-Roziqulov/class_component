import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header className="py-5 shadow-xl">
                <div className="container mx-auto px-6 max-w-[1240px]">
                    <div className="flex items-center gap-x-10">
                        <Link className="text-xl font-bold" to={"/"}>
                            Home
                        </Link>
                        <Link
                            className="border-b border-black"
                            to={"/products"}>
                            Products
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}
