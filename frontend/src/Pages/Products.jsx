import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      title: "Wireless Bluetooth Headphones",
      price: 59.99,
      description:
        "Immerse yourself in high-quality sound with these stylish wireless Bluetooth headphones.",
      image:
        "https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Smartphone 128GB",
      price: 699.99,
      description:
        "Stay connected and productive with this sleek smartphone featuring a vibrant display.",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Gaming Laptop",
      price: 1199.9,
      description:
        "Take your gaming to the next level with this high-performance gaming laptop.",
      image:
        "https://images.pexels.com/photos/19012051/pexels-photo-19012051/free-photo-of-modern-gaming-laptop-and-headphones-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "4K LED Smart TV",
      price: 399.99,
      description:
        "Experience stunning visuals with this 4K LED Smart TV.",
      image:
        "https://images.pexels.com/photos/28884413/pexels-photo-28884413/free-photo-of-modern-home-office-tech-setup-with-gadgets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Stainless Steel Water Bottle",
      price: 15.99,
      description:
        "Keep your beverages hot or cold for hours with this durable stainless steel water bottle.",
      image:
        "https://images.pexels.com/photos/7815021/pexels-photo-7815021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Noise-Cancelling Earbuds",
      price: 79.99,
      description:
        "Focus on what matters with these premium noise-cancelling earbuds.",
      image:
        "https://images.pexels.com/photos/9610816/pexels-photo-9610816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Fitness Tracker Watch",
      price: 49.99,
      description:
        "Track your health and fitness goals with this sleek and functional fitness tracker watch.",
      image:
        "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Portable Speaker",
      price: 25.99,
      description:
        "Bring the party wherever you go with this compact yet powerful portable speaker.",
      image:
        "https://images.pexels.com/photos/19238583/pexels-photo-19238583/free-photo-of-magsafe-iphone-stand-oakywood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Electric Toothbrush",
      price: 39.99,
      description:
        "Elevate your oral hygiene routine with this advanced electric toothbrush.",
      image:
        "https://www.health.com/thmb/MMdfrhzTd8sC-XGIPOPgdwpqEOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HLT-Group-Electric-Toothbrushes-tamara-staples-0625-2000-ac77f54d9fdb4b22993318f78ca6137f.jpg",
    },
    {
      title: "Gaming Mouse",
      price: 29.99,
      description:
        "Dominate the competition with this precision-engineered gaming mouse.",
      image:
        "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="min-h-screen bg-xdCharcoal text-xdYellow p-6">
      <h1 className="text-4xl font-bold text-center mb-6 ">📦 Products 📱</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-[#9eabb9] p-4 border border-xdYellow text-center hover:scale-105 transform transition-transform">
            <CardHeader className="p-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl font-bold mb-2">
                {product.title}
              </CardTitle>
              <CardDescription className="text-xl font-semibold mb-2 text-slate-100">
                {product.description}
              </CardDescription>
              <p className="text-lg text-yellow-900 font-semibold mt-4">{product.price}$</p>
            </CardContent>

            <CardFooter className="p-4 bg-center">
              <Button className="bg-xdYellow text-xdCharcoal hover:scale-105 hover:bg-yellow-600 transition-transform hover:text-gray-100">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
