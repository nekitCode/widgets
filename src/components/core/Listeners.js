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

// export class KanBan {
//     constructor(selector, collections) {
//         this.$el = document.querySelector(selector);
//         this.$coll = collections;

//         this.dragitem = null;
//         this.dropItem = null;

//     }

//     render() {
//         //////////////////////////////////////////////
//         this.$coll.dragItem.forEach(elem => {
//             elem.addEventListener('dragstart', (e) => {
//                 this.dragitem = elem;
//                 requestAnimationFrame(() => {
//                     e.target.classList.add('hide');
//                 });
//             });

//             elem.addEventListener('dragend', () => {
//                 elem.classList.remove('hide');
//                 this.dropItem = null;

//             });

//             elem.addEventListener('dragenter', () => {
//                 if (this.dragitem !== this.dropItem) {
//                     this.dropItem = elem;
//                     console.log(this.dragitem, this.dropItem);
//                 }
//             });

//             elem.addEventListener('dragleave', () => {
//                 this.dropItem = null;
//             });
//         });
// //////////////////////////////////////////////
//         this.$coll.dropZone.forEach(element => {
//             element.addEventListener('dragover', (e) => {
//                 e.preventDefault();
//             });

//             element.addEventListener('dragenter', (event) => {
//                 event.preventDefault();
//                 element.classList.add('hoverEffect');
//             });

//             element.addEventListener('dragleave', () => {
//                 element.classList.remove('hoverEffect');
//             });

//             element.addEventListener('drop', (e) => {
//                 if (this.dropItem) {
//                     if (this.dropItem.parentElement === this.dragitem.parentElement) {
//                         // console.log(this.dropItem.parentElement, this.dragitem.parentElement);
//                     }
//                 }
//                 // console.log(this.dragitem.parentElement);
//                 // element.append(this.dragitem);
//                 element.classList.remove('hoverEffect');


//                 // if (this.dropItem) {
//                 //     if (this.dropItem.parentElement === this.dragitem.parentElement) {
//                 //         const children = Array.from(this.dropItem.parentElement.children);
//                 //         const draggedIndex = children.indexOf(this.dragitem);
//                 //         const droppeddIndex = children.indexOf(this.dropItem)
//                 //         if (draggedIndex > droppeddIndex) {
//                 //             console.log(draggedIndex, droppeddIndex);
//                 //             console.log(this.dragitem.parentElement.insertBefore(this.dragitem, this.dropItem));
//                 //         }else {
//                 //             this.dragitem.parentElement.insertBefore(
//                 //                 this.dragitem,
//                 //                 this.dropItem.nextElementSibling
//                 //                 );
//                 //         }
//                 //     }else {
//                 //         element.insertBefore(this.dragitem, this.dropItem);
//                 //     }
//                 // } else {
//                 //     element.append(this.dragitem);
//                 //     element.classList.remove('hoverEffect');
//                 // }
//             });
//         });
// //////////////////////////////////////////////
//     }
// }