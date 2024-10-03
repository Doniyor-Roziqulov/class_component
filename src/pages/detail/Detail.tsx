import { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
}

interface ProductsState {
    data: Product | null;
}

class Detail extends Component<any, ProductsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount(): void {
        const { proId } = this.props.params;

        axios.get(`https://dummyjson.com/products/${proId}`).then((res) => {
            this.setState({ data: res.data });
        });
    }

    render() {
        const { data } = this.state;

        return (
            <section className="pt-7">
                <div className="container mx-auto px-6 max-w-[1240px]">
                    <div className="flex gap-x-7">
                        <div className="w-1/2 flex gap-x-3">
                            <div className="flex flex-col gap-y-2">
                                {data?.images?.map((e, inx) => (
                                    <div
                                        className="w-[120px] h-[120px] bg-neutral-100 border flex items-center justify-center"
                                        key={inx}>
                                        <img
                                            className="object-contain w-[100px] h-[100px]"
                                            src={e}
                                            alt=""
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="bg-neutral-50 w-[480px] h-[480px] border">
                                <img
                                    className="w-[480px] h-[480px] object-contain rounded-lg"
                                    src={data?.images[0]}
                                    alt={data?.title}
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <h2 className="text-3xl font-bold text-gray-800">
                                {data?.title}
                            </h2>
                            <p className="text-lg text-gray-600 my-3">
                                {data?.description}
                            </p>
                            <p className="text-5xl font-bold text-green-400">
                                ${data?.price}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const SinglePageWithParams = (props: any) => {
    const params = useParams();
    return <Detail {...props} params={params} />;
};

export default SinglePageWithParams;
