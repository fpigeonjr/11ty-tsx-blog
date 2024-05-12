import { ViewProps } from "../eleventy"
import Heading from "../components/Heading"
import Footer from "../components/Footer"

function MainLayout({ title, content }: ViewProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>{title}</title>
      </head>
      <Heading name={title} />
      <body>{content}</body>
      <Footer />
    </html>
  )
}

export default MainLayout
