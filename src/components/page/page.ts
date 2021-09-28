import { BaseComponent } from "../compoent.js"
export class PageComponent extends BaseComponent<HTMLUListElement> {
    constructor() {
        super('<ul class="page">This is PageComponent!</ul>')
    }
}