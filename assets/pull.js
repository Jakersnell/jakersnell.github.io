const GRIDSIZE = 3;
function displayRepos(repos) {
    const container = document.getElementById('repos-container');
    let i = 0;
    let j = 0;
    repos.forEach(repo => {
        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.innerText = repo.name;
        repoLink.target = "_blank";
        
        const repoHeader = document.createElement('h3');
        repoHeader.appendChild(repoLink);

        const repoText = document.createElement('p');
        repoText.innerText = repo.description;

        const repoDiv = document.createElement('div');
        repoDiv.className = "project";
        repoDiv.appendChild(repoHeader);
        repoDiv.appendChild(repoText);
        // repoDiv.style.gridColumn = j % GRIDSIZE;
        // repoDiv.style.gridRow = i++ % GRIDSIZE;
        // if (i != 0 && i % GRIDSIZE == 0) {
        //     j++;
        // }
        const spacer = document.createElement("div");
        spacer.className = "spacer";
        
        container.appendChild(repoDiv);
        container.appendChild(spacer);
    });
}

fetch('https://api.github.com/users/Jakersnell/repos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    })
    .then(data => {
        displayRepos(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);

        window.location.href = './error-page.html';
    });