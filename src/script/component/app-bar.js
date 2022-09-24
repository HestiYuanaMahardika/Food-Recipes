class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
           :host {
                display: block;
                width: 100%;
                height: 250px;
                background: linear-gradient(90deg, #C36A2D, rgb(248, 133, 57));
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                color: #ffc266;
                position: center;
                font-family: 'Brush Script', cursive;
                font-weight: 700;
                text-transform: none;
                font-size: 27px;
            }
            h4 {
                padding-left: 20px;
                color: #ffc266;
                font-size: 15px;
            }
            
        </style>
        
        <br>
        <h2>Food Receipe Finder from All Over The World</h2><br>
        <h4>Try Now !</h4>
        `;
    }
}
customElements.define("app-bar", AppBar);