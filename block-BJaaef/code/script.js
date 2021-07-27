let rootElement=document.createElement("ul");
got.houses.forEach((house)=>{
    let li=document.createElement("li");
    let img=document.createElement("img");
    img.src=house.image;
    img.alt=house.name;
    let h3=document.createElement("h3");
    h3.innerText=house.name;
    let p=document.createElement("p");
    p.innerText=house. description;
    let button= document.createElement("button");
    /*button.src=house.wikiLink;*/
    button.innerText=house.wikiLink;
    li.append(img,h3,p,button);
    rootElement.append(li);
    

});

