import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import LoginForm from "@/components/user/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-1">
          <Image src={logo} alt="Logo" height={150} width={150} priority />
        </div>

        <LoginForm />

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
