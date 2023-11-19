const GRIDSIZE = 3;

function displayRepos(repos) {
    const container = document.getElementById('repos-container');
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    let colCount = 0; // Count of columns in the current row

    repos.forEach((repo, index) => {
        if (repo.description != null) {
            // Create the column
            const col = document.createElement('div');
            col.className = 'col-md-4'; // Adjust the number based on your grid size

            // Create the repository link
            const repoLink = document.createElement('a');
            repoLink.href = repo.html_url;
            repoLink.innerText = repo.name;
            repoLink.target = "_blank";

            // Create the repository header
            const repoHeader = document.createElement('h3');
            repoHeader.appendChild(repoLink);

            // Create the repository description
            const repoText = document.createElement('p');
            repoText.innerText = repo.description;

            // Add elements to the column
            col.appendChild(repoHeader);
            col.appendChild(repoText);

            // Add the column to the row
            row.appendChild(col);
            colCount++;

            // If the row is filled, start a new row
            if (colCount === GRIDSIZE) {
                row = document.createElement('div');
                row.className = 'row';
                container.appendChild(row);
                colCount = 0;
            }
        }
    });

    // Add empty columns if the last row is not full
    while (colCount > 0 && colCount < GRIDSIZE) {
        const emptyCol = document.createElement('div');
        emptyCol.className = 'col-md-4';
        row.appendChild(emptyCol);
        colCount++;
    }
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
        window.location.href = 'error';
    });
