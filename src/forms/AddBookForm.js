import React, { useState } from "react";

const AddBookForm = props => {
  const initialFormState = { id: null, name: "", category: "", price: "", des:"" };
  const [book, setBook] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!book.name || !book.category || !book.price || !book.des) return;
        props.addBook(book);
        setBook(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={book.name}
        onChange={handleInputChange}
      />
      <label>Category</label>
      <input
        type="text"
        name="category"
        value={book.category}
        onChange={handleInputChange}
      />
	  
	   <label>Price</label>
      <input
        type="text"
        name="price"
        value={book.price}
        onChange={handleInputChange}
      />

    <label>Description</label>
      <input
        type="text"
        name="des"
        value={book.des}
        onChange={handleInputChange}
      />
	<button>Add Book</button>
    </form>
  );
};

export default AddBookForm;
