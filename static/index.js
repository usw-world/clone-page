function slideBanner (sliderElement, configs) {
    const CHILD_CLASSNAME = configs.childClass || "slide-banner-item";
    const LIST_CLASSNAME = configs.listClass || "slide-banner-items";

    let slideList = document.createElement("ul");
    slideList.className = LIST_CLASSNAME;
    
    for(let i=sliderElement.childNodes.length; i>0; i--) {
        console.log(sliderElement.childNodes[0].nodeType);
        if(sliderElement.childNodes[0].nodeType === 1) {
            slideList.appendChild(sliderElement.childNodes[0]);
        } else {
            sliderElement.appendChild(sliderElement.childNodes[0]);
        }
    }
    sliderElement.appendChild(slideList);
    slideList.childNodes.forEach(child => {
        let li = document.createElement("li");
        li.innerHTML = child.innerHTML;
        child.classList.forEach(className => {
            li.classList.add(className);
        });
        li.classList.add(CHILD_CLASSNAME);
        slideList.replaceChild(li, child);
    })
}

slideBanner(document.querySelector("#slide-banner"), {
    listClass: "slide-banner-list",
    childClass: "slide-banner-item"
})