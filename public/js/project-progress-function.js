// Need to add Query String!!!!!
// Need to add Query String!!!!!
// Need to add Query String!!!!!
// Need to add Query String!!!!!

function populatePage() {

    // client name in title
    let clientName = document.querySelector('#client-name');
    clientName.innerHTML = clientTracker[0].name;

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
        let status = clientTracker[0][deliverable][`${deliverable}_status`];
        let date = clientTracker[0][deliverable][`${deliverable}_date`];
        let notes = clientTracker[0][deliverable][`${deliverable}_notes`];

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


        console.log(status, date, notes)
    }

}