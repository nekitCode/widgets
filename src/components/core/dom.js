export class Dom {

    createElement = (tagName, classes) =>{
        const $elem = document.createElement(tagName);

        if (classes) {
            $elem.classList.add(classes);
        }

        return $elem;
    }
}

