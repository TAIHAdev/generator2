const data = {
    _adverb: ['badly', 'deeply', 'never', 'quite', 'strongly', 'horribly'],
    get adverb() {
        let randomNum = Math.floor(Math.random() * this._adverb.length)
        return this._adverb[randomNum]
    },
    _subject: ['the dog', 'your mom', 'your girl friend', 'your best friend', 'the boys', 'nobody','the kitten'],
    get subject() {
        let randomNum = Math.floor(Math.random() * this._adverb.length)
        return this._subject[randomNum]
    },
    _verb: ['analyse', 'assess', 'approach','estimate', 'involve', 'respond', 'link', 'remov', 'commit'],
    get verb() {
        let randomNum = Math.floor(Math.random() * this._adverb.length)
        return this._verb[randomNum]
    },
    _noun: ['time', 'suicide', 'day', 'life', 'world', 'family', 'problem', 'program', 'system', 'number', 'joke'],
    get noun() {
        let randomNum = Math.floor(Math.random() * this._adverb.length)
        return this._noun[randomNum]
    },
}
function generateRandomSentence(data) {
    return `${data.subject} ${data.adverb} ${data.verb} ${data.noun}`
}
console.log(generateRandomSentence(data))