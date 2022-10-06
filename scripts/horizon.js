function Horizon(node){
    let element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "styles/horizon.css");
    document.getElementsByTagName("head")[0].appendChild(element);

    this.main = document.createElement('div')
    this.main.classList.add('horcut')

    this.horizon = document.createElement('div')
    this.horizon.id = 'horizon'
    this.main.appendChild(this.horizon)

    this.angle = document.createElement('div')
    this.angle.id = 'angle'
    this.horizon.appendChild(this.angle)

    let angleScale = ''
    for(let i = 8; i > -10; i--){
        angleScale += `<div class="longline ${i == 0 ? 'invisible':''}"><p>${((i<0)?-i:i)*10 || ''}</p></div>
        <div class="shortline"></div>`
    }
    this.angle.innerHTML = angleScale

    this.setPitch = (a) => this.angle.style.marginTop = `${-370+a*6.4}px`
    this.setRoll = (a) => this.horizon.style.rotate = `${a}deg`

    node.appendChild(this.main)
}

