import React from 'react';
// import { gql, useMutation } from '@apollo/client';

// const AddBooks = gql`
//   mutation addBook($type: String!) {
    
//   }
// `;


function LibraryChelf(){
    return(
        <div>
            <h2>LibraryChelf</h2>
            <input placeholder='ID'/>
            <input placeholder='Name'/>
            <input placeholder='Author'/>
        </div>
    )
}

export default LibraryChelf;