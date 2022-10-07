function SpeedBar(node) {
    this.main = document.createElement('div')
    this.main.classList.add('bar')
    this.main.style.margin = '100px 0 0 10px'
    node.appendChild(this.main)

    this.DoSomething = ()=>{}
}