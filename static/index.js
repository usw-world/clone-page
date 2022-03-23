function slideBanner (sliderElement, configs) {
    sliderElement.classList.add("us-slider");
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

    let mommyChevron = document.createElement("div");
    mommyChevron.className = "chevrons";

    let chevronLeft = document.createElement("span");
    let chevronRight = document.createElement("span");
    chevronLeft.classList.add("icon-chevron-left")
    chevronRight.classList.add("icon-chevron-right")

    mommyChevron.appendChild(chevronLeft);
    mommyChevron.appendChild(chevronRight);

    sliderElement.appendChild(mommyChevron);
}

slideBanner(document.querySelector("#slide-banner"), {
    listClass: "slide-banner-list",
    childClass: "slide-banner-item"
})