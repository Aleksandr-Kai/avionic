function HeightBar(node) {
    this.main = document.createElement('div')
    this.main.classList.add('bar')
    this.main.style.margin = '100px 10px 0 0'
    this.main.appendChild(createHeightPointer())
    node.appendChild(this.main)

    this.DoSomething = ()=>{console.log('height bar')}
}

function createHeightPointer(){
    let p = document.createElement('div')
    
    p.style.border = '1px solid yellow'
    p.style.backgroundColor = 'black'
    p.style.width = '68px'
    p.style.height = '30px'
    p.style.marginTop = '120px'

    return p
}