var url = window.location.search;
url = url.replace("?", ''); // remove the ?
url = url.replace("%20", ' '); // remove the %20 and replace with space
url = url.toLowerCase() // remove case sensitivity

console.log(url)
let obj = clientTracker.find(item => item.name.toLowerCase() === url || item.nameTwo.toLowerCase() === url);

function populatePage() {

    // client name in title
    let clientName = document.querySelector('#client-name');
    clientName.innerHTML = obj.name;
    if (obj.nameTwo !== "") {
        clientName.innerHTML += " & " + obj.nameTwo;
    }

    // Populate project reusable elements
    let statusPrefix = `<span class="bold-text">Status: </span>`
    let datePrefix = `<span class="bold-text">Last Activity: </span>`
    let notesPrefix = `<span class="bold-text">Notes: </span>`

    // List of deliverables
    let projectDeliverables = ['logo', 'businessCard', 'video', 'website'];

    for (let i = 0; i < projectDeliverables.length; i++) {
        // get object for project item
        let deliverable = projectDeliverables[i]

        // get content from project item object
        let projectContainer = document.querySelector('#' + deliverable)
        let projectContent = document.querySelector('#' + deliverable + ' .projectContent')
        let status = obj[deliverable][`${deliverable}_status`];
        let date = obj[deliverable][`${deliverable}_date`];
        let notes = obj[deliverable][`${deliverable}_notes`];

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

populatePage(obj)