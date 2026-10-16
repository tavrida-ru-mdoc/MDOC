import { i18n } from "../i18n"
import { QuartzComponent } from "./types"

const Footer: QuartzComponent = ({ cfg }) => {
  const locale = cfg?.locale ?? "ru-RU"
  const created = i18n(locale).components.footer.createdWith ?? `© ${new Date().getFullYear()} Таврида Электрик`

  return (
    <footer className="quartz-footer">
      <div className="quartz-footer-inner">{created}</div>
    </footer>
  )
}

export default Footer
