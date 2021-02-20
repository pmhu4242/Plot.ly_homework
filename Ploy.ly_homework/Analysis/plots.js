

//     var trace1 = {
//         x: data.map(item => item.names),
//         y: data.map(row => row.otu_ids),
//         text: data.map(row => row.sample_values),
//         name: "Belly Button OTU's'",
//         type: "bar",
//         orientation: "h"

//     };

//     var traceData = [trace1];

//     var layout = {
//         title: "Belly Button OTU's'"
//     };

//     Plotly.newPlot("plot", traceData, layout);
// });

// function init()
function init() {


    function unpack(rows, index) {
        return rows.map(function(row) {
        return row[index];
        });
    };
        

        d3.json("../data/samples.json").then((importedData) => {
            var data = importedData;

            var names = data.names
            var metadata = data.metadata
            var samples = data.samples
            
            console.log(names);
            console.log(metadata);
            console.log(samples);
            
            var otu = [];
            console.log(otu)
            var otu_ids = [];
            var sample_values = [];


            for (var i = 0; i < samples.length; i++)

                var otu = samples[i].otu_labels;
                console.log(otu);
                otu.push(otu)

                var otu_ids = samples[0].otu_ids
                console.log(otu_ids);
                otu_ids.push(otu_ids)

                var sample_values = samples[0].sample_values;
                console.log(sample_values);
                sample_values.push(sample_values)
                
            var numArray3 = [sample_values];
                numArray3.sort((firstNum, secondNum) => firstNum - secondNum);
                console.log(numArray3);   
            var top10otu = sample_values.slice(0,10);
                console.log(top10otu);
                

                d3.selectAll("#selDataset").on("change", updatePlotly);

                      function updatePlotly() {
                          var dropdownMenu = d3.select("#selDataset");
                          var dataset = dropdownMenu.property("value")
            // function init() {
            //     data = [trace1];
                
            //     Plotly.newPlot("bar", data);
            //   }


        //       d3.selectAll("#selDataset").on("change", updatePlotly);

        //     //   function updatePlotly() {
        //     //       var dropdownMenu = d3.select("#selDataset");
        //     //       var dataset = dropdownMenu.property("value")
                
        //     //      
        // });           




        // // 


        

                
            var trace1 = {
                x: top10otu,
                y: otu_ids,
                text: otu,
                name: "Belly Button OTU's",
                type: "bar",
                orientation: "h"
                };

            var chartData = [trace1];
            console.log(trace1);

            var layout = {
                title: "Top 10 Belly Button OTU's",
                margin: {
                    l: 100,
                    r: 100,
                    t: 100,
                    b: 100,
                }
                }
                

            Plotly.newPlot('bar', trace1, layout);
    };
    });
};


        
init()   
        
        

