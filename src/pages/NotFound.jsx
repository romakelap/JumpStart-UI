import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="bg-gray-100 h-[100vh] flex">
            <div className="m-auto text-center">
                <h1 className="text-4xl font-bold uppercase">Not Found</h1>
                <Link to="/" className="hover:underline transition">back to home</Link>
            </div>
        </div>
    );
}