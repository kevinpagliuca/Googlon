const fooType = ['s', 'j', 'n', 'c', 'q'];

export async function getVerbs(text) {
  const splitedTxt = await text.split(' ', text.length);
  const Verbs = [];
  const firstPerson = [];

  splitedTxt.map(txt => {
    if (txt.length >= 7) {
      while (
        txt.substr(txt.length - 1, 1) !== 's' &&
        txt.substr(txt.length - 1, 1) !== 'j' &&
        txt.substr(txt.length - 1, 1) !== 'n' &&
        txt.substr(txt.length - 1, 1) !== 'c' &&
        txt.substr(txt.length - 1, 1) !== 'q') {
        if (
          txt.substr(0, 1) === 's' ||
          txt.substr(0, 1) === 'j' ||
          txt.substr(0, 1) === 'n' ||
          txt.substr(0, 1) === 'c' ||
          txt.substr(0, 1) === 'q') {
          Verbs.push(txt);
          return firstPerson.push(txt);
        }

        return Verbs.push(txt);
      }
    }
    return 0;
  })

  console.log(Verbs.length + " Verbos ", firstPerson.length + " Verbos em primeira pessoa");
}