import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              I'm baby single-origin coffee adaptogen forage seitan
              asymmetrical, four dollar toast semiotics. Jawn gluten-free shabby
              chic occupy pok pok tumeric flexitarian. Tote bag cronut copper
              mug ugh, kale chips meggings tacos prism occupy post-ironic
              locavore celiac pitchfork bruh. Biodiesel synth prism leggings
              typewriter, salvia kombucha offal. Banh mi waistcoat yuccie
              sriracha kale chips JOMO. Hammock adaptogen man bun quinoa
              letterpress blue bottle keffiyeh wolf. Wolf cray umami, YOLO
              distillery venmo succulents mixtape pok pok.
            </p>
            <p>
              Venmo cold-pressed umami vice gentrify fit tbh tumblr disrupt echo
              park put a bird on it. Polaroid fingerstache tofu pop-up air plant
              lo-fi venmo edison bulb cray woke brunch try-hard stumptown
              bespoke DIY. Occupy subway tile scenester la croix copper mug.
              Grailed big mood cupping chambray tousled quinoa bitters disrupt,
              franzen austin subway tile woke poke affogato messenger bag.
              Activated charcoal kitsch photo booth, cardigan pork belly chia
              DSA.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            className="about-img"
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in Bowl"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
