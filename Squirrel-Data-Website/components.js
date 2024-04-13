class FlipCard{
  constructor(front,back){
    this.front = front;
    this.back = back;
  }
  render(container){
    this.obj = document.createElement("div");
    this.obj.setAttribute("class","flip-card");
    this.obj.addEventListener("click",()=>{
      console.log(this.obj);
      this.obj.classList.toggle("flip");
    })
    let build = "";
    build += `<div class="flip-front">${this.front}</div>`
    build += `<div class="flip-back">${this.back}</div>`

    this.obj.innerHTML = build
    document.getElementById(container).append(this.obj)
  }
}
