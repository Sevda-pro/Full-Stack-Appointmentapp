window.addEventListener("DOMContentLoaded", ()=>{

document.getElementById("btn").addEventListener("click",myFunc(e));


});
function myFunc(e) {
    e.preventDefault;
    console.log("Button Clicked")
    config = {
      method: 'get',
      url: 'localhost:3000/customers'
    }
    axios(config).then((res) => {
      document.getElementById("divdata").innerHTML = `<div>${res.data}</div>`
    }).catch((error) => {
      console.log(error)
    })
  }