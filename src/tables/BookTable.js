import React from "react";

const BookTable = props => (
   
    <table>
    <thead>
      <tr>
        <th id="tblh">Book Name</th>
        <th id="tblh">Category</th>
		<th id="tblh">Price</th>
        <th id="tblh">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.books.length > 0 ? (
        props.books.map(book => (
          <tr key={book.id}>
            <td id="h" onClick={() => props.editRow(book)}>{book.name}</td>
            <td id="h">{book.category}</td>
			<td id="h">{book.price}</td>
            <td id="h">
          
              <button 
                className="button Actionbtn"
                onClick={() => props.deleteBook(book.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Books</td>
        </tr>
      )}
    </tbody>
  </table>
  
);

export default BookTable;