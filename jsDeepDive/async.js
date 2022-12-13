// callbacks -> promises

// States of a promise:
// pending
// fulfilled
// rejected

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(Error('Promise failed.')), 1000);  
//   });
  
//   promise
//   .then(value => console.log(value))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));

  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
     resolve(position); 
   }, error => {
      reject(error);
   }); 
 });
 
 promise
   .then(position => console.log(position))
   .catch(error => console.error(error))
   .finally(() => console.log('done'));

   // API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API

// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com

// GET /posts/1 - single blog post

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);  
      }
      return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))

// POST /posts
const blogPost = {
    title: "Cool post",
    body: "lkajsdflkjasjlfda",
    userId: 1  
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
       "Content-Type": "application/json" 
    },
    body: JSON.stringify(blogPost)
  })
    .then(response => response.json())
    .then(data => console.log(data))

    // const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//   .then(response => response.json())
//   .then(data => console.log(data));
async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  
    const data = await response.json();
    console.log(data);
 }
 
 getPost();
 
 // async function getBlogPost() {
 //   const promise = new Promise((resolve, reject) => {
 //     setTimeout(() => resolve('blog post'), 1000);
 //   });
   
 //   const result = await promise;
 //   console.log(result);
 //   console.log('done');
 //     // .then(value => console.log(value))
 //     // .finally(() => console.log('done'));
 // }

 async function getGithubUser() {
    try {    
      const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
      if (!response.ok) {
        throw new Error(response.status);  
      }
    } catch (error) {
        console.log('Could not fetch user, try resetting your connection');
        console.error(error);  
    } 
  }
  getGithubUser();

  async function getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/uses/3');
      if (!response.ok) {
        throw new Error(response.status);
      }
      const person = await response.json();
      console.log(person);    
    }
      catch (error) {
        console.log(error);
    }}

