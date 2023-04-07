// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Configs

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg
              fill='#9155FD'
              height={25}
              width={30}
              version='1.1'
              id='_x32_'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 512 512'
              xmlSpace='preserve'
            >
              <g>
                <path
                  className='st0'
                  d='M454.002,324.104V187.896c16.877-5.176,29.228-20.691,29.228-39.268c0-22.79-18.475-41.257-41.258-41.257
		c-10.87,0-20.69,4.292-28.06,11.168L296.125,50.53c0.689-2.991,1.136-6.069,1.136-9.272C297.261,18.468,278.786,0,256.004,0
		c-22.782,0-41.258,18.468-41.258,41.258c0,3.203,0.447,6.281,1.136,9.272L98.087,118.54c-7.37-6.876-17.191-11.168-28.062-11.168
		c-22.782,0-41.256,18.467-41.256,41.257c0,18.576,12.351,34.091,29.227,39.268v136.208c-16.876,5.176-29.227,20.691-29.227,39.268
		c0,22.79,18.474,41.257,41.256,41.257c10.879,0,20.692-4.292,28.062-11.168l117.787,68.01c-0.69,2.991-1.136,6.069-1.136,9.272
		c0,22.79,18.475,41.258,41.257,41.258s41.257-18.468,41.257-41.258c0-3.203-0.446-6.288-1.136-9.28l117.788-68.002
		c7.37,6.876,17.191,11.168,28.068,11.168c22.783,0,41.258-18.467,41.258-41.257C483.231,344.795,470.879,329.28,454.002,324.104z
		 M243.967,431.476c-6.054,1.856-11.52,4.965-16.031,9.178l-117.788-68.01c0.689-2.992,1.136-6.077,1.136-9.272
		c0-18.576-12.351-34.091-29.228-39.268V187.896c6.054-1.856,11.521-4.965,16.032-9.178l117.787,68.009
		c-0.69,2.992-1.136,6.07-1.136,9.273c0,18.576,12.35,34.091,29.228,39.268V431.476z M227.935,225.91l-117.788-68.009
		c0.689-2.992,1.136-6.07,1.136-9.273c0-3.203-0.447-6.281-1.136-9.272l117.796-68.01c7.369,6.876,17.19,11.168,28.06,11.168
		c10.87,0,20.691-4.292,28.061-11.168l117.787,68.01c-0.689,2.992-1.136,6.069-1.136,9.272c0,3.196,0.447,6.281,1.136,9.273
		l-117.803,68.002c-7.37-6.869-17.182-11.16-28.053-11.16S235.305,219.034,227.935,225.91z M429.943,324.104
		c-16.877,5.176-29.227,20.691-29.227,39.268c0,3.195,0.447,6.281,1.136,9.272l-117.795,68.01
		c-4.519-4.214-9.978-7.323-16.031-9.178V295.268c16.877-5.177,29.227-20.692,29.227-39.268c0-3.203-0.446-6.281-1.136-9.273
		l117.796-68.009c4.511,4.214,9.977,7.323,16.031,9.178V324.104z'
                />
              </g>
            </svg>
            <HeaderTitle variant='h6' sx={{ ml: 3 }}>
              GAPTAG
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
