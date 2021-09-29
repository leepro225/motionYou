import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const video = new VideoComponent('text', 'https://www.youtube.com/watch?v=7EcbNurbwKg');
        video.attachTo(appRoot, 'beforeend');

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
    
        const note = new NoteComponent('Note title', 'Note Body');
        note.attachTo(appRoot, 'beforeend');

        const todo = new TodoComponent('Todo title', 'input');
        todo.attachTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.document')! as HTMLElement)