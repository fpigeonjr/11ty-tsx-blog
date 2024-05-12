import { expect, test } from "vitest"
import { Index } from "./index.11ty"
import { renderToString } from "jsx-async-runtime"
import { screen } from "@testing-library/dom"

test("Render Index", async () => {
  const result = <Index />
  document.body.innerHTML = await renderToString(result)

  expect(screen.getByText("Hello TSX")).to.exist
})
