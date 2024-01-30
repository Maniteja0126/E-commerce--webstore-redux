import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

export const ProductSectionItem = ({
    id,
    img,
    name,
    text,
    size,
    price,
    color,
    totalPrice,
}) => {
    const dispatch = useDispatch()
    const defaultSize = size[0];
    const defaultColor = color[0];

    return (
        <div>
            <Card className="w-96 relative hover:scale-105">
                
                <CardHeader className="h-96" floated={false}>
                    <img src={img} alt={name} />
                </CardHeader>
                <Typography variant="h4" className="mb-2 absolute -rotate-45 top-12 right-8 x-10 text-red-700">
                    SALE%
                </Typography>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography color="gray" className="font-medium" textGradient>
                        {text}
                    </Typography>
                    <div className="flex justify-between items-center" textGradient>
                        <Typography color="red" className="font-medium" textGradient>
                            Size left:{" "}
                            <span className="text-gray-400 text-base font-extralight">
                                {defaultSize}
                            </span>
                        </Typography>
                        <Typography className="font-medium" color="gray" textGradient>
                            Color:{" "}
                            <span
                                className="px-2 rounded-full ml-2"
                                style={{ backgroundColor: defaultColor }}
                            ></span>
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Add to Cart" placement="bottom">
                        <Button
                            onClick={() => dispatch(addToCart({
                                id: id,
                                img: img,
                                text: text,
                                amount: 1,
                                price: price,
                                totalPrice: totalPrice,
                                name: name,
                                size: defaultSize,
                                color: defaultColor,
                            }))}
                            size="lg"
                            color="gray"
                            variant="outlined"
                            ripple={true}
                        >
                            Add to Cart
                        </Button>
                    </Tooltip>
                </CardFooter>
            </Card>
        </div>
    )
}


