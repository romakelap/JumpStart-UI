import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function ThankYou() {
    return (
        <>
        <Header/>
         <div className="h-screen">
            <div className="w-80 m-auto lg:mt-16 max-w-sm">
                <img src="https://img.freepik.com/premium-vector/concept-online-commercemobile-app-payment-with-credit-card-web-banking-customer_183665-376.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                <div className="bg-white shadow-2xl rounded-b-3xl">
                    <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">Thank you for ordering</h2>
                    <div className="w-5/6 m-auto">
                        <p className="text-center text-gray-500 pt-5">your order will arrive at your house no later than 2X24 hours, and thank you</p>
                    </div>
                    <div className="grid grid-cols-3 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
                        <div className="col-span-1 mt-5">
                            <img className="w-15 lg:w-12" src="https://img.freepik.com/premium-vector/check-mark-icon-flat-style-ok-accept-vector-illustration-white-isolated-background-tick-business-concept_157943-544.jpg?w=2000" alt="" />
                        </div>
                        <div className="col-span-2 pt-2">
                            <p className="text-gray-800 font-bold lg:text-sm">your payment is successful</p>
                            <p className="text-gray-500 text-sm">Payment for products is successful</p>
                        </div>
                    </div>
                    <Link to={"/products"}>
                    <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 mb-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                        <button classs="lg:text-sm text-lg font-bold">Back</button>
                    </div>
                    </Link>
                    <div className="text-center m-auto mt-6 w-full h-10">
                        
                    </div>
                </div>
            </div>
        </div>
        </>
       
    );
}