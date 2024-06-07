if (navigator.geolocation) {
    let lat, long;
    window.navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        if (lat !== undefined && long !== undefined) {
            let map = L.map('map').setView([lat, long], 15);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: 'ASIF KAMAL TIAS'
            }).addTo(map);

            const marker = L.marker([lat, long]).addTo(map);
            marker.bindPopup("<strong>Here is you.</strong>").openPopup();
        }
        else {
            alert('Please turn on your location.');
        }

    }, (error) => {
        alert(`ERROR(${err.code}): ${err.message}`);
    }, {
        enableHighAccuracy: true
    });
}
else {
    alert(`Geolocation is not supported by this system.`)
}