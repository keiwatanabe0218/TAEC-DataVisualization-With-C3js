var dataset = [
    { "name": "A", "value": 5, "value2": 5},
    { "name": "B", "value": 6, "value2": 4},
    { "name": "C", "value": 8, "value2": 5},
    { "name": "D", "value": 1, "value2": 3},
    { "name": "E", "value": 2, "value2": 2},
    { "name": "F", "value": 6, "value2": 5},
    { "name": "G", "value": 8, "value2": 1},
    { "name": "H", "value": 6, "value2": 2},
    { "name": "I", "value": 10, "value2": 2},
    { "name": "J", "value": 9, "value2": 4}
  ]

var bar_1 = c3.generate({
    size: {
        height: 300,
        width: 800
    },
    bindto: '#bar1',
    data: {
        json: dataset,
        type: 'line',
        keys:{
            x: 'name',
            value: ['value','value2']
        }
    },
    axis: {
        x: {
            type: 'category',
        }
    }
});

var pie1 = c3.generate({
    bindto: '#pie1',
    data: {
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { 
            console.log("onclick", d, i);
            document.getElementById('pie-value').innerText= "クリックした値：" + d.value; 
        }
    }
});

setTimeout(function () {
    pie1.load({
        columns: [
            ["data3",40],
            ["data4", 10, 20]
        ]
    });
}, 1500);


var scatter_data = [
    ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
    ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
]
var scatter1 = c3.generate({
    bindto: '#scatter1',
    data: {
        xs: {
            setosa: 'setosa_x',
            versicolor: 'versicolor_x',
        },
        // iris data from R
        columns: scatter_data,
        type: 'scatter'
    },
    axis: {
        x: {
            label: 'Sepal.Width',
            tick: {
                fit: false
            }
        },
        y: {
            label: 'Petal.Width'
        }
    }
});
