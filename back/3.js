import moment from 'moment-timezone';

  const now = moment().tz('Asia/Dhaka');
 

      const time1 = moment({ year: 2025, month: Number(1) - 1, day: 12, hour: 15 }).add(42, 'minutes'); // January 9, 2025, 08:00
      const time2 = moment({ year: 2025, month: Number(1) - 1, day: 12, hour: 15 }).add(1+55, 'minutes');  // January 9, 2025, 18:00

    //   if (now.isSameOrAfter(time1) && now.isSameOrBefore(time2)  ) {

    //     console.log("on");
        
    //   }else{
    //     console.log("offline");
        
    //   }

    //   if(now.isSameOrAfter(time1)){
    //     console.log("true");
        
    //   }else{
    //     console.log("false");
        
    //   }  



    const letterToIndex = letter => letter.charCodeAt(0) - 97;

    const result = ans.data.data.reduce(
      (acc, question) => {
        const submittedAnswer = orders[`order_${question.order}`];
        const submittedIndex = submittedAnswer ? letterToIndex(submittedAnswer) : -1;
    
        if (submittedIndex === question.ans) acc.correct++;
        else if (submittedIndex !== -1) acc.wrong++;
    
        return acc;
      },
      { correct: 0, wrong: 0 } // Initial counts
    );
    
    console.log(`Correct answers: ${result.correct}`);
    console.log(`Wrong answers: ${result.wrong}`);

    obj1[userKey]={"right":result.correct,"wrong":result.wrong,"time_took":orders.time_took}






    