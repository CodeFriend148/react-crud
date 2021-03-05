import React, { useState } from "react";
import BookTable from "./tables/BookTable";
import AddBookForm from "./forms/AddBookForm";
import EditBookForm from "./forms/EditBookForm";

const App = () => {
  const booksData = [
    { id: 1, name: "The Healing Powers of Tea", category: "CookBook", price: "$15", des: "The author Cal Orey specializes in topics such as health, beauty, nutrition, relationships, science, and pets."},
    { id: 2, name: "The Year of Magical Thinking", category: "Non-Fiction", price: "$20", des: "A stunning book of electric honesty and passion." },
    { id: 3, name: "Ways to Make Sunshine", category: "Fiction - Childrens", price: "$25", des: "Ryan is a girl who knows how to make sunshine out of setbacks."}
  ];

  // Books
  const [books, setBooks] = useState(booksData);

  
  const addBook = book => {
    book.id = books.length + 1;
    setBooks([...books, book]);
  };

  
  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

 
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", category: "", price: "", des:"" };
  
  
  const [currentBook, setCurrentBook] = useState(initialFormState);

   
  const editRow = book => {
    setEditing(true);
    setCurrentBook({ id: book.id, name: book.name, category: book.category, price: book.price, des: book.des });
  };
 
 
  const updateBook = (id, updateBook) => {
    setEditing(false);
    setBooks(books.map(book => (book.id === id ? updateBook : book)));
  };

  const addRow = props => {
     setEditing(false)
  }
  
  return (
    
    <div className="container">
      <div id="hline"><h1>Frontend Developer Test - BookStore App</h1></div>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Book</h2>
              <EditBookForm
                editing={editing}
                setEditing={setEditing}
                currentBook={currentBook}
                updateBook={updateBook}
              />
            </div>
          ) : (
            <div>
              <h2>Add Book</h2>
              <AddBookForm addBook={addBook} />
            </div>
          )}
        </div>
        <div className="flex-large">
         <div id="hline2"><h2>Books List</h2></div> 
         <button  className="button btn"
         onClick={addRow}> Add Book </button>
         <BookTable books={books} deleteBook={deleteBook} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;