export async function getPreposition(text) {
    const splitedTxt = await text.split(' ', text.length);
    const results = [];

    splitedTxt.map(txt => {
        if (txt.length === 4 && txt.indexOf("l") < 0) {
            while (
                txt.substr(txt.length - 1, 1).indexOf('s') >= 0 ||
                txt.substr(txt.length - 1, 1).indexOf('j') >= 0 ||
                txt.substr(txt.length - 1, 1).indexOf('n') >= 0 ||
                txt.substr(txt.length - 1, 1).indexOf('c') >= 0 ||
                txt.substr(txt.length - 1, 1).indexOf('q') >= 0) {

                return results.push(txt);
            }
        }
        return 0;
    });
    console.log(results);
}