function HeightBar(node) {
    let element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "styles/heightbar.css");
    document.getElementsByTagName("head")[0].appendChild(element);

    this.main = document.createElement('div')
    this.main.classList.add('heightbar')
    node.appendChild(this.main)

    this.DoSomething = ()=>{console.log('height bar')}
}