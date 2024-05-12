import { ViewProps } from "../eleventy"
import Heading from "../components/Heading"

function MainLayout({ content, title }: ViewProps): JSX.Element {
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
    </html>
  )
}

export default MainLayout
