var data = [{
    start: '10-05-2018',
    assigned_agent: '1257434'
  },
  {
    start: '10-05-2018',
    assigned_agent: '1257434'
  },
  {
    start: '10-05-2018',
    assigned_agent: '1257434'
  },
  {
    start: '10-05-2019',
    assigned_agent: '1257434'
  },
  {
    start: '10-05-2019',
    assigned_agent: '1277852'
  },
  {
    start: '10-05-2019',
    assigned_agent: '1277852'
  }
];

var grouped = data.reduce((accumulator, element) => {
    // group by start and agent, so combine values for unique key
    var key = element.start;
    
    // if there is not already a grouping, make an empty array
    accumulator[key] = accumulator[key] || [];
    
    // add the element to the desired group
    accumulator[key].push(element);
    
    // return the accumulator for the next iteration
    return accumulator;
}, {});

console.log(grouped);