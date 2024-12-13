// Here we are going to fetch the posts from the API

export async function fetchPosts() {
  const res = await fetch("https://dummyjson.com/posts/");
  const data = await res.json();
  return data.posts; // Retorna os posts
}

// export async function handleRequest(req, res) {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       const posts = await fetchPosts();
//       res.status(200).json(posts);
//       break;
//     case "POST":
//       // Handle POST request
//       const newPost = req.body;
//       // Assuming the API supports creating a new post
//       const postRes = await fetch("https://dummyjson.com/posts/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPost),
//       });
//       const createdPost = await postRes.json();
//       res.status(201).json(createdPost);
//       break;
//   }
// }
