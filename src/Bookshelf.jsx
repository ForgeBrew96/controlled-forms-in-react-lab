import { useState } from 'react';


const Bookshelf = (props) => {
    const [newBook, setNewBook] = useState({ title: '', author: '' })
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
        console.log("Creating a new book...");
    }
    return (

        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        onChange={handleInputChange}
                        value={newBook.title}
                    />
                    <label htmlFor="author">Author</label>
                    <input
                        id="author"
                        type="text"
                        name="author"
                        onChange={handleInputChange}
                        value={newBook.author}
                    />
                    <button type="submit">Create Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                <ul>
                    {books.map((book, index) => (
                        <li key={index}> {book.title} by {book.author} </li>))}
                </ul>
            </div>
        </div>
    );
};

export default Bookshelf;