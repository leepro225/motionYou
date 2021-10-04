import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, Composable, PageItemComponent } from "./components/page/page.js";
import { Component } from "./components/compoent.js";
import { InputDialog } from "./components/dialog/dialog.js";

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        const video = new VideoComponent('text', 'https://www.youtube.com/watch?v=7EcbNurbwKg');
        this.page.addChild(video);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
    
        const note = new NoteComponent('Note title', 'Note Body');
        this.page.addChild(note);

        const todo = new TodoComponent('Todo title', 'input');
        this.page.addChild(todo);

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });

            dialog.attachTo(document.body);
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement)