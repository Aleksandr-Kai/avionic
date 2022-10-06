function RightBar(node) {
    let element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "styles/rightbar.css");
    document.getElementsByTagName("head")[0].appendChild(element);

    this.main = document.createElement('div')
    this.main.classList.add('rightbar')
    this.main.innerHTML = `<ul>
    <li></li>
    <li><p>6</p></li>
</ul>
<ul>
    <li></li>
    <li><p>4</p></li>
</ul>
<ul>
    <li></li>
    <li><p>2</p></li>
</ul>
<ul>
    <li></li>
    <li><p>1</p></li>
</ul>
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li style="background-color: aliceblue;"><p style="color: aliceblue;">0</p></li>
</ul>
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li><p>1</p></li>
</ul>
<ul>
    <li></li>
    <li><p>2</p></li>
</ul>
<ul>
    <li></li>
    <li><p>4</p></li>
</ul>
<ul>
    <li></li>
    <li><p>6</p></li>
</ul>
<ul>
    <li></li>
    <li></li>
</ul>`
    this.arrow = document.createElement('div')
    this.arrow.id = 'arrow'
    this.main.appendChild(this.arrow)
    node.appendChild(this.main)

    this.setValue = (a)=>{this.arrow.style.rotate = `${a}deg`}
}