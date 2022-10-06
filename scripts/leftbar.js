function LeftBar(node) {
    this.main = document.createElement('div')
    this.main.classList.add('leftbar')
    this.main.style.width = '70px'
    this.main.style.height = '300px'
    this.main.style.backgroundColor = 'rgb(143, 140, 140)'
    this.main.style.margin = '50px 0 0 10px'
    node.appendChild(this.main)

    this.DoSomething = ()=>{console.log('left bar')}
}