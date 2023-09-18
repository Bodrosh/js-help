class DefaultText {
    write(text) {
        console.log(text)
    }
}
class UpperCaseText {
    write(text) {
        console.log(text.toUpperCase())
    }
}
class LowerCaseText {
    write(text) {
        console.log(text.toLowerCase())
    }
}
class TextEditor {
    constructor() {
        this.states = [
            new DefaultText(),
            new UpperCaseText(),
            new LowerCaseText(),
        ]
        this.current = this.states[0]
    }
    setState(type) {
        switch (type) {
            case 'upperCase':
                this.current = this.states[1]
                break
            case 'lowerCase':
                this.current = this.states[2]
                break
            default:
                this.current = this.states[0]
                break
        }
    }
    write(text) {
        this.current.write(text)
    }
}

const editor = new TextEditor()
editor.write('Привет, мир!')

editor.setState('upperCase')
editor.write('Привет, мир!')

editor.setState('lowerCase')
editor.write('Привет, мир!')