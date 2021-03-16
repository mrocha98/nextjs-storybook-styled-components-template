import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /template/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
