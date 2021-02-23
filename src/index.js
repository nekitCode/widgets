import './scss/index.scss'
import {KanBan} from "@/components/KanBan/KanBan";
import {Template} from '@/components/Template/Template';
import {Listeners} from '@/components/core/Listeners';

window.addEventListener('DOMContentLoaded', () => {
    const kanban = new KanBan('#app');
    kanban.toHTML();
	const template = new Template();
	const listeners = new Listeners();
	listeners.toHTML();
	listeners.addKanBanCard();
});


