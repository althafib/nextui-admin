import { Logo } from "@/components/icons";
import Login from "@/components/login";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* Left Side: Descriptions (Hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <span className={title()}>Make&nbsp;</span>
            <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
            <br />
            <span className={title()}>
              websites regardless of your design experience.
            </span>
            <div className={subtitle({ class: "mt-4" })}>
              Beautiful, fast and modern React UI library.
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            {/* <img src="vercel.svg" alt="Logo" className="w-20 h-20 mx-auto mb-4" /> */}
            <Logo className="w-20 h-20 mx-auto mb-4" />

            {/* Login Heading */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Login to your account
            </h2>

            <Login />
          </div>
        </div>
      </div>
    </section>
  );
}
