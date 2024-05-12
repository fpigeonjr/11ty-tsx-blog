import { expect, test } from "vitest"
import { renderToString } from "jsx-async-runtime"
import { screen } from "@testing-library/dom"
import Footer from "./Footer"

const currentYear = new Date().getFullYear()

test("renders footer ", async () => {
  const result = <Footer />
  document.body.innerHTML = await renderToString(result)
  expect(screen.getByText(`${currentYear} © All rights reserved`)).to.exist
})
