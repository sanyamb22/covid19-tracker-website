function updateMap() {
    fetch("./data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>=500 && cases<1500){
                    color = "rgb(252, 78, 3)";
                }
                else if(cases>=1500){
                    color = "rgb(252, 3, 3)"
                }
                else{
                    color = "rgb(54, 23, 23)"
                }

                // mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color 
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}

updateMap();