async function setup() {
    let jsonFetch = await fetch("drake_data.json");
    let drakeData = await jsonFetch.json();
    console.log(drakeData);

    let songs = [];
    let trackViews = [];

    for (let entry of drakeData) {
        console.log("Title: " + entry.lyrics_title);
        console.log("Track Views: " + entry.track_views)
        songs.push(entry.lyrics_title);

        trackViews.push(entry.track_views);

    }


    const data = {
        labels: songs,
        datasets: [{
            label: 'My First Dataset',
            data: trackViews,
            backgroundColor: [
                'rgba(148, 0, 211)',
                'rgba(0, 0, 255)',
                'rgba(154, 205, 50)',
                'rgba(250, 128, 114)',
                'rgba(244, 164, 96)',
                'rgba(255, 215, 0)',
                'rgba(0, 100, 0)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 2
        }]
    };


    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}
setup();
