function toColumn(nameCol,color) {
    return `
	<div class="container">
        <div class="wrapper-kanBan">
            <div class="template">
                <div class="template__name-column">${nameCol}</div>
            </div>
            <div class="line" style="border: 3px solid ${color}"></div>
        </div>
	</div>
    `;
}

export function createColumn() {
    let arrNameCol = ['Backlog', 'In Progress', 'Testing', 'Done'];
    let arrColor = ['#f69346','#18c6b3','#ffbf13','#0d92ff'];
    let col = [];

    for (let i = 0; i < 4; i++) {
        col.push(toColumn(arrNameCol[i], arrColor[i]));
    }

    return col.join('');
}
