// Listen for the 'DOMContentLoaded' event on the window object
window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault(); // Prevent default behavior (not necessary for 'DOMContentLoaded' event)

 // Event listener for form submission
  document.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from being submitted

    const input = document.querySelector('input#search').value;
    const output = document.querySelector('#github-container');
    const userContainer = document.querySelector('ul#user-list');

    // Personal access token from GitHub
    

    // Search query
    const searchQuery = input;
    
    fetch(`https://api.github.com/search/repositories?q=${searchQuery}`)
      .then((res) => res.json())   
      
      .then((data) => {
        // Handle the search results (data) here
        const results = data.items; // Display the items from the search results

        // Clear previous results if any
        output.innerHTML = '';

        // Loop through the results and display them
        results.forEach((item) => {
         
          console.log(userContainer)
          
          // Add content to the container
          userContainer.innerHTML = `
            <li>UserName: ${item.owner.login}</li>
            <li>Avatar: <img src="${item.owner.avatar_url}" alt="User Avatar"></li>
            <li>URL: <a href="${item.html_url}" target="_blank">${item.html_url}</a></li>
          `;

          
          // Append the user container to the output container
          output.appendChild(userContainer);
        });
      })
      
  })
});






// document.addEventListener('DOMContentLoaded', (e) => {
//   e.preventDefault();

//   document.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const input = document.querySelector('input#search').value;
//     const output = document.querySelector('#github-container');

//     const accessToken = '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';
//     const searchQuery = input;
//     const apiUrl = `https://api.github.com/search/users?q=${searchQuery}`;

//     fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         Authorization: `token ${accessToken}`,
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           return response.json();
//         } else {
//           throw new Error('Failed to fetch data from GitHub API');
//         }
//       })
//       .then((data) => {
//         const results = data.items;

//         const userList = document.querySelector('#user-list');
//         userList.innerHTML = ''; // Clear previous results

//         results.forEach((user) => {
//           const userItem = document.createElement('li');
//           userItem.innerHTML = `
//             <p>Username: ${user.login}</p>
//             <p>Avatar: <img src="${user.avatar_url}" alt="${user.login}"></p>
//             <p>URL: <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
//           `;
//           userItem.addEventListener('click', () => {
//             // Handle the click on a user to fetch repositories
//             const reposUrl = user.repos_url;
//             fetch(reposUrl, {
//               method: 'GET',
//               headers: {
//                 Authorization: `token ${accessToken}`,
//               },
//             })
//               .then((reposResponse) => {
//                 if (reposResponse.status === 200) {
//                   return reposResponse.json();
//                 } else {
//                   throw new Error('Failed to fetch user repositories from GitHub API');
//                 }
//               })
//               .then((reposData) => {
//                 const reposList = document.querySelector('#repos-list');
//                 reposList.innerHTML = ''; // Clear previous results
//                 reposData.forEach((repo) => {
//                   const repoItem = document.createElement('li');
//                   repoItem.innerHTML = `
//                     <p>Repository Name: ${repo.name}</p>
//                     <p>Description: ${repo.description}</p>
//                   `;
//                   reposList.appendChild(repoItem);
//                 });
//               })
//               .catch((reposError) => {
//                 console.error(reposError);
//               });
//           });
//           userList.appendChild(userItem);
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   });
// });
