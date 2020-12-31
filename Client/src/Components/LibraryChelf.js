import React, { useRef } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

const AddBooks = gql`
  mutation AddBook($id:Int!,$name:String!,$author:String!) {
    AddBook(id:$id,name:$name,author:$author) {
      id
    }
  }
`;

function LibraryChelf() {

    const [AddBook] = useMutation(AddBooks);
    const BookID = useRef();
    const BookName = useRef();
    const BookAuthor = useRef();

    const SubmitHandler = () => {
        console.log(BookAuthor.current.value);

        AddBook(
            {
                variables: {
                    id: parseInt(BookID.current.value),
                    name: BookName.current.value,
                    author: BookAuthor.current.value
                }
            }
        )

    }
    return (
        <div>
            <h2>LibraryChelf</h2>
            <input placeholder='ID' ref={BookID} />
            <input placeholder='Name' ref={BookName} />
            <input placeholder='Author' ref={BookAuthor} />
            <button onClick={SubmitHandler}>ADD Book</button>
        </div>
    )
}

export default LibraryChelf;