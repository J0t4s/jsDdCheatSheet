const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = "<strong>This is a new post</strong>"

// document.body.prepend(newPost);
const post = document.querySelector('.post');

post.prepend(newPost);


post.style.margin = 'orange';
// post.style.margin = '30px';
post.classList.toggle('post');
post.classList.add('post');
post.classList.remove('post');

// const posts = document.querySelectorAll(".post");
// posts.forEach(post => {  
//   post.addEventListener('click', event => {
//   //   console.log(event.target);  
//     console.log('Do you want to edit this post?')
//   });
// });

document.body.addEventListener('click', event => {
  if (!event.target.closest('.post')) return;
  
  console.log('Do you want to edit this post?')  
})