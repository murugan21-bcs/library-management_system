import { Card, CardContent } from '@mui/material';

 function BooksList({ books }) {

return (
<div>
<h3>📚 - Available Books</h3>
<div className='books-list'>
{books.map((data, index) => (
<BooksInfo key={index} books={data} />
))}
</div>
</div>
);
}
function BooksInfo({ books }) {
return (
<div className='books-container'>
<Card className='books-card'>
<h5 style={{ textAlign: "center" }}>📕 : {books.id}</h5>
<img className='book-cover' width={"200px"} height={"300px"} src={books.cover} alt="book-cover" />
<CardContent>
<p>Name : <b>{books.name}</b></p>
<p>Author : <b>{books.author}</b></p>
<p>Genre : <b>{books.genre}</b></p>
<p>Language : <b>{books.language}</b></p>
<p>Released Year : <b>{books.release}</b></p>
</CardContent>
</Card>
</div>
);
}
export default BooksList;
