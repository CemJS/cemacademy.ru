import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"
import success from '@svg/icons/success.svg'

export const display = function () {
  return (
    <div
      class="modal"
      ref="modal"
      onclick={(e: any) => {
        if (e.target === this.Ref.modalBody) {
          this.fn("close")
        }
      }}
      init={this.func.show}
    >
      <div class="modal_body" ref="modalBody">
        <div class="modal_content">
          <button class="modal_button-close" onclick={this.func.close}>X</button>
          <header class="modal_header">
            <h2 class="modal_header-title">{this.Static.title}</h2>
          </header>
          <Navigation />
          <footer class="modal_footer">
            <button
              class="btn btn__green"
              onclick={async () => {
                this.Ref.modal.classList.remove('modal__active');
                setTimeout(() => {
                  this.clearData();
                }, 500)


                console.log('=4996a9=', this.Static.form)
                let data = {
                  title: this.Static.title,
                  fullName: this.Static.form.fullName.value,
                  email: this.Static.form.email.value,
                  telegram: this.Static.form.telegram.value,
                  comment: this.Static.form.comment.value,
                }
                let answer = await this.Services.functions.sendApi("/api/Message", data)
                console.log('=74d989=', answer)

                this.Fn.initOne({
                  name: "modalNotify",
                  data: {
                    icon: success,
                    title: "Поздравляем!",
                    text: "Скоро с Вами свяжется наш менеджер!"
                  }
                })
              }}
            >
              Отправить
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}