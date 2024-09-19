import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-1">
          <Image src={logo} alt="Logo" height={150} width={150} priority />
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
