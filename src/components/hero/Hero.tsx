import { Component } from "react";

export default class Hero extends Component {
    render() {
        return (
            <section>
                <div className="container mx-auto px-6 max-w-[1240px]">
                    <h1 className="text-6xl text-center mb-4 font-bold">
                        Online Shop
                    </h1>
                    <img
                        src="https://chargebacks911.com/wp-content/uploads/2023/08/Online-vs-In-Store-Shopping-blog.jpg"
                        alt=""
                    />
                </div>
            </section>
        );
    }
}
