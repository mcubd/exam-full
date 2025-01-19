// import balanced from 'balanced-match';

window.parseMathExpressions = async function (input) {
    const result = [];
    let pos = 0;
    const len = input.length;

    while (pos < len) {
        // Find the next '\\' occurrence
        const nextBackslash = input.indexOf("\\", pos);

        if (nextBackslash === -1) {
            // No more '\\', push the remaining part
            result.push(input.slice(pos));
            break;
        }

        // Push the text before '\\'
        if (nextBackslash > pos) {
            result.push(input.slice(pos, nextBackslash));


        }

        pos = nextBackslash;

        // Check for '\\frac'  
        if (input.startsWith("\\frac", pos)) {
            let fraction = "\\frac";
            pos += 5; // Skip "\\frac" 

            // Process numerator and denominator using balanced match
            const numeratorMatch = balanced("{", "}", input.slice(pos));
            fraction += `{${numeratorMatch.body.replace(/\\\\/g, '\\')}}`;
            pos += numeratorMatch.end;

            const denominatorMatch = balanced("{", "}", input.slice(pos));
            
            pos += denominatorMatch.end;
            console.log("----------------------------------------------------------------------------------------");
            const output = denominatorMatch.body.replace(/\\\\/g, '\\');
            fraction += `{${output}}`;
            console.log("----------------------------------------------------------------------------------------");



            pos += 1
            result.push(fraction);
        }
        // Check for '\\int_{ }^{ } or \\int_{ }^h'  
        else if (input.startsWith("\\int_{", pos)) {
            let fraction = "\\int_";
            pos += 5;



            // Process numerator and denominator using balanced match
            const numeratorMatch = balanced("{", "}", input.slice(pos));
            fraction += `{${numeratorMatch.body.replace(/\\\\/g, '\\')}}`;
            pos += numeratorMatch.end;



            if (input[pos + 2] == "{") {



                const denominatorMatch = balanced("{", "}", input.slice(pos));
                fraction += `^{${denominatorMatch.body.replace(/\\\\/g, '\\')}}`;
                pos += denominatorMatch.end;
                pos += 1
            } else {

                fraction += `${input[pos + 1].replace(/\\\\/g, '\\')}${input[pos + 2].replace(/\\\\/g, '\\')}`
                pos += 3

            }

            result.push(fraction);
        }
        // Check for '\\int_c^{crr} or \\int_c^h'
        else if (input.startsWith("\\int_", pos)) {
            let sqrt = "\\int_";
            pos += 5;



            if (input[pos + 2] == "{") {


                // Process the argument inside the curly braces
                const sqrtMatch = balanced("{", "}", input.slice(pos));


                sqrt += `${sqrtMatch.pre}{${sqrtMatch.body.replace(/\\\\/g, '\\')}}`;
                pos += sqrtMatch.end;

            } else {

                sqrt += `${input[pos].replace(/\\\\/g, '\\')}${input[pos + 1].replace(/\\\\/g, '\\')}${input[pos + 2].replace(/\\\\/g, '\\')}`
                pos += 3

            }
            pos += 1
            result.push(sqrt);
        }

        // Check for '\\sqrt[3]{2}
        else if (input.startsWith("\\sqrt[", pos)) {
            let sqrt = "\\sqrt[";
            pos += 5;


            // Process numerator and denominator using balanced match
            const numeratorMatch = balanced("[", "]", input.slice(pos));
            sqrt += `${numeratorMatch.body.replace(/\\\\/g, '\\')}]`;
            

            pos += numeratorMatch.end;

            const denominatorMatch = balanced("{", "}", input.slice(pos));
            sqrt += `{${denominatorMatch.body.replace(/\\\\/g, '\\')}}`;
            pos += denominatorMatch.end;

            pos += 1

            result.push(sqrt);
        }
        // Check for '\\sqrt{2}'
        else if (input.startsWith("\\sqrt", pos)) {
            let sqrt = "\\sqrt";
            pos += 5; // Skip "\\sqrt"

            // Process the argument inside the curly braces
            const sqrtMatch = balanced("{", "}", input.slice(pos));
            sqrt += `{${sqrtMatch.body.replace(/\\\\/g, '\\')}}`;
            pos += sqrtMatch.end;
            pos += 1
            result.push(sqrt);
        }

        // Check for '\\lim_'
        else if (input.startsWith("\\lim_", pos)) {
            let sqrt = "\\lim_";
            // pos += 5; 

            // Process the argument inside the curly braces
            const sqrtMatch = balanced("{", "}", input.slice(pos));
            sqrt += `{${sqrtMatch.body.replace(/\\\\/g, '\\')}}`;
            pos += sqrtMatch.end;
            pos += 1
            result.push(sqrt);
        }
        else if (input.startsWith("\\alpha", pos)) {
            result.push("\\alpha");
            pos += 6;
        }
        else if (input.startsWith("\\beta", pos)) {
            result.push("\\beta");
            pos += 5;
        } else if (input.startsWith("\\gamma", pos)) {
            result.push("\\gamma");
            pos += 6;
        }
        else if (input.startsWith("\\delta", pos)) {
            result.push("\\delta");
            pos += 6;
        }
        else if (input.startsWith("\\theta", pos)) {
            result.push("\\theta");
            pos += 6;
        }
        else if (input.startsWith("\\sigma", pos)) {
            result.push("\\sigma");
            pos += 6;
        }
        else if (input.startsWith("\\omega", pos)) {
            result.push("\\omega");
            pos += 6;
        }
        else if (input.startsWith("\\infty", pos)) {
            result.push("\\infty");
            pos += 6;
        }
        else if (input.startsWith("\\approx", pos)) {
            result.push("\\approx");
            pos += 7;
        }
        else if (input.startsWith("\\ne", pos)) {
            result.push("\\ne");
            pos += 3;
        }
        else if (input.startsWith("\\phi", pos)) {
            result.push("\\phi");
            pos += 4;
        }
        else if (input.startsWith("\\perp", pos)) {
            result.push("\\perp");
            pos += 5;
        }
        // Handle spaces after '\\'
        else if (input[pos + 1] === ' ') {
            result.push(" ");
            pos += 2; // Skip '\\ '
        } else {
            pos += 1; // Skip '\\' for other cases
        }
    }

    return result;
}

