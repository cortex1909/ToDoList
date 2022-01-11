const stockFooter = () => {
  const footer = document.createElement('footer')

  footer.innerHTML = "<div class='text'>&copy; 2022</div>"

  const bodyReturn = document.body.appendChild(footer)

  return bodyReturn
}

const appendFooter = () => {
  stockFooter()
}

export default appendFooter
