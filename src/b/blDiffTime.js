(function(w, d){
  function getNow(){
    return Date.now();
  }

  function getDiffTime(r){
    let rVal   = '';
    const mark = 'F';

    if(r.length <= 0){
      rVal = '00:00:00#' + getNow() + '#';
    }
    else{
      const v     = r.split('#');
      const oTime = v[0].split(':').map(i => parseInt(i));
      const uTime = parseInt(v[1], 10);
      const isRun = v[2] === mark ? true : false;

      if(isRun){
        rVal = v[0] + '#' + getNow() + '#';
      }
      else{
        const mTime = new Date(getNow() - uTime);
        mTime.setSeconds(mTime.getSeconds() + oTime[2]);
        mTime.setMinutes(mTime.getMinutes() + oTime[1]);
        mTime.setHours(mTime.getHours() -9);

        const g = mTime.getHours() + oTime[0] + ':' + mTime.getMinutes() + ':' + mTime.getSeconds();
        rVal    = g + '#' + getNow() + '#' + mark;
      }
    };

    return rVal;
  };

  const editBtn   = d.querySelector('button#commentEditorTrigger');
  const submitBtn = d.querySelector('button#submitbtn');
  const result    = d.querySelector('input[name="switchStatusIssue.actualHours"]');
  const ta        = d.querySelector('textarea#leftCommentContent');

  // main
  ta.focus();
  ta.focus();

  editBtn.click();
  result.value = getDiffTime(result.value);
  // submitBtn.click();
})(window, document);
