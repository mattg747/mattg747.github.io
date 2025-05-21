export default function About() {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I’m an EECS major at UC Berkeley, passionate about digital systems,
          embedded hardware, and photography. When I’m not designing CPUs or
          writing code, I’m out on the beach capturing volleyball games through
          my lens.
        </p>
        <p className="mt-4">Links: 
          <a className="text-blue-500 ml-2" href="https://github.com/mattg747" target="_blank" rel="noreferrer">GitHub</a>,
          <a className="text-blue-500 ml-2" href="https://www.linkedin.com/in/matthew-gerardi" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    );
  }