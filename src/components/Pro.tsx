import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";

interface Product {
    title: string;
    images: string;
    id: number;
    price: number;
}

interface HeaderState {
    counter: number;
    text: string;
    data: null | Product[];
}

export default class Pro extends Component<{}, HeaderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0,
            text: "Hello World",
            data: null,
        };
    }
    componentDidMount() {
        axios
            .get("https://dummyjson.com/products")
            .then((res) => this.setState({ data: res.data.products }));
    }
    render() {
        return (
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="grid grid-cols-4 gap-x-6 gap-y-7">
                    {this.state.data?.map(
                        (item: Product): JSX.Element => (
                            <div key={item.id}>
                                <div className="w-[280px] overflow-hidden h-[280px] flex p-4 bg-neutral-50 rounded-xl border items-center justify-center">
                                    <div className="h-[240px]">
                                        <Image.PreviewGroup
                                            items={[`${item.images[0]}`]}>
                                            <Image
                                                width={240}
                                                height={240}
                                                className="object-contain w-[200px] h-[200px]"
                                                src={item.images[0]}
                                            />
                                        </Image.PreviewGroup>
                                    </div>
                                </div>
                                <div className="pl-5">
                                    <Link
                                        className="text-lg font-semibold"
                                        to={`/product/${item.id}`}>
                                        {item.title}
                                    </Link>
                                    <h3 className="text-2xl font-bold">
                                        ${item.price}
                                    </h3>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}
