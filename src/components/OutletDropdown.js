import { useState, useEffect } from 'react';

const OutletDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOutlet, setSelectedOutlet] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false); // State untuk mengontrol visibilitas popup

    const outlets = [1, 2, 3, 4]; // Daftar outlet

    const handleOutletClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOutletSelection = (outlet) => {
        setSelectedOutlet(outlet);
        setIsDropdownOpen(false);
    };

    const handleProcessClick = () => {
        if (selectedOutlet) {
            // Logika untuk memproses outlet yang dipilih
            setIsPopupVisible(true);
            setTimeout(() => {
                setIsPopupVisible(false);
            }, 2000);
            console.log(`Outlet yang dipilih: ${selectedOutlet}`);
        } else {
            // Tindakan jika tidak ada outlet yang dipilih
            console.log('Pilih outlet terlebih dahulu');
        }
    };

    useEffect(() => {
        if (isPopupVisible) {
            setTimeout(() => {
                setIsPopupVisible(false);
            }, 2000);
        }
    }, [isPopupVisible]);

    return (
        <td className="px-4 py-2">
            <div className="relative inline-block text-left">

                {/* BUTTON OUTLET */}
                <button
                    type="button"
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={handleOutletClick}
                >
                    {selectedOutlet ? `Outlet ${selectedOutlet}` : 'Choose Outlet'}
                </button>

                {/* DRPDOWN OUTLET */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                        <ul className="py-2">
                            {outlets.map((outlet) => (
                                <li
                                    key={outlet}
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                                    onClick={() => handleOutletSelection(outlet)}
                                >
                                    Outlet {outlet}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* BUTTON PROCESS */}
            <button
                className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md"
                onClick={handleProcessClick}
            >
                Process
            </button>
            {isPopupVisible && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md shadow-lg">
                        <p className='text-green-600'>
                            Outlet yang dipilih: {selectedOutlet}
                            <br />
                            Success di process
                        </p>
                    </div>
                </div>
            )}
        </td>
    )
}

export default OutletDropdown