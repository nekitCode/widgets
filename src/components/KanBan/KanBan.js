import { Dom } from '@/components/core/dom';
import { createColumn } from '@/components/Template/createTample';

export class KanBan extends Dom {
    constructor(selector) {
        super();
        this.$el = document.querySelector(selector);
    }
	
	toHTML() {
		this.$el.innerHTML = createColumn();
	}
	
}
