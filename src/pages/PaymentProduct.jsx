import React, { useEffect, useState } from 'react';
import Logo from '../assets/img/header/logoJ.png';
import product from '../assets/laptop.jpg';
// import '../style/form.css';
import { FaCcPaypal } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useSearchParams } from "react-router-dom";
import Service from "../service/Service";

// TODO: 
// 1. Remove message field [DONE]
// 2. Automated Region
// 3. Change username to name [DONE]
// 4. Click buy then redirect to paypal (inform user that payment will be using paypal) [DONE]
// 5. Change PayPal button to PayPal's logo [DONE]
// 6. Fix navbar & footer issue [DONE]

const PaymentProduct = () => {
    const [productName, setProductName] = useSearchParams();
    const [productDetail, setProductDetail] = useState(undefined);
    const [images, setImages] = useState(undefined);
    const [total, setTotal] = useState(0);
    const [customerName, setCustomerName] = useState(undefined);
    const [address, setAddress] = useState(undefined);
    const [retailRegionProductId, setRetailRegionProductId] = useState(1);
    const [locations, setLocations] = useState(undefined);

    if (productName.get("p") === "" || productName.get("p") == null) {
        window.location.href = "/products";
    }

    useEffect(() => {
        Service.getProduct(productName.get("p"))
            .then(response => {
                setProductDetail(response.data);
                setTotal(response.data.price);

                // get regions
                Service.getRetailProductRegion(response.data.id).then(response => setLocations(response.data));
            })
            .catch(error => console.error(error));

        // get image related to the product
        Service.getImage()
            .then(response => setImages(response.data))
            .catch(error => console.error(error));



    }, []);

    const payment = () => {
        const transactionalRequest = {
            customerName,
            address,
            retailRegionProductId:parseInt(retailRegionProductId)
        };

        Service.addTransaction(transactionalRequest).then(()=>{
            Service.payment({ transactionalRequest, total })
            .then(response => {
                window.location.href = response.data;
            })
            .catch(error => console.error(error));
        });
    };

    return (
        <>
            {
                productDetail &&
                <div>
                    <Header />
                    <main>
                        <div className="grid grid-cols-2 gap-10 p-10 h-[50%]">
                            {/* <img src={Logo} alt="jumpstart" /> */}
                            <div>
                                <img src={images && images[productDetail.picture]} alt="product image" className="h-auto rounded-2xl shadow-md" />
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <div>
                                        <h1 className="text-2xl font-bold">{productDetail.name}</h1>
                                        <p>${total}</p>
                                    </div>
                                    <Link to="" className="hover:underline">back to products</Link>
                                </div>

                                <div className="my-5 h-fit m-0 p-0">
                                    <label htmlFor="name" className="flex flex-col mb-3">
                                        Name
                                        <input type="text" placeholder="Name" id="name" autoComplete="off"
                                            className="border-2 px-4 py-2 outline-none rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-[#F9A826] transition"
                                            onChange={(e) => setCustomerName(e.target.value)} />
                                    </label>

                                    <label htmlFor="address" className="flex flex-col mb-3">
                                        Address
                                        <input type="text" placeholder="Address" id="address" autoComplete="off"
                                            className="border-2 px-4 py-2 outline-none rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-[#F9A826] transition"
                                            onChange={(e) => setAddress(e.target.value)} />
                                    </label>

                                    <select className="w-full border-2 p-2 rounded-lg mb-3 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F9A826] transition" onChange={(e) => setRetailRegionProductId(e.target.value)}>
                                        <option value="">-- Select Region --</option>
                                        {
                                            locations && locations.map((v, i) => {
                                                return <option key={i} value={v.id}>{v.retailRegion.location}</option>;
                                            })
                                        }
                                    </select>

                                    <button className="flex gap-1 items-center justify-center border-2 w-full py-2 rounded-lg border-transparent text-[#F9A826] font-semibold shadow active:shadow-none transition hover:bg-[#F9A826] hover:text-white group" onClick={payment}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-[#F9A826] group-hover:fill-white"><path d="M19.554 9.488c.121.563.106 1.246-.04 2.051-.582 2.978-2.477 4.466-5.683 4.466h-.442a.666.666 0 0 0-.444.166.72.72 0 0 0-.239.427l-.041.189-.553 3.479-.021.151a.706.706 0 0 1-.247.426.666.666 0 0 1-.447.166H8.874a.395.395 0 0 1-.331-.15.457.457 0 0 1-.09-.363c.061-.373.148-.938.267-1.689.117-.75.206-1.314.267-1.689s.15-.938.272-1.685c.121-.748.212-1.31.271-1.685.033-.248.179-.371.433-.371h1.316c.893.013 1.682-.057 2.375-.211 1.172-.262 2.134-.744 2.886-1.449.685-.637 1.203-1.462 1.56-2.473.162-.47.277-.917.352-1.338.006-.041.014-.066.025-.074.008-.011.022-.014.035-.011a.378.378 0 0 1 .062.035c.524.398.854.941.98 1.632zm-1.728-2.836c0 .717-.154 1.508-.465 2.374-.537 1.562-1.547 2.618-3.037 3.168-.758.269-1.602.408-2.535.425 0 .006-.301.007-.904.007l-.903-.007c-.672 0-1.067.32-1.187.964-.013.053-.298 1.83-.855 5.329-.008.066-.048.102-.121.102H4.854a.473.473 0 0 1-.369-.165.469.469 0 0 1-.115-.39L6.702 3.664a.784.784 0 0 1 .276-.483.785.785 0 0 1 .519-.19h6.014c.228 0 .555.044.979.131.428.084.801.194 1.123.321.718.274 1.266.688 1.645 1.237.379.552.568 1.207.568 1.972z"></path></svg>
                                        <span>PayPal</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            }
        </>
    );
};

export default PaymentProduct;