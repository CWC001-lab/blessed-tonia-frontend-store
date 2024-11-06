import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";
import ProductList from "@/components/product-list";
import Carousel from "@/components/Carousel";
import AboutUs from "@/components/AboutUs";
import FeaturedBrands from "@/components/FeaturedBrands";
import Link from "next/link";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const categories = await getCategories();

    return (
        <Container>
            <div className="space-y-10">
                <Carousel />
                <AboutUs />
                
                <div className="my-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">What are you looking to buy today?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {categories.map((category) => (
                            <div key={category.id} className="bg-white p-4 rounded-lg shadow-md">
                                <Link href={`/category/${category.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                                    {category.name}
                                </Link>
                                <p className="text-gray-500">{category.billboard ? category.billboard.label : 'Click to visit'}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
                <FeaturedBrands />
            </div>
        </Container>
    );
};

export default HomePage;