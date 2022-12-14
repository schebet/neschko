import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>KONTAKT — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/static/assets/telefon.png')`, marginBottom: 0}}>
          <h1 className="post-title">Budimo u kontaktu</h1>
          <p>Vaše ime,e-mail adresa i poruka &rarr;</p>
        </div>
        <div>
          <form className="form-container" action="https://sendmail.w3layouts.com/SubmitContactForm" method="post">
            <div>
              <label htmlFor="w3lName">IME</label>
              <input type="text" name="w3lName" id="w3lName"/>
            </div>
            <div>
              <label htmlFor="w3lSender">Vaša E-mail adresa</label>
              <input type="email" name="w3lSender" id="w3lSender"/>
            </div>
            <div>
              <label htmlFor="w3lSubject">NASLOV PORUKE... </label>
              <input type="text" name="w3lSubject" id="w3lSubject"/>
            </div>
            <div>
              <label htmlFor="w3lMessage">PORUKA</label>
              <textarea name="w3lMessage" id="w3lMessage"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" value="Pošalji" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
