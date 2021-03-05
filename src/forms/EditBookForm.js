import React, { useState, useEffect } from "react";

const EditBookForm = props => {
  const [book, setBook] = useState(props.currentBook);

  useEffect(
    () => {
      setBook(props.currentBook);
    },
    [props]
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateBook(book.id, book);
      }}
    >
      <label>Book Name</label>
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
      <button>Update Book</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button Actionbtn"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditBookForm;