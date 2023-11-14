import { Cemjsx } from "cemjs-all"
import { Static } from "cemjs-core"

export default function () {
    return (
        <div class="error_wrap">
            <p class="error_text">Страница не найдена {Static.tt1}</p>
            <h1 class="error_title">Error 404</h1>
            <p class="error_subtitle">Вернитесь на главную страницу</p>
            <a
                href="/"
                onclick={this.Fn.link}
                class="btn btn_green"
            >
                На главную
            </a>
        </div>
    )
}