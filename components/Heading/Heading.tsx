export type HeadingProps = {
  name?: string
}

function Heading({ name = "TSX" }: HeadingProps): JSX.Element {
  return <h1>{name}</h1>
}

export default Heading
