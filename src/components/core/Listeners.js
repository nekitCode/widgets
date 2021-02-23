import {Template} from "@/components/Template/Template";

export class Listeners extends Template {
    constructor() {
        super();
        this.draggedItem = null;
        this.droppedItem = null;
        this.arrDragItem = [];

        this.dropzone();

    }

    toHTML() {
        super.addDropzone();
    }

    addKanBanCard() {
        this.arrCard.forEach(btn => {
            btn.addEventListener('click', event => {
                let pNode = event.target.closest('.dropZone');

                const dragItem = this.createElement('div', 'dragItem');
                dragItem.setAttribute('draggable', 'true')
                this.verticalLine = this.createElement('div', 'dragItem__vertical-line');
                dragItem.append(this.verticalLine);

                const kanBanBody = this.createElement('div', 'kanBan-body');
                this.input = this.createElement('input', 'kanBan-body__input');
                const userAvatar = this.createElement('div', 'kanBan-body__user-avatar');
                this.settings = this.createElement('div', 'dragItem__settings');
                kanBanBody.append(this.input, userAvatar, this.settings);
                dragItem.append(kanBanBody);

                pNode.append(dragItem);
                // this.arrDragItem.push(dragItem);
                this.dragitem(dragItem);
            })
        });
    }

    dropzone() {

    }

    dragitem(...e) {
        e.forEach(f => {
            f.addEventListener('click', (e) => {
                console.log(e.target)
            })
        })
    }
}
