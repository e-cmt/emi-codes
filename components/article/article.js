export default function Article({ hero, title, tags, date, body, img }) {
  return (
    <>
      {hero ? (
        <img className="w-11/12 sm:w-10/12 pb-8 sm:pb-16" src={hero} />
      ) : null}
      <div className="w-10/12 sm:p-6">
        <div>
          <h1 className="text-4xl font-medium tracking-widest pb-8">{title}</h1>
        </div>
        <h6 className="text-base font-medium pb-1">TECH</h6>
        <ul className="flex flex-col sm:flex-row text-base font-light flex-wrap pb-8">
          {tags.map((tag) => (
            <li key={tag.toString()} className="text-sm pr-2 pb-1">
              {tag}
            </li>
          ))}
        </ul>
        <h6 className="text-base font-medium pb-1">ABOUT THE PROJECT</h6>
        <p className="text-sm font-light pb-4">{date}</p>
        <p className="text-base font-light">{body}</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-start gap-4 md:gap-8 pt-6">
          {img
            ? img.map((img) => (
                <img
                  key={img.toString()}
                  className="flex w-11/12 md:w-8/12 lg:w-5/12"
                  src={img}
                ></img>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
