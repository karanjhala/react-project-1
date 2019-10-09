import React from 'react'

export const Book = ({title='No Title Mentioned',author='No Author Mentioned',pages='No Page Number Mentioned',freeBookmark='No'}) => {
     return (
         <section> 
             <h2>{title}</h2>
             <p>By: {author}</p>
             <p>Pages: {pages}</p>
             <p>Free Bookmark Today: {freeBookmark ?'yes!' : 'no'}</p>
         </section> 
     )
 }