function RightBar(node) {
    let element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "styles/rightbar.css");
    document.getElementsByTagName("head")[0].appendChild(element);

    this.main = document.createElement('div')
    this.main.classList.add('rightbar')
    this.main.classList.add('bar')
    this.main.innerHTML = `<ul>
    <li><p>6</p></li>
    <li></li>
    <li><p>4</p></li>
    <li></li>
    <li><p>2</p></li>
    <li></li>
    <li><p>1</p></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li style="background-color: aliceblue;"><p style="color: aliceblue;">0</p></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li><p>1</p></li>
    <li></li>
    <li><p>2</p></li>
    <li></li>
    <li><p>4</p></li>
    <li></li>
    <li><p>6</p></li>
</ul>`
    this.arrow = document.createElement('div')
    this.arrow.id = 'arrow'
    this.main.appendChild(this.arrow)
    node.appendChild(this.main)

    this.setValue = (a)=>{
        a = (a > 1 || a < -1)?35+a*3.7:a*35
        this.arrow.style.rotate = `${a}deg`
    }
}