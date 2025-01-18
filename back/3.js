import balanced from 'balanced-match';

function parseMathExpressions(input) {
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
      fraction += `{${numeratorMatch.body}}`;
      pos += numeratorMatch.end;

      const denominatorMatch = balanced("{", "}", input.slice(pos));
      fraction += `{${denominatorMatch.body}}`;
      pos += denominatorMatch.end;

      result.push(fraction);
    }
    // Check for '\\int_{ }^{ } or \\int_{ }^h'  
    else if (input.startsWith("\\int_{", pos)) {
      let fraction = "\\int_";
      pos += 5;



      // Process numerator and denominator using balanced match
      const numeratorMatch = balanced("{", "}", input.slice(pos));
      fraction += `{${numeratorMatch.body}}`;
      pos += numeratorMatch.end;



      if (input[pos + 2] == "{") {



        const denominatorMatch = balanced("{", "}", input.slice(pos));
        fraction += `{${denominatorMatch.body}}`;
        pos += denominatorMatch.end;
      } else {

        fraction += `${input[pos + 1]}${input[pos + 2]}`
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


        sqrt += `${sqrtMatch.pre}{${sqrtMatch.body}}`;
        pos += sqrtMatch.end;

      } else {

        sqrt += `${input[pos]}${input[pos + 1]}${input[pos + 2]}`
        pos += 3

      }
      result.push(sqrt);
    }
    // Check for '3^6 or 3^{66}'
    else if (input.startsWith("kk", pos)) {
      let sqrt = "^";
      pos += 5;

      console.log(555555555);

      let d = input[pos + 2]
      console.log(d);


      if (input[pos + 2] == "{") {


        // Process the argument inside the curly braces
        const sqrtMatch = balanced("{", "}", input.slice(pos));


        console.log(sqrtMatch)
        sqrt += `${sqrtMatch.pre}{${sqrtMatch.body}}`;
        pos += sqrtMatch.end;
        console.log(sqrt)
      } else {
        console.log(input[pos + 2]);
        sqrt += `${input[pos]}${input[pos + 1]}${input[pos + 2]}`
        pos += 3

      }
      result.push(sqrt);
    }
       // Check for '\\sqrt[3]{2}
       else if (input.startsWith("\\sqrt[", pos)) {
        let sqrt = "\\sqrt[";
        pos += 5;
  
  
        // Process numerator and denominator using balanced match
        const numeratorMatch = balanced("[", "]", input.slice(pos));
        sqrt += `${numeratorMatch.body}]`;
        console.log(numeratorMatch.body);
  
        pos += numeratorMatch.end;
  
        const denominatorMatch = balanced("{", "}", input.slice(pos));
        sqrt += `{${denominatorMatch.body}}`;
        pos += denominatorMatch.end;
  
  
  
        // // Process the argument inside the curly braces
        // const sqrtMatch = balanced("{", "}", input.slice(pos));
        // sqrt += `{${sqrtMatch.body}}`;
        // pos += sqrtMatch.end;
  
        result.push(sqrt);
      }
    // Check for '\\sqrt{2}'
    else if (input.startsWith("\\sqrt", pos)) {
      let sqrt = "\\sqrt";
      pos += 5; // Skip "\\sqrt"

      // Process the argument inside the curly braces
      const sqrtMatch = balanced("{", "}", input.slice(pos));
      sqrt += `{${sqrtMatch.body}}`;
      pos += sqrtMatch.end;

      result.push(sqrt);
    }
 
    // Check for '\\lim_'
    else if (input.startsWith("\\lim_", pos)) {
      let sqrt = "\\lim_";
      // pos += 5; 

      // Process the argument inside the curly braces
      const sqrtMatch = balanced("{", "}", input.slice(pos));
      sqrt += `{${sqrtMatch.body}}`;
      pos += sqrtMatch.end;

      result.push(sqrt);
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

let aaa = parseMathExpressions(sentence);



const processedArr = aaa.map(item => {

  if (!item.startsWith('\\') && item.includes('^')) {


    const parts = item.split('^');
    console.log(parts);


    // If there's a curly bracket after ^, process the contents
    if (parts.length === 3 && parts[1].includes('{')) {
      const bracketMatch = balanced('{', '}', parts[1]);
      if (bracketMatch) {
        const { start, end } = bracketMatch;
        // Slice the part between ^ and matching braces
        return parts[0] + '^' + parts[1].slice(0, start) + parts[1].slice(end + 1);
      }
    }

    // Regular slicing for ^ items
    return parts[0] + '^' + parts[1] + '^' + parts[2];
  }
  return item;
});

console.log(processedArr);
