import { expect, test } from "vitest"
import { renderToString } from "jsx-async-runtime"
import MainLayout from "./MainLayout.11ty"
import { screen } from "@testing-library/dom"
import { ViewProps } from "../eleventy"

test("render MainLayout", async () => {
  const viewProps: ViewProps = {
    title: "Hello World",
    content: "<p>This is <em>the body</em></p>",
  }
  const result = MainLayout(viewProps)
  document.body.innerHTML = await renderToString(result)
  const titleElements = screen.getAllByText(`Hello World`)
  expect(titleElements).to.have.length(2)
  expect(screen.getByText(`the body`)).to.exist
})
