import { NavLink, useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/download.png'
import reviewImg from '../../assets/review.png'
import ratingImg from '../../assets/rating.png'
import { useState } from 'react';
import Rechart from '../ReChart/Rechart';
import toast from "react-hot-toast";

const BookDetails = () => {
    const [isDisabled, setIsDisabled] = useState(false);

    const { id } = useParams();
    const appId = parseInt(id);

    const apps = useLoaderData();
    const singleApp = apps.find(a => a.id === appId);

    const { image, companyName, reviews, ratingAvg, downloads, size, description } = singleApp;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDisabled(true);

        const old = JSON.parse(localStorage.getItem("installedApps")) || [];

        const item = {
            id: appId,
            image,
            companyName,
            downloads,
            ratingAvg,
            size
        };

        // prevent duplicates
        if (!old.find(a => a.id === appId)) {
            old.push(item);
            localStorage.setItem("installedApps", JSON.stringify(old));
        }

        toast.success("App Installed Successfully!");
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
        
            <div className="flex flex-col lg:flex-row items-start gap-10 border-b pb-10">

                <img 
                    src={image} 
                    alt={companyName}
                    className="w-52 h-52 object-contain rounded-xl shadow-sm"
                />

                <div className="flex-1 space-y-4">

                    <h1 className="text-3xl lg:text-4xl font-bold">{companyName}</h1>
                    <p className="text-gray-600">
                        Developed by <span className="text-blue-500">productive.io</span>
                    </p>

                    <div className="grid grid-cols-3 gap-6 my-6">

                        <div className="flex flex-col items-center">
                            <img src={downloadImg} className="w-10 h-10" />
                            <p className="text-gray-600 text-sm">Downloads</p>
                            <p className="text-xl font-semibold">{downloads}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={reviewImg} className="w-10 h-10" />
                            <p className="text-gray-600 text-sm">Average Ratings</p>
                            <p className="text-xl font-semibold">{ratingAvg}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={ratingImg} className="w-10 h-10" />
                            <p className="text-gray-600 text-sm">Total Reviews</p>
                            <p className="text-xl font-semibold">{reviews}</p>
                        </div>

                    </div>

                    <NavLink to='/installation'>
                        <button 
                          onClick={handleSubmit}
                          disabled={isDisabled}
                          className="btn bg-green-500 hover:bg-green-600 text-white px-6"
                        >
                          {isDisabled ? "Installed" : `Install Now (${size} MB)`}
                        </button>
                    </NavLink>

                </div>
            </div>

            <div className="mt-10 border-b pb-10">
                <h2 className="text-xl font-semibold mb-4">Ratings</h2>
                <Rechart />
            </div>

            <div className="mt-10">
                <h3 className="text-lg font-semibold bg-blue-100 text-blue-800 px-3 py-2 w-fit rounded">
                    Description
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
            </div>

        </div>
    );
};

export default BookDetails;
