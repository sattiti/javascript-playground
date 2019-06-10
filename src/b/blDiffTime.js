(function(w, d){
  function getNow(){
    return Date.now();
  }

  function getDiffTime(r){
    let rVal = '';

    if(r.length <= 0){
      rVal = '0:0:0#' + getNow();
    }
    else{
      const inputVal = r.split('#');
      let oTime      = inputVal[0].split(':');
      let uTime      = parseInt(inputVal[1], 10);

      let mTime = new Date(getNow() - uTime);
      mTime.setHours(mTime.getHours() -9);
      rVal = mTime.toTimeString().split(' ')[0] + '#' + getNow();
    }
    return rVal;
  }

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
