export class MainView extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/`
        <div>Holi<div>
        `
    }
}
customElements.define('main-view',MainView)