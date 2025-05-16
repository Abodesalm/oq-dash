function Report({ title, content }) {
  return (
    <div className="">
      <h1 className="font-semibold text-size-2">{title}</h1>
      <p className="text-size-6">{content}</p>
    </div>
  );
}

export default Report;
