/**
 * resume
 */
function resume () {
  window.open('resume.html')
}

/**
 * contactme
 */
function contactme() {
  window.open('contact-me.html')
}


function changeValue() {
  const commentSelects = document.getElementsByName('commentSelect')
  const hiring = document.getElementById('hiringId')
  if(commentSelects[0].checked){
    hiring.style.display = 'none'
  }else{
    hiring.style.display = ''
  }
  if(commentSelects[1].checked){
    hiring.style.display = ''
  }else{
    hiring.style.display = 'none'
  }
}


window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validateFrom;
};

function validateFrom() {
  const postal = document.getElementById("postal")
  const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  if (regex.test(postal.value) == false) {
    alert("must be a valid Canadian Postal Code, with or without a space")
    postal.focus();
    return false;
  }
  return true
}
