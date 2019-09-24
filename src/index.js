/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let globalTimeToLearnJS = 0;
      let timeToStudyInWeek = 0;
      if(knowsProgramming == true){
        globalTimeToLearnJS = 800;
      }
      else {
        globalTimeToLearnJS = 1300;
      }
      timeToStudyInWeek = config[focus];
      let weekToStydy=globalTimeToLearnJS/timeToStudyInWeek;
      return Math.ceil(weekToStydy);
  };
  
