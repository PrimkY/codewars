const points=games=>games.reduce((acc,current)=>{
  return acc += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)