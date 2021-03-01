import {Template} from "@/components/Template/Template";

export class Listeners extends Template {
    constructor() {
        super();
        this.draggedItem = null;
        this.droppedItem = null;
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
                this.dragitem(dragItem);
            })
        });
    }

    dragitem(...item) {
        item.forEach(element => {
            element.addEventListener('dragstart', () => {
                this.draggedItem = element;
                requestAnimationFrame(() => {
                    element.classList.add('hide');
                });
            });
            element.addEventListener('dragend', this.dragEnd);

            element.addEventListener('dragenter', () => {
                if (this.draggedItem !== this.droppedItem) {
                    this.droppedItem = element;
                }
            });

            element.addEventListener('dragleave', () => {
                this.droppedItem = null;
            });
        });
    }

    dragEnd() {
        this.droppedItem = null;
        this.classList.remove('hide');
    }

	dropzone() {
		this.arrDropZone.forEach(drop => {
			drop.addEventListener('dragover', this.dragOver);
			drop.addEventListener('dragenter', this.dragEnter);
			drop.addEventListener('dragleave', this.dragLeave);
			drop.addEventListener('drop', () => {

                    if (this.droppedItem) {
                        if (this.droppedItem.parentElement === this.draggedItem.parentElement) {
                            const children = Array.from(this.droppedItem.parentElement.children);
                            const dragIndex = children.indexOf(this.draggedItem);
                            const dropIndex = children.indexOf(this.droppedItem);
                            if (dragIndex > dropIndex) {
                                this.draggedItem.after(this.droppedItem)
                            } else {
                                this.draggedItem.before(this.droppedItem);
                            } 
                        }
                    }else {
                        drop.append(this.draggedItem);
                        drop.classList.remove('hoverEffect');
                    }
            });
		});
	}
	
	dragOver(event) {
		event.preventDefault();
	}
	
	dragEnter(event) {
		event.preventDefault();
		this.classList.add('hoverEffect');
	}
	
	dragLeave() {
		this.classList.remove('hoverEffect');
	}

}
