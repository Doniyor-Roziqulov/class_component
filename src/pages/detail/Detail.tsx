import axios from "axios";
import { Component } from "react";

interface Products {
    images: string[];
    title: string;
    description: string;
    price: number;
}

interface HeaderState {
    data: null | Products[];
}

export default class Detail extends Component<{}, HeaderState> {
    componentDidMount(): void {
        axios
            .get(`https://dummyjson.com/products/`)
            .then((res) => this.setState({ data: res.data }));
    }

    render() {
        return (
            <section>
                <div className="container"></div>
            </section>
        );
    }
}
