var url = window.location.search;
url = url.replace("?", ''); // remove the ?
url = url.replace("%20", ' '); // remove the %20 and replace with space
url = url.toLowerCase() // remove case sensitivity

let queryString = clientTracker.find(item => item.name.toLowerCase() === url || item.nameTwo.toLowerCase() === url);

function populatePage() {
    // client name in title
    let clientName = document.querySelector('#client-name');
    if (queryString == undefined) {
        clientName.innerHTML = 'No Operator found';
        return
    } else {
        clientName.innerHTML = queryString.name;
        if (queryString.nameTwo !== "") {
            clientName.innerHTML += " & " + queryString.nameTwo;
        }
    }

    // Populate project reusable elements
    let statusPrefix = `<span class="bold-text">Status: </span>`
    let datePrefix = `<span class="bold-text">Last Activity: </span>`
    let notesPrefix = `<span class="bold-text">Notes: </span>`

    // List of deliverables
    let projectDeliverables = ['logo', 'businessCard', 'video', 'website'];

    for (let i = 0; i < projectDeliverables.length; i++) {
        // get Object for project item
        let deliverable = projectDeliverables[i]

        // get content from project item Object
        let projectContainer = document.querySelector('#' + deliverable)
        let projectContent = document.querySelector('#' + deliverable + ' .projectContent')
        let status = queryString[deliverable][`${deliverable}_status`];
        let date = queryString[deliverable][`${deliverable}_date`];
        let notes = queryString[deliverable][`${deliverable}_notes`];

        // add completed class or in progress class
        if (status == 'Completed') {
            document.querySelector('#' + deliverable).classList.add('completed')
        }
        if (status == 'In Progress') {
            projectContainer.classList.add('inProgress')
        }

        // Add content 
        if (status.length > 0) {
            projectContent.innerHTML += `<p>${statusPrefix} ${status}</p>`
        }
        if (date.length > 0) {
            projectContent.innerHTML += `<p>${datePrefix} ${date}</p>`
        }
        if (notes.length > 0) {
            projectContent.innerHTML += `<p>${notesPrefix} ${notes}</p>`
        }
    }
}

// function to search for persons name
function searchPerson() {
    // Get name from field
    let searchQuery = document.querySelector('#name').value;
    // Remove multiple spaces
    searchQuery = Array.from(searchQuery.toLowerCase().replace(/\s+/g, ' ').trim());
    // turn spaces into %20 for url
    let curratedSearch = searchQuery.map(element => {
            if (element === " ") {
                element = '%20'
            }
            return element
        })
        // join string and submit url
    curratedSearch = curratedSearch.join('')
    window.location.replace(`/project-progress.html?${curratedSearch}`);
}

// get form button and add function to search
let searchForm = document.querySelector('.project-search');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchPerson();
})


populatePage(queryString)