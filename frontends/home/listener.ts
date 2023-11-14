import { Static, Variable,Func,Fn,Services,Ref  } from "cemjs-all"

export const finish = function (e) {
  Static.sections = document.querySelectorAll('.section')
  Static.navLinks = document.querySelectorAll('.header_navList-item')
  Static.menu = document.querySelector('.header_navList')
  Static.advantages = document.querySelector('.advantages_section')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Static.navLinks.forEach((link: any) => {
          const linkHref = link.getAttribute('href').replace('#', "")
          if (linkHref == entry.target.id) {
            link.classList.add('header_navList-item__active')
          } else {
            link.classList.remove('header_navList-item__active')
          }

          if (entry.target.id == 'experts') {
            Ref.scrollTop.classList.add('scrollTop__show')
          }
          if (Static.advantages == entry.target) {
            Ref.scrollTop.classList.remove('scrollTop__show')
          }

          if (entry.target.id == 'program') {
            Ref.question.classList.add('question__show')
          }
        })
      }
    })
  })

  Static.sections.forEach(section => {
    observer.observe(section)
  })
}

