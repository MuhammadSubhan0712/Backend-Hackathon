import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-xdBlack text-xdGreen">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form className="w-full max-w-sm space-y-4">
        <Input type="text" placeholder="Username" className="bg-gray-800" />
        <Input type="email" placeholder="Email" className="bg-gray-800" />
        <Input type="password" placeholder="Password" className="bg-gray-800" />
        <Button className="bg-xdGreen text-xdBlack hover:bg-green-500 w-full">
          Sign Up
        </Button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
