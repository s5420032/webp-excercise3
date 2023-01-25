function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Dog Images</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
        <img src={props.src} alt="cute dog!" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props) {
  const { urls } = props;
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

function Main() {
  const urls = [
    "https://random.dog/5a34778b-ea6a-4e2f-8695-c35c7a665ad1.jpg",
    "https://random.dog/0f0ed568-0024-4107-a8c1-11368fe0f364.jpg",
    "https://random.dog/a8687aa1-37a7-4232-9521-989f52e2e059.jpg",
    "https://random.dog/7c39af90-95ba-4515-92c9-1c23b95e038b.jpg",
    "https://random.dog/6b3100c1-34a0-4795-8de6-82da13eec2af.jpg",
    "https://random.dog/441dc47a-b99b-4a74-bfe9-5159ddd1b9bf.jpg",
    "https://random.dog/6b41dccd-90ca-4ce8-a0e2-800e9ab92aa7.jpg",
    "https://random.dog/0cb1f3f8-a687-402d-b110-7bd4987b3547.jpg",
  ];
  return (
    <main>
      <section className="section">
        <div className="container">
        <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
        <p>
        「日本大学文理学部情報科学科 Webプログラミングの演習課題」
        5420032 遠藤駿介
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;