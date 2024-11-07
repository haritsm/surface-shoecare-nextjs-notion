import * as React from 'react'

import * as types from 'notion-types'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import cs from 'classnames'
import { Breadcrumbs, Header, Search, useNotionContext } from 'react-notion-x'

import { isSearchEnabled, navigationLinks, navigationStyle } from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Link from "next/link"
import Divider from "@mui/material/Divider"
import Image from "next/image"
import Typography from "@mui/material/Typography"
import { useState } from "react"

const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { components, mapPageUrl } = useNotionContext()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <>
    {matches && 
      <header className='notion-header'>
        <div className='notion-nav-header'>
          <Grid
            container
            justifyContent="flex-start"
            direction="row"
            spacing={3}
            alignItems="center"
          >
            <Grid item>
              <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
                edge="end"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <SwipeableDrawer
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              onOpen={() => setOpenDrawer(true)}
              anchor="left"
            >
              <List>
                <ListItem
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                >
                  <ListItemText disableTypography>
                    <Link href="/">
                      <Typography
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Home
                      </Typography>
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider variant="middle" />
              {navigationLinks
                ?.map((link, index) => {

                  if (!link.pageId && !link.url) {
                    return null
                  }

                  if (link.pageId) {
                    return (
                      <div key={`${link}-drawer`}>
                        <ListItem
                          onClick={() => {
                            setOpenDrawer(false);
                          }}
                        >
                          <ListItemText disableTypography>
                            <components.PageLink
                              href={mapPageUrl(link.pageId)}
                              key={index}
                              // className={cs(styles.navLink, 'breadcrumb', 'button')}
                            >
                              {link.title}
                            </components.PageLink>
                          </ListItemText>
                        </ListItem>
                        <Divider key={`${link}-divider`} variant="middle" />
                      </div>
                    )
                  } else {
                    return (
                      <div key={`${link}-drawer`}>
                        <ListItem
                          onClick={() => {
                            setOpenDrawer(false);
                          }}
                        >
                          <ListItemText disableTypography>
                            <components.PageLink
                              href={mapPageUrl(link.pageId)}
                              key={index}
                              // className={cs(styles.navLink, 'breadcrumb', 'button')}
                            >
                              {link.title}
                            </components.PageLink>
                          </ListItemText>
                        </ListItem>
                        <Divider key={`${link}-divider`} variant="middle" />
                      </div>
                    )
                  }
                })
                .filter(Boolean)
              }
              </List>
            </SwipeableDrawer>
            <Grid item>
              <Link href="/" passHref>
                <Image src="/favicon.png" width="30" height="30" alt="logo" />
              </Link>
            </Grid>
          </Grid>

          <ToggleThemeButton />
        </div>
      </header>
    }
    {!matches && 
      <header className='notion-header'>
        <div className='notion-nav-header'>
          <Breadcrumbs block={block} rootOnly={false} />

          <div className='notion-nav-header-rhs breadcrumbs'>
            {navigationLinks
              ?.map((link, index) => {
                if (!link.pageId && !link.url) {
                  return null
                }

                if (link.pageId) {
                  return (
                    <components.PageLink
                      href={mapPageUrl(link.pageId)}
                      key={index}
                      className={cs(styles.navLink, 'breadcrumb', 'button')}
                    >
                      {link.title}
                    </components.PageLink>
                  )
                } else {
                  return (
                    <components.Link
                      href={link.url}
                      key={index}
                      className={cs(styles.navLink, 'breadcrumb', 'button')}
                    >
                      {link.title}
                    </components.Link>
                  )
                }
              })
              .filter(Boolean)}

            <ToggleThemeButton />

            {isSearchEnabled && <Search block={block} title={null} />}
          </div>
        </div>
      </header>
    }
    </>
  )
}
