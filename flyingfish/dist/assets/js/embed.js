

async function getData(){
    const url = "https://api.inaturalist.org/v1/observations?user_id=flyingfish2205&user_login=flyingfish2205&order=desc&order_by=created_at"
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const observations = await response.json();
        return observations;                            
    }catch (error) {
        console.error (error.message);
    }
}




async function formatData(){
   
}

async function exportHTML(){   
    var data = await getData();
    var mostRecentObs = await data['results'][0];
    var latestSpecies = await mostRecentObs['species_guess'];  
    var imageLink = mostRecentObs['photos'][0]['url'];
    var date = mostRecentObs['created_at_details']['date'];
    var div = document.getElementById('inat');
    var divImage = document.getElementById('image');
    var divCaption = document.getElementById("caption");
    const linebr = document.createElement("br");
    div.append(`Latest Inaturalist Observation: \n`);

    const image = new Image();
    image.src = imageLink;
    divImage.appendChild(image);
    divCaption.append(`Species: ${latestSpecies}`);
    divCaption.append(linebr);
    divCaption.append(`Date: ${date}`);

    console.log(latestSpecies);
    console.log(date);
    console.log(imageLink);  
  
}
exportHTML();