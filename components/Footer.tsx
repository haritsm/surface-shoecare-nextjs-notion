import * as React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWhatsapp,faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
// import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
// import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import * as config from '@/lib/config'
// import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  // const [hasMounted, setHasMounted] = React.useState(false)
  // const { isDarkMode, toggleDarkMode } = useDarkMode()

  // const onToggleDarkMode = React.useCallback(
  //   (e) => {
  //     e.preventDefault()
  //     toggleDarkMode()
  //   },
  //   [toggleDarkMode]
  // )

  // React.useEffect(() => {
  //   setHasMounted(true)
  // }, [])

  return (
    <footer className={styles.footer}>

      <div className={styles.copyright}>
        Copyright 2024 {config.author}. Created by <a href='https://www.linkedin.com/in/haritsmuhammad/'><u>Harits Muhammad</u></a>.
        <br/>Template by <a href='https://github.com/transitive-bullshit/nextjs-notion-starter-kit'><u>transitive-bullshit</u></a>
      </div>

      {/* <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div> */}

      {/* <div>
        {config.whatsapp && (
          <a
            // className={styles.whatsapp}
            href={`${config.instagram_main}`}
            title={`WhatsappSurface Shoecare Admin`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        )}

        {config.instagram_main && (
          <a
            // className={styles.instagram_main}
            href={`https://instagram.com/${config.instagram_main}`}
            title={`Instagram @${config.instagram_main}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        )}

        {config.tiktok && (
          <a
            // className={styles.tiktok}
            href={`https://www.tiktok.com/@${config.tiktok}`}
            title={`Tiktok @${config.tiktok}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        )}
      </div> */}
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
