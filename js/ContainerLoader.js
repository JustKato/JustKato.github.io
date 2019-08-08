function PreLoadContainers() {
    $.ajax({
        url: `http://justkato.me/Database/containers.json`,
        type: `get`,
        complete: (msg) => {
            if ( msg.status == 200 ) {
                LoadContainers(JSON.parse(msg.responseText));
            } else {
                console.error("There has been an error loading the database, disabling the website.")
            }
        }
    })
}

function LoadContainers(container_data) {
    console.log(container_data);
}