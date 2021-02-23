// import { Dom } from "@/components/core/dom";

function toColumn(nameCol) {
    return `
	<div class="container">
        <div class="wrapper-kanBan">
            <div class="template">
<!--                <div class="template__btn-add">+</div>-->
                <div class="template__name-column">${nameCol}</div>
            </div>
        </div>
	</div>
    `;
}

export function createColumn() {
    let arrNameCol = ['Backlog', 'In Progress', 'Testing', 'Done'];
    let col = [];

    arrNameCol.map(nameCol => {
        col.push(toColumn(nameCol));
    });

    return col.join('');
};
