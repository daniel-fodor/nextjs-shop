import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="border-t border-gray-200 bg-white py-8">
            <div className="p-5 flex-center">
                <p className="text-center text-sm text-gray-500">
                    &copy; {currentYear} {APP_NAME}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;