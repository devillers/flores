const Adventure = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-800">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Tarifs</h2>
            <p className="text-lg leading-relaxed">
              Sed vitae tortor lorem. In mauris urna, rutrum sed malesuada nec,
              elementum vitae turpis. Nulla bibendum finibus elit. Aliquam
              pharetra consectetur augue eget tempus. Suspendisse posuere, nibh
              non mattis lobortis, risus libero suscipit sapien, ut euismod ex
              neque nec est. Ut lacinia, sapien pellentesque dapibus volutpat,
              turpis augue egestas urna, non volutpat felis ligula sit amet
              neque. Aenean eleifend eget leo ac volutpat.
            </p>
            <a href="/" className="text-blue-500  mt-4 inline-block">
              voir plus
            </a>
          </div>
          <div className="bg-gray-200 h-64"></div> {/* Replace with an image */}
        </div>
      </div>
    </section>
  );
};

export default Adventure;
