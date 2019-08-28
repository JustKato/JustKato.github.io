function PreLoadContainers() {
    $.ajax({
        url: `/Database/containers.json`,
        type: `get`,
        complete: (msg) => {
            if (msg.status == 200) {
                LoadContainers(JSON.parse(msg.responseText));
            } else {
                console.error("There has been an error loading the database, disabling the website.")
            }
        }
    })
}

function LoadContainers(container_data) {
    let abilities = container_data.abilities;
    let projects = container_data.projects;

    for (let i = 0; i < abilities.length; i++) {
        let html =
            `
            <div class="section">
                <div class="section-title">${abilities[i].title}</div>
                <div class="description">${abilities[i].description}</div>
                <div class="bg-img" style="background-image: url('${abilities[i]["bg-image"]}')"></div>
                <div class="bg-gradient"></div>
            </div>
            `;
        $('.container[category="experience"]').append(html);
    }

    for (let i = 0; i < projects.length; i++) {
        let html =
            `
            <div class="section">
                <div class="section-title">${projects[i].title}</div>
                <div class="description">${projects[i].description}</div>
                <div class="bg-img" style="background-image: url('${projects[i]["bg-image"]}')"></div>
                <div class="bg-gradient"></div>
            </div>
            `;
        $('.container[category="projects"]').append(html);
    }

}