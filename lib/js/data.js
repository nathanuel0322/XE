// import { select,csv } from 'd3';

// const svg = select('svg');

// const width = +svg.attr('width');
// const height = +svg.attr('height');

// csv('data.csv').then(data => {
//     console.log(data);
// })
var myData = [50.56
    ,55.96
    ,60.66,65,79,92,110,130]
var height = 200;
var width= 400;
var barWidth = 40;
var barOffset = 10;

var myChart = d3.select('#stats').append('svg')
            .attr('width',width)
            .attr('height',height)
            .style('background','#696969')
            .selectAll('rect')
               .data(myData)
               .enter().append('rect')
                       .style('fill','lightgreen')
                       .attr('width', barWidth)
                       .attr('height',function(d){
                           return d;
                       })
                       .attr('x',function(d,i){
                           return i*(barWidth + barOffset);
                       })
                       .attr('y',function(d){
                           return height - d;
                       })