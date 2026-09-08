"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image src="/images/logo.svg" priority={true} alt="Page Not Found" width={48} height={48} />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
        <Button variant="outline" onClick={() => window.location.href = "/"} className="mt-4 ml-2">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
