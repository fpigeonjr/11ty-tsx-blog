import { expect, test } from "vitest"
import { Index } from "./index.11ty"
import { renderToString } from "jsx-async-runtime"

test("Render Index", async () => {
  const result = <Index />
  const rendered = await renderToString(result)

  expect(rendered).toEqual("<h1>Hello TSX</h1>")
})
