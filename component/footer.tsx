import React from 'react'
import Timezone from './timezone'

interface IFooter {
  changeTimezone: (timezone: string) => void
  timezone: string
}

const Footer = (props: IFooter) => {
  return (
    <>
      <ul className="footer-list">
        <li>Share:</li>
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdevodeployarhoje.com.br&t=Devo%20deployar%20hoje"
            target="_blank"
            rel="noopener noreferrer"
            title="Compartilhe no Facebook"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fdevodeployarhoje.com.br&text=Devo%20deployar%20hoje%3A%20http%3A%2F%2Fdevodeployarhoje.com.br"
            target="_blank"
            rel="noopener noreferrer"
            title="Tweet"
          >
            Twitter
          </a>
        </li>
        <li>
          Source:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/allangrds/devodeployarhoje"
          >
            Github
          </a>
        </li>
        <li>
          Timezone:{' '}
          <Timezone onChange={props.changeTimezone} timezone={props.timezone} />
        </li>
      </ul>

      <ul className="footer-list">
        <li>
          <a href={'/api?tz=' + props.timezone}>
            <mark>API</mark>
          </a>
        </li>
        <li>
          <a href={'/api/slack?tz=' + props.timezone}>
            <mark>Slack API</mark>
          </a>
        </li>
      </ul>
    </>
  )
}

export default Footer