// Example usage
const sentence = "Here is an example \\ of something \\frac{g}{\\frac{df}{ff}\\ ff\\ \\frac{ffd}{r}} and a square root \\sqrt{5868458} who \\lim_{x^2\\to\\frac{a}{w}} andd \\int_{vc}^{c^2v} orrr \\int_b^{c^2v} \\int_b^k jj \\int_{bf}^dkk   kk t^3 y^{uu} b \\sqrt[j3]{f2} after.";



window.latex_arr = async function (latexx) {

    let aaa = await parseMathExpressions(latexx);







    return newArr = await aaa.flatMap(item => {
        if (!item.startsWith('\\') && item.includes("^")) {
            let arr66 = []

            let i = 0;
            while (i < item.length) {
                const caretIndex = item.indexOf('^', i);

                if (caretIndex === -1) {
                    arr66.push(item.slice(i))
                    break;
                }


                if (caretIndex > i) {
                    arr66.push(item.slice(i, caretIndex - 1))
                }


                i = caretIndex;


                const nextChar = item[i + 1];

                if (nextChar === '{') {
                    const bracketMatch = balanced('{', '}', item.slice(i + 1));

                    if (bracketMatch) {
                        i += 1;
                        arr66.push(`${item.slice(caretIndex - 1, caretIndex + 1)}{${bracketMatch.body}}`)
                        const { start, end } = bracketMatch;
                        i += end + 1;
                    }
                } else {
                    // Just add the part after '^' if no '{' follows
                    const nextCaretIndex = item.indexOf('^', i);
                    arr66.push(item.slice(caretIndex - 1, caretIndex + 2))

                    if (nextCaretIndex === -1) {
                        arr66.push(item.slice(i))
                        break;
                    } else {
                        i = i + 2;
                    }
                }
            }
            return arr66;
        }
        return [item];
    });
}




