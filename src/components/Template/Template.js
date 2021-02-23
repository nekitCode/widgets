import {Dom} from '@/components/core/dom';

export class Template extends Dom {
    constructor() {
		super();
		 this.$wrap = document.querySelectorAll('.wrapper-kanBan');
		 this.arrCard = [];
		 this.arrDropZone = [];
    }

 	addDropzone() {
	 		this.$wrap.forEach(elem => {
				this.dropZone = this.createElement('div', 'dropZone');
				this.addKanBan = this.createElement('button', 'add-card');
				this.addKanBan.innerHTML = 'add Card'
				this.dropZone.append(this.addKanBan);
				elem.append(this.dropZone);
				this.arrCard.push(this.addKanBan);
				this.arrDropZone.push(this.dropZone);
			});

	 }



}