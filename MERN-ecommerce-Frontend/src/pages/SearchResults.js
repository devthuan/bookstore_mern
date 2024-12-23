// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const searchBooks = async (query) => {
//     try {
//         const response = await axios.get(`/api/books/search?query=${query}`);
//         return response.data;
//     } catch (error) {
//         if (error.response && error.response.data) {
//             console.error('Error searching books:', error.response.data);
//             return [];
//         } else {
//             console.error('Error searching books:', error.message);
//             return [];
//         }
//     }
// };

// const SearchResults = () => {
//     const location = useLocation();
//     const query = new URLSearchParams(location.search).get('query');
//     const [searchResults, setSearchResults] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchSearchResults = async () => {
//             try {
//                 const results = await searchBooks(query);
//                 setSearchResults(Array.isArray(results) ? results : []);
//             } catch (err) {
//                 setError('Failed to fetch search results');
//             }
//         };

//         fetchSearchResults();
//     }, [query]);

//     return (
//         <div>
//             <h1>Search Results for "{query}"</h1>
//             {error && <p>{error}</p>}
//             <ul>
//                 {searchResults.map((book) => (
//                     <li key={book.id}>{book.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SearchResults;