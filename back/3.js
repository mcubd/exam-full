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
    const users = {
      user_5064: { right: 0, wrong: 2, time_took: 4 },
      user_5063: { right: 2, wrong: 0, time_took: 28 },
       
    };
    for (let item of [3,4,5,6,7,0,1,2]) {
      await new Promise(resolve => {
        console.log(item);
        

           
          
          
          setTimeout(resolve, 1000); // Simulate async task
      });
  }