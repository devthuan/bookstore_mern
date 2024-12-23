import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetCartAsync } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { resetOrder } from "../features/order/orderSlice";
import "../features/style/OrderSuccessPage.css";

function OrderSuccessPage() {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        // Reset cart and current order
        dispatch(resetCartAsync());
        dispatch(resetOrder());
    }, [dispatch]);

    return (
        <>
            {!params.id && <Navigate to="/" replace={true}></Navigate>}
            <main className="main-container">
                <div className="text-center blur-effect">
                    <p className="text-base font-semibold text-indigo-300">Order Successfully Placed</p>
                    <h1 className="mt-4 text-4xl font-bold sm:text-5xl order-title">
                        Order Number #{params?.id}
                    </h1>
                    <p className="mt-6 text-lg text-indigo-100">
                        You can check your order in <strong>My Account &gt; My Orders</strong>.
                    </p>
                    <div className="mt-10">
                        <Link to="/" className="btn-glow">
                            Go back home
                        </Link>
                    </div>
                </div>
                <div className="fireworks-container">
                    <div className="firework"></div>
                    <div className="firework"></div>
                    <div className="firework"></div>
                </div>
            </main>
        </>
    );
}

export default OrderSuccessPage;
