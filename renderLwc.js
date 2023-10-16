import { LightningElement } from 'lwc';
import secondTemplate from './secondtemplate.html';
import parent from './renderLwc.html';

export default class RenderLwc extends LightningElement {

    toggleTemplate = false;

    render(){
        return this.toggleTemplate?secondTemplate:parent;
    }

    renderedCallback(){
        console.log('Inside renderedCallback');
    }

    handleClick(){
        this.toggleTemplate=this.toggleTemplate?false:true;
    }
}
