import { Globe, GithubLogo, LinkedinLogo } from 'phosphor-react'

import React from 'react'

import Banner from './assets/Banner.png'
import Profile from './assets/Profile.png'
import Blur from './assets/Blur.png'

import { Button } from './components/button'

import styles from './styles/App.module.scss'

function App() {
  return (
    <main>
      <header className={styles.header} />
      <section className={styles.mainContentSection}>
        <div className={styles.profileAndBanner}>
          <img className={styles.banner} src={Banner} alt="" />
          <img className={styles.profile} src={Profile} alt="" />
          <img className={styles.blur} src={Blur} alt="" />
        </div>
        <div className={styles.heading}>
          <h1>Guilherme Dunguel</h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>
        <div className={styles.buttonsWrapper}>
          <Button
            link={'https://guilhermedunguel.com'}
            icon={<Globe size={22} />}
            title={'Website'}
            color={'orange'}
          />
          <Button
            link={'https://github.com/GuilhermeDunguel'}
            icon={<GithubLogo size={22} />}
            title={'GitHub'}
            color={'violet'}
          />
          <Button
            link={'https://www.linkedin.com/in/guilhermedunguel/'}
            icon={<LinkedinLogo size={22} />}
            title={'LinkedIn'}
            color={'blue'}
          />
        </div>
        <div className={styles.credits}>
          <p>Developed with 💛 by myself :&#41;</p>
        </div>
      </section>
    </main>
  )
}

export default App
