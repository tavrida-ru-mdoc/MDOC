import { i18n } from "../i18n"
import { QuartzComponent } from "./types"

const Footer: QuartzComponent = ({ cfg }) => {
  const locale = cfg?.locale ?? "ru-RU"
  const t = i18n(locale)
  // The translation contains a preformatted string with current year embedded
  const created = t.components?.footer?.createdWith ?? `© ${new Date().getFullYear()} Таврида Электрик`

  return (
    <footer className="quartz-footer">
      <div className="quartz-footer-inner">{created}</div>
    </footer>
  )
}

export default Footer
