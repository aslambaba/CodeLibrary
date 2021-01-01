import React, { useRef } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import  './style/librarychelf.css'
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
        <div className="MainContainer">
            <h2>Code Library</h2>
            <div className='Library'>
                <div className='Book'>
                    <h3>Think and Grow Rich</h3>
                    <p>By Robert Kiosaki</p>
                    <button>Update</button>
                    <button>Reset</button>
                </div>
                <div className='Book'>
                    <h3>Think and Grow Rich</h3>
                    <p>By Robert Kiosaki</p>
                    <button>Update</button>
                    <button>Reset</button>
                </div>
                <div className='Book'>
                    <h3>Think and Grow Rich</h3>
                    <p>By Robert Kiosaki</p>
                    <button>Update</button>
                    <button>Reset</button>
                </div>
            </div>
            <div className='AdminSection'>
                <input placeholder='ID' ref={BookID} />
                <input placeholder='Name' ref={BookName} />
                <input placeholder='Author' ref={BookAuthor} />
                <br />
                <button onClick={SubmitHandler}>ADD Book</button>
            </div>
        </div>
    )
}

export default LibraryChelf;