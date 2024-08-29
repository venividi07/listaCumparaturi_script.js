let listaCumparaturi = ['apples', 'detergent', 'tea', 'beans', 'cookies'];

function cautaProdus(element){
    let indexElement = listaCumparaturi.indexOf(element);
    if (indexElement !== -1){
        return `${element} e in array cu indexul ${indexElement}`;
    } else {
        console.log('Elementul chemat nu se afla in lista');
    }
};
console.log(cautaProdus('margarina'));

function adaugaProdus(lista, produs){
    if (!listaCumparaturi.includes(produs)){
        listaCumparaturi.push(produs)
        console.log(`Am adaugat ${produs} in lista`);
    } else {
        console.log(`Lista nu are ${produs}`);
    }
    return listaCumparaturi;
};
console.log(adaugaProdus(listaCumparaturi, 'mango')); 
console.log(adaugaProdus(listaCumparaturi, 'margarina')); 

function eliminaProdus(lista, produs){
    const index = listaCumparaturi.indexOf(produs);
    if (listaCumparaturi.includes(produs)){
        listaCumparaturi.pop(produs);
        console.log(`Am scos ${produs} din lista`);
    } else {
        console.log(`${produs} nu a fost gasit`);
    }
    return listaCumparaturi;
};
console.log(eliminaProdus(listaCumparaturi, 'tea'));
