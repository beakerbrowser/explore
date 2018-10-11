var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

// events
// =

window.addEventListener('load', function () {
  setCategory(location.hash || 'whats-new')
  if (!('DatArchive' in window)) {
    document.body.classList.add('nodat')
  }
})

window.addEventListener('hashchange', function () {
  setCategory(location.hash)
  window.scrollTo(0,0)
})

function setCategory (v) {
  currentCategory = v
  if (currentCategory.charAt(0) === '#') {
    currentCategory = currentCategory.slice(1)
  }

  try { $('nav a.current').classList.remove('current') } catch (e) {}
  $('nav a[href="#'+currentCategory+'"]').classList.add('current')

  try { $('.content.current').classList.remove('current') } catch (e) {}
  $('#content-' + currentCategory).classList.add('current')
}