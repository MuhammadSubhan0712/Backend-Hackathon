import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"

const Products = () => {
    
    const products = [
        {
          title: "Wireless Bluetooth Headphones",
          price: 59.99,
          image:
            "https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Smartphone 128GB",
          price: 699.99,
          image:
            "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Gaming Laptop",
          price: 1199.99,
          image:
            "https://images.pexels.com/photos/19012051/pexels-photo-19012051/free-photo-of-modern-gaming-laptop-and-headphones-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "4K LED Smart TV",
          price: 399.99,
          image:
            "https://images.pexels.com/photos/28884413/pexels-photo-28884413/free-photo-of-modern-home-office-tech-setup-with-gadgets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Stainless Steel Water Bottle",
          price: 15.99,
          image:
            "https://images.pexels.com/photos/7815021/pexels-photo-7815021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Noise-Cancelling Earbuds",
          price: 79.99,
          image:
            "https://images.pexels.com/photos/9610816/pexels-photo-9610816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Fitness Tracker Watch",
          price: 49.99,
          image:
            "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Portable Speaker",
          price: 25.99,
          image:
            "https://images.pexels.com/photos/19238583/pexels-photo-19238583/free-photo-of-magsafe-iphone-stand-oakywood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Electric Toothbrush",
          price: 39.99,
          image:
            "https://www.health.com/thmb/MMdfrhzTd8sC-XGIPOPgdwpqEOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HLT-Group-Electric-Toothbrushes-tamara-staples-0625-2000-ac77f54d9fdb4b22993318f78ca6137f.jpg",
        },
        {
          title: "Gaming Mouse",
          price: 29.99,
          image:
            "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ];

  return (
    <div className="min-h-screen bg-xdBlack text-xdGreen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-gray-800 p-4 border border-xdGreen text-center"
          >
            <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
            <CardContent className="text-lg">{product.price}</CardContent>
            <Button className="mt-4 bg-xdGreen text-xdBlack hover:bg-green-500">
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;