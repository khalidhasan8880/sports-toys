import Lottie from "lottie-react";
import customerService from "../../assets/icons/customer-service.json";
import returnProduct from "../../assets/icons/return.json";
import securePayment from "../../assets/icons/secure-payment.json";
import delivery from "../../assets/icons/send-animated-icon.json";

const Services = () => {
    return (
        <div className="flex flex-wrap justify-center gap-y-11 sm:justify-between items-center mt-64 mb-40">
            <div className="flex items-center space-x-3">
                <div className="mask mask-squircle w-24">
                    <Lottie animationData={delivery} loop={true}/>
                </div>
                <div>
                    <h3 className="font-bold text-2xl">Free Delivery</h3>
                    <div className="text-sm opacity-50">For all orders over $ 100</div>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="mask mask-squircle w-24">
                    <Lottie animationData={returnProduct} loop={true}/>
                </div>
                <div>
                    <h3 className="font-bold text-2xl">90 days return </h3>
                    <div className="text-sm opacity-50">If product have problem</div>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="mask mask-squircle w-24">
                    <Lottie animationData={securePayment} loop={true}/>
                </div>
                <div>
                    <h3 className="font-bold text-2xl">Secure Payment</h3>
                    <div className="text-sm opacity-50">100% secure payment</div>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="mask mask-squircle w-24">
                    <Lottie animationData={customerService} loop={true}/>
                </div>
                <div>
                    <h3 className="font-bold text-2xl">7/24 Support</h3>
                    <div className="text-sm opacity-50">Dedicated Support</div>
                </div>
            </div>
        </div>
    );
};

export default Services;