const shareButtons = document.querySelectorAll('.tile-share-button')

async function copyText(){
    //prevent button
    e.preventDefault()
  const link = this.getAttribute('link')

  try{
  await navigator.clipboard.writeText(link)
  alert("Text Copied: " + link)
  }catch(err){
    console.error(err)
  }
}
shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))