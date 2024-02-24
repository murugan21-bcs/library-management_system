import { AppBar, Button, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AddBook } from './AddBook';
import './App.css';
import BooksList from './BooksList'; 
import { Home } from './Home';
import BooksPage from './BookPage';

function App() {
const navigate = useNavigate();
const [books, setBooks] = useState([]);

useEffect(() => {
fetch("https://63899fddc5356b25a203eddb.mockapi.io/books")
.then((bk) => bk.json())
.then((bks) => setBooks(bks));
}, []);

return (
<div className="App">
<AppBar position='static' color='secondary'>
<Toolbar>
<Button color='inherit' onClick={() => navigate("/")}>Home</Button>
<Button color='inherit' onClick={() => navigate("/books")}>Books</Button>
<Button color='inherit' onClick={() => navigate("/books/add")}>Add Books</Button>
</Toolbar>
</AppBar>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/books" element={<BooksList books={books} />} />
<Route path="/books/add" element={<AddBook />} />
<Route path="/bookspage" element={<edit/>} />
</Routes>
</div>
);
}

export default App;



