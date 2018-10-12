(function () {
  const btns = document.querySelectorAll('.mission-btn')
  const toggles = document.querySelectorAll('.mission-toggle')

  btns.forEach(function (el) {
    el.addEventListener('click', toggleActive)
  })

  function toggleActive (e) {
    if (e.currentTarget.classList.contains('active')) return

    toggles.forEach(function(el) {
      el.classList.toggle('active')
    })
  }
})()