window.inn = async function (e) {
         let currentLatex = mathField.latex();

    console.log(e);
    if(e=="a^2"){

    mathField.write(`^2`);
    }else if(e=="a^b"){
        mathField.write(`^{}`);
    }else if(e=="sqrt{x}"){
        mathField.write(`\\sqrt{{}}`);
    }else if(e=="frac{d}{dx}"){
        mathField.write(`\\frac{d}{dx}`);
    }else if(e=="lim_{x\\to a}"){
        mathField.write(`\\lim_{x\\to a}`);
    }else if(e=="frac{a}{b}"){
        mathField.write(`\\frac{}{}`);
    }else if(e=="sin"){
        mathField.write(`sin`);
    }else if(e=="cos"){
        mathField.write(`cos`);
    }else if(e=="tan"){
        mathField.write(`tan`);
    }else if(e=="sin1"){
        mathField.write(`sin^{-1}`);
    }else if(e=="cos1"){
        mathField.write(`cos^{-1}`);
    }else if(e=="tan1"){
        mathField.write(`tan^{-1}`);
    }else if(e=="alpha"){
        mathField.write(`\\alpha`);
    }else if(e=="beta"){
        mathField.write(`\\beta`);
    }else if(e=="gamma"){
        mathField.write(`\\gamma`);
    }else if(e=="delta"){
        mathField.write(`\\delta`);
    }else if(e=="theta"){
        mathField.write(`\\theta`);
    }else if(e=="sigma"){
        mathField.write(`\\sigma`);
    }else if(e=="omega"){
        mathField.write(`\\omega`);
    }else if(e=="infty"){
        mathField.write(`\\infty`);
    }else if(e=="approx"){
        mathField.write(`\\approx`);
    }else if(e=="ne"){
        mathField.write(`\\ne`);
    }else if(e=="phi"){
        mathField.write(`\\phi`);
    }else if(e=="perp"){
        mathField.write(`\\perp`);
    }else if(e=="sqrt[n]{x}"){
        mathField.write(`\\sqrt[{}]{{}}`);
    }else if(e=="int_a^b"){
        mathField.write(`\\int_{}^{}`);
    }else if(e=="fff"){
        mathField.write(`ffffff`);
    }else if(e=="fff"){
        mathField.write(`ffffff`);
    }
    


mathField.focus();

}

mathField.focus();

