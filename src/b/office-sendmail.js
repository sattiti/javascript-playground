(function(w, d){
  // new msg
  d.querySelectorAll('.ms-Button').forEach(a=>{
    const b = a.querySelector('.ms-Button-label')
    if(b !== null && b.textContent === '新しいメッセージ'){
      a.click()
    }
  })

  setTimeout(function(){
    const mailItem = {
      to: '',
      cc: '',
      subject: {
        prefix: '',
        suffix: ''
      },
      body: ``
    }

    const mTo      = d.querySelector('.ms-BasePicker-input[aria-label="宛先"]')
    const mCc      = d.querySelector('.ms-BasePicker-input[aria-label="CC"]')
    const mSubject = d.querySelector('.ms-TextField-field[aria-label="件名を追加"]')
    const mBody    = d.querySelector('textarea[placeholder="メッセージを追加"]')
    // const mBody    = d.querySelector('div[role="textbox"][aria-multiline="true"][aria-label="メッセージ本文"] > div')
    const dd = new Date()
    let day = ''
    switch(dd.getDay()){
      case 1:
        day = '月'
        break
      case 2:
        day = '火'
        break
      case 3:
        day = '水'
        break
      case 4:
        day = '木'
        break
      case 5:
        day = '金'
        break
      case 6:
        day = '土'
        break
      default:
        day = '日'
    }
    const today = `${dd.getFullYear()}/${dd.getMonth() + 1}/${dd.getDate()}(${day})`

    mTo.value      = mailItem.to
    mCc.value      = mailItem.cc
    mSubject.value = `${mailItem.subject.prefix} ${today} ${mailItem.subject.suffix}`
    mBody.value    = mailItem.body
    // mBody.textContent = mailItem.body
  }, 500)
})(window, document);
