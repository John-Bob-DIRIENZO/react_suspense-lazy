export default function PromisesDemo() {

    const promise1 = Promise.resolve('Francis');
    const promise2 = 'Pas vraiment une promesse';
    const promise3 = new Promise(resolve => {
        setTimeout(() => resolve(25), 2000);
    });

    Promise.all([promise1, promise2, promise3])
        .then(values => console.log(values))
    // Une fois que tout est résolu (ou qu'une rate) j'ai un retour
    // ce retour est une promesse contenant un tableau avec
    // les valeurs des promesses résolues, ici je vais avoir
    // Array(3) [ "Francis", "Pas vraiment une promesse", 25 ]

    return <></>
}
