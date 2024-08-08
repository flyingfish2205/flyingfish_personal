

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
    
    console.log(latestSpecies);
    console.log(date);
    console.log(imageLink);
    
}

async function exportHTML(){   
    data = await getData();
    mostRecentObs = await data['results'][0];
    latestSpecies = mostRecentObs['species_guess'];  
    imageLink = mostRecentObs['photos'][0]['url'];
    date = mostRecentObs['created_at_details']['date'];
    //document.write("Most recent Inat Observation <br>");
    //document.write(`${latestSpecies}`);
    //image =  document.createElement("img");
    //image.src = imageLink;
}

formatData();
exportHTML();