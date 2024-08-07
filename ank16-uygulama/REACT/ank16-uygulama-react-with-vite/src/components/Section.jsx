import React from 'react'

const Section = () => {
  return (<>
     <section id="home">
    <h1>Welcome to My Website</h1>
    <p>Hello, I'm Cem Mert  Şimşek, a web developer. Passionate about creating awesome websites.</p>
    <img src="cem.jpeg" alt="Profile Picture"/>
    <div class="icons">
      <a href="#" title="Twitter" ><i class="fa-brands fa-square-twitter fa-xl"></i></a>
      <a href="#" title="Instagram"><i class="fa-brands fa-square-instagram fa-xl"></i></a>
      <a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin fa-xl"></i></a>
      <a href="#" title="GitHub"><i class="fa-brands fa-github fa-xl"></i></a>
      <a href="#" title="Facebook"><i class="fa-brands fa-facebook fa-xl"></i></a>
    </div>
  </section>

  <section id="about">
    <h2>About Me</h2>
    <article>
      <h3>Background</h3>
      <p>I have been working in the web development industry for over 5 years. During this time, I have gained
        extensive experience in front-end development and responsive web design.</p>
    </article>
    <article>
      <h3>Education</h3>
      <p>I graduated with a degree in Computer Science from XYZ University. My coursework included web development,
        software engineering, and database management.</p>
    </article>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>
        <h4>HTML</h4>
        <p>I am proficient in writing clean and semantic HTML code. I have experience in using HTML5 features and
          understanding the importance of accessibility.</p>
      </li>
      <li>
        <h4>CSS</h4>
        <p>I have a strong grasp of CSS and its various properties. I am skilled in creating responsive layouts,
          customizing styles, and using CSS frameworks like Bootstrap.</p>
      </li>
      <li>
        <h4>JavaScript</h4>
        <p>I am experienced in JavaScript and have worked on several interactive web projects. I am familiar with
          modern frameworks like React and Angular.</p>
      </li>
      <li>
        <h4>Responsive Design</h4>
        <p>I have a good understanding of responsive design principles and have developed mobile-friendly websites that
          provide a seamless user experience across different devices and screen sizes.</p>
      </li>
    </ul>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <article>
      <h3>Project 1: E-commerce Website</h3>
      <p>This project involved creating a fully functional e-commerce website from scratch. I implemented features such
        as product listing, shopping cart, user authentication, and payment integration. The website was built using
        React and Redux for state management.</p>
    </article>
    <article>
      <h3>Project 2: Portfolio Website</h3>
      <p>I designed and developed a personal portfolio website to showcase my skills and projects. The website features a
        clean and modern design, and it is optimized for performance and SEO. I used HTML, CSS, and JavaScript for the
        frontend.</p>
    </article>
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <form>
      <div>
        <label for="userName">Name:</label>
        <input id="userName" name="userName" type="text" required/>
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" name="email" type="email" required/>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" cols="30" rows="5" required></textarea>
      </div>
      <div>
        <input type="submit" value="Send"/>
      </div>
    </form>
  </section>
  </>
  )
}

export default Section