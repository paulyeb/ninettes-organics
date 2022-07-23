import Button from "./Button";

const Overview = () => {
    return (
        <div className="container h-full flex justify-between items-center">
            <div className="bg-gray-50 h-full w-full flex flex-col justify-center items-start">
                <legend className="lg:text-5xl text-4xl font-medium px-8 my-4">Skincare Made Simple, for your busy life</legend>

                <p className="text-2xl font-medium px-8 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea, ipsa vero tempore maiores consectetur porro minima doloribus deleniti tempora!</p>
                <Button>Shop Now</Button>
            </div>
            <img src="images/afro_model.jpg" alt="model_1" className="lg:inline hidden object-cover h-full w-full" />
        </div>
    )
}

export default Overview;