
let theme_activated = false


$('#changeThemeButton').click(function () {
  console.log(theme_activated)
  theme_activated = (theme_activated) ? false : true
  let class_to_add = (theme_activated) ? 'grey darken-4 white-text' : ''
  let class_to_remove = (theme_activated) ? '' : 'grey darken-4 white-text'
  $('body,html').addClass(class_to_add)
  $('body,html').removeClass(class_to_remove)
})
