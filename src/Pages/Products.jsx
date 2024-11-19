

const Products = () => {
    return (
        <div className="container mx-auto">
            <h1 className="my-8 text-2xl font-semibold text-cnter">All Products</h1>
            <div className="lg:flex justify-between items-center w-full mb-6">
                <h1>Search bar</h1>
                <h1>Sorting</h1>
            </div>
            {/* content */}
            <div className="grid grid-cols-12">
                <div className="col-span-2">FilterBar</div>
                <div className="col-span-10">Products</div>

            </div>
        </div>
    );
};

export default Products;