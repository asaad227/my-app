import React from 'react'

export default function PostTodo({todo}) {
    async function fetchPostUsers() {
  
        let response = await fetch(`/.netlify/functions/post_todoList`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        });
        let data = await response.json();
        console.log("post data", data);
      }


  return (
    <div>
    {fetchPostUsers()}
    </div>
  )
}
