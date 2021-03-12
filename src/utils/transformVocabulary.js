export function transformVocabulary(vocabulary, alfabet) {
    const splitedVocabulary = vocabulary.split(' ', vocabulary.length);

    var result = 0;
    var newVocabulary = [];

    splitedVocabulary.map(word => {
        for (var i = 0; i < word.length; i++) {
            const value = alfabet.indexOf(word[i]);
            result = result + (value * (Math.pow(20, i)));
        }       

        if (result % 5 === 0 && result >= 563131) {
            newVocabulary.push(result);
        }        

    });



    const filtered = newVocabulary.filter((text, index, array) => {
        return array.indexOf(text) === index;
    });
    
    console.log(filtered);
}