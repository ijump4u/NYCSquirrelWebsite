// CHARTS START
function get(id){
  return document.getElementById(id);
}


function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}
// CHARTS END