import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Eye } from "lucide-react";
 // Import SiteFooter component
import SiteHeader from "./siteheader";
import SiteFooter from "./sitefooter";

export function AuthForm({ type }: { type: "signin" | "signup" }) {
  return (
    <div>
      <SiteHeader /> {/* Include the header */}

      <Card className="border-0 shadow-none w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        <CardContent className="p-8 lg:p-10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {type === "signin" ? "Sign in" : "Sign up"}
          </h2>
          <form className="space-y-6">
            {type === "signup" && (
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-500">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter name"
                  className="rounded-md border-gray-300 w-full"
                />
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor={`${type}-email`} className="text-sm text-gray-500">
                Email
              </label>
              <Input
                id={`${type}-email`}
                type="email"
                placeholder="Enter email"
                className="rounded-md border-gray-300 w-full"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`${type}-password`}
                className="text-sm text-gray-500"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id={`${type}-password`}
                  type="password"
                  placeholder="Password"
                  className="rounded-md border-gray-300 w-full"
                />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            {type === "signin" ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-gray-500">
                    Remember for 30 days
                  </label>
                </div>
                <Button
                  variant="link"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password
                </Button>
              </div>
            ) : (
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm text-gray-500">
                  Terms and conditions agreement
                </label>
              </div>
            )}
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:bg-blue-600 py-3">
              {type === "signin" ? "SIGN IN" : "SIGN UP"}
            </Button>
            <div className="relative mt-6">
              <Separator />
              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-gray-400">
                OR
              </span>
            </div>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center border-black bg-black text-white hover:bg-gray-800 rounded-md py-3"
            >
              <img
                src="/Google__G__Logo 1.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign {type === "signin" ? "in" : "up"} with Google
            </Button>
          </form>
          {type === "signup" && (
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-500">New Customer? </span>
              <button className="text-sm text-blue-600 hover:underline">
                Start here
              </button>
            </div>
          )}
          {type === "signin" && (
            <div className="mt-6 text-center">
              <button className="text-sm text-blue-600 hover:underline">
                ← Back to the website
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      <SiteFooter /> {/* Include the footer */}
    </div>
  );
}

export default AuthForm;
