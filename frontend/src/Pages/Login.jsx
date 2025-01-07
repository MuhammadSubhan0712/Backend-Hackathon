import { Input, Button } from "shadcn-ui";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-xdBlack text-xdGreen">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="w-full max-w-sm space-y-4">
        <Input type="email" placeholder="Email" className="bg-gray-800" />
        <Input type="password" placeholder="Password" className="bg-gray-800" />
        <Button className="bg-xdGreen text-xdBlack hover:bg-green-500 w-full">
          Sign In
        </Button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="underline">
          Register
        </Link>
      </p>
    </div>
  );
}


export default Login;