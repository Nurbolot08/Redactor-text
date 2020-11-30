let input = document.getElementById("text-input")
let output = document.getElementById("text-output")
document.getElementById("text-input").oninput = copySecondArea

function copySecondArea(elem) {
    let text = input.value
    output.innerText = text
}

function fontItalic(elem) {
    output.classList.toggle('font-italic')
    elem.classList.toggle('active')
}

function fontBold(elem) {
    output.classList.toggle('font-weight-bold')
    elem.classList.toggle('active')
}

function textThrough(elem) {
    output.classList.remove('underline')
    output.classList.toggle('line-through')
    document.querySelectorAll('.decoration').forEach((btnAlign) => {
        if (elem !== btnAlign) {
            btnAlign.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textUnderline(elem) {
    output.classList.remove('line-through')
    output.classList.toggle('underline')
    document.querySelectorAll('.decoration').forEach((btnAlign) => {
        if (elem !== btnAlign) {
            btnAlign.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textDanger(elem) {
    let colors = ['text-primary', 'text-success']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-danger')
    document.querySelectorAll('.color').forEach((btnAlign) => {
        if (elem !== btnAlign) {
            btnAlign.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textPrimary(elem) {
    let colors = ['text-danger', 'text-success']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-primary')
    document.querySelectorAll('.color').forEach((btnAlign) => {
        if (elem !== btnAlign) {
            btnAlign.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textSuccess(elem) {
    let colors = ['text-primary', 'text-danger']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-success')
    document.querySelectorAll('.color').forEach((btnAlign) => {
        if (elem !== btnAlign) {
            btnAlign.classList.remove('active')
        }

    })
    elem.classList.toggle('active')
}

function textCenter(elem) {
    output.style.textAlign = "center";
    document.querySelectorAll('.align').forEach((btnAlign) => {
        btnAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}

function textRight(elem) {
    output.style.textAlign = "right";
    document.querySelectorAll('.align').forEach((btnAlign) => {
        btnAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}

function textLeft(elem) {
    output.style.textAlign = "left";
    document.querySelectorAll('.align').forEach((btnAlign) => {
        btnAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}

function textLowercase(elm) {
    let cases = ['text-uppercase']
    cases.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-lowercase')
    document.querySelectorAll('.text').forEach((btnAlign) => {
        if (elm !== btnAlign) {
            btnAlign.classList.remove('active')
        }
    })
    elm.classList.toggle('active')
}

function textUppercase(elm) {
    let cases = ['text-lowercase']
    cases.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-uppercase')
    document.querySelectorAll('.text').forEach((btnAlign) => {
        if (elm !== btnAlign) {
            btnAlign.classList.remove('active')
        }
    })
    elm.classList.toggle('active')
}