const gh = c3.generate({
    bindto: '#gh',
    data: {
        url: "./data/data.json",
        mimeType: 'json',
        type: 'scatter',
        xs: {
            first_floor: 'first_floor_x',
            second_floor: 'second_floor_x'
        }
    }

});