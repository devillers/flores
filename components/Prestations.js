const Prestations = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-gray-800">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Prestastions</h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              aliquam faucibus ullamcorper. Donec molestie ultricies justo vitae
              bibendum. Donec finibus tellus nisl, eu feugiat sapien lacinia ac.
            </p>
            <a href="/" className="text-blue-500  mt-4 inline-block">
              voir plus
            </a>
          </div>
          <div className="bg-gray-200 h-64"></div>{' '}
          {/* Replace this with an image or slideshow */}
        </div>
      </div>
    </section>
  );
};

export default Prestations;
