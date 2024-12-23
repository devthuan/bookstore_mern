import { Link } from "react-router-dom";
import '../features/style/404.css';

function PageNotFound() {
    return (
        <main className="page-not-found">
            <div className="text-center blur-effect">
                {/* Book Animation */}
                <div className="book-animation">
                    <span>MCK</span>
                    <span>B</span>
                    <span>O</span>
                    <span>O</span>
                    <span>K</span>
                    <span>S</span>
                    <span>T</span>
                    <span>O</span>
                    <span>R</span>
                    <span>E</span>
                </div>
                
                {/* Error Code */}
                <h1 className="error-code">404</h1>
                
                {/* Error Message */}
                <h2 className="error-message">Page not found</h2>
                
                {/* Description */}
                <p className="description">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                
                {/* Action Link */}
                <div className="actions">
                    <Link to="/">Go back home</Link>
                </div>
            </div>
        </main>
    );
}

export default PageNotFound;
