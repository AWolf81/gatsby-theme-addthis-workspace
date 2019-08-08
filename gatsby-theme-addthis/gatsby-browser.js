exports.onInitialClientRender = (_, { publicId }) => {
  const addThisScript = document.createElement('script')
  addThisScript.src = `//s7.addthis.com/js/300/addthis_widget.js#pubid=${publicId}`
  document.body.appendChild(addThisScript)
}
