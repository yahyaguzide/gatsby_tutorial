import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

export const data = graphql`
  {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
      totalCount
    }
  }
`;

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Wanna get me Touch</h3>
            <p>
              I'm baby kitsch jawn tacos readymade. Intelligentsia tumeric
              bodega boys, ennui yes plz thundercats salvia af synth ethical
              meditation lyft. Heirloom artisan hell of ugh actually pop-up roof
              party cred you probably haven't heard of them grailed gastropub.
              Yr Brooklyn roof party bicycle rights next level kinfolk pok pok
              cliche kale chips, raclette twee four loko offal tote bag. Vape
              butcher DIY coloring book. Air plant banjo migas enamel pin, jawn
              3 wolf moon synth vexillologist. Organic banjo hammock JOMO ugh.
            </p>
            <p>
              Vibecession gentrify pork belly kale chips vaporware stumptown
              narwhal offal. Williamsburg ennui marfa JOMO, praxis mixtape
              copper mug palo santo swag ugh chartreuse authentic. Marfa butcher
              kombucha yes plz craft beer typewriter direct trade bodega boys
              intelligentsia master cleanse fixie marxism tumblr echo park
              shoreditch. YOLO tilde neutral milk hotel, cupping put a bird on
              it sriracha waistcoat hexagon succulents etsy meditation DSA
              snackwave messenger bag. Put a bird on it irony man bun Brooklyn
              mixtape pickled vibecession sartorial. Butcher try-hard cliche,
              wolf fam asymmetrical selfies cronut photo booth +1. Unicorn paleo
              messenger bag, pitchfork enamel pin pok pok fashion axe.
            </p>
          </article>

          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Loot at this Awesome!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
